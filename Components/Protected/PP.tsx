import React, { useEffect, useLayoutEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useRouter } from "next/router";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../Firebase/config";
type Props = {
  children: React.ReactNode;
};

const PP = ({ children }: Props) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  console.log(user);
  console.log(isLoading);
  console.log(isAuthenticated);
  const { push } = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser && !isLoading) {
        push("/");
      }
    });
  }, [user]);
  return <>{isLoading ? "loading" : children}</>;
};

export default PP;
