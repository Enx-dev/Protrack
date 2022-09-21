import { useRouter } from "next/dist/client/router";
import React, { useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
type Props = {
  children: React.ReactNode;
};

const PP = ({ children }: Props) => {
  const { user, isLoading } = useAuth();
  const { push } = useRouter();
  useEffect(() => {
    if (!isLoading && !user) {
      push("/signin");
    }
  }, [user]);
  return <>{isLoading ? "Loading" : children}</>;
};

export default PP;
