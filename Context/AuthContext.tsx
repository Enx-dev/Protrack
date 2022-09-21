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
import db from "../utils/db";
import { TeamModel, UserModel } from "../Models/userModel";
import axios from "axios";

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
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
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
  setUser: () => null,
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
    db.connect();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
        let newUser = {
          name: {
            firstName: firstname,
            lastName: lastname,
          },
          email,
          tel,
          country: "",
          teams: [],
        };
        UserModel.insertMany(newUser, (err, results) => {
          if (!err) {
            console.log(results);
            return;
          }
          console.log(err);
        });
      })
      .then(() => {
        db.disconect();
        push("/dashboard");
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
      .then(async (userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((err) => {
        setError(false);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const signinGithub = async () => {
    const provider = new GithubAuthProvider();
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then(async (userCredential) => {
        const user = userCredential.user;
        setUser(user);
        setIsAuthenticated(true);
      })
      .then(() => {
        push("/dashboard");
      })
      .catch((err) => {
        setError(true);
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const signinGoogle = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    await signInWithPopup(auth, provider)
      .then(async (userCredential) => {
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
      .then(async () => {
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
      setUser,
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
