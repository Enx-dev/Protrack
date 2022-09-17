import { onAuthStateChanged, User } from "firebase/auth";
import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  createContext,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { auth, DB } from "../Firebase/config";
import { useRouter } from "next/router";
import { setDoc, doc } from "firebase/firestore";
type Props = {
  children: React.ReactNode;
};

type IAUth = {
  signin: (email: string, password: string) => void;
  signup: (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    tel: string
  ) => void;
  signinGoogle: () => void;
  signinGithub: () => void;
  signout: () => void;
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: boolean;
};

const AuthContext = createContext<IAUth>({
  signin: (email, password) => {},
  signup: (firstname, lastname, email, password, tel) => {},
  signinGoogle: () => {},
  signinGithub: () => {},
  signout: () => {},
  user: null,
  isLoading: false,
  isAuthenticated: false,
  error: false,
});

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { push } = useRouter();

  useEffect(() => {
    const session = onAuthStateChanged(auth, async (currentuser) => {
      setLoading(true);
      if (currentuser) {
        setUser(currentuser);
        setIsAuthenticated(true);
        setLoading(false);
        return;
      } else {
        setLoading(false);
      }
    });

    return () => session();
  }, []);

  const signup = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    tel: string
  ) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        setDoc(doc(DB, "users", email), {
          name: {
            firstname,
            lastname,
          },
          uid: user?.uid,
          email,
          tel,
          img: "",
          country: "",
          teams: [],
          projects: [],
        })
          .then(() => {
            push("/dashboard");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        console.log(errorMessage);
      })

      .finally(() => {
        setLoading(false);
      });
  };
  const signin = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((err) => {
        setError(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signinGithub = async () => {
    const provider = new GithubAuthProvider();
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const signinGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const signout = async () => {
    await signOut(auth)
      .then(() => {
        setUser(null);
        setIsAuthenticated(false);
      })
      .then(() => {
        push("/");
      })
      .catch((err) => {
        setError(true);
      });
  };
  const authValue = useMemo(() => {
    return {
      user,
      isLoading,
      isAuthenticated,
      error,
      signup,
      signin,
      signinGithub,
      signinGoogle,
      signout,
    };
  }, [user, error, isAuthenticated, isLoading]);
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
