import { NextPageContext } from "next";
import {
  getCsrfToken,
  getProviders,
  getSession,
  signOut,
} from "next-auth/react";
import React from "react";

type Props = {};

const Dashbord = (props: Props) => {
  return (
    <div>
      <button onClick={() => signOut()}>sign out</button>
    </div>
  );
};

Dashbord.getInitialProps = async (context: NextPageContext) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (!session && res) {
    res.writeHead(302, {
      location: "/",
    });
    res.end();
    return;
  }
  return {
    session: session,
  };
};

export default Dashbord;
