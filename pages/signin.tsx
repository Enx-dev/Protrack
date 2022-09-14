import React from "react";
import { Wrapper } from "./signup";
import { TextField, ButtonGroup, Link, Box } from "@mui/material";
import {
  Button,
  Form,
  FormWrapper,
  Image,
  Seperator,
  Title,
} from "../Components/Common";
import { makeStyles } from "tss-react/mui";
import signupImg from "../asset/image/Signin.png";
import {
  useSession,
  signIn,
  signOut,
  getSession,
  getProviders,
  getCsrfToken,
} from "next-auth/react";
import { ProviderType } from "next-auth/providers";
import { CtxOrReq } from "next-auth/client/_utils";
import { NextPageContext } from "next";

type Props = {
  providers: ProviderType;
  csrfToken: any;
};

const useStyles = makeStyles()({
  btnGrup: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyles: { marginBlock: "1rem", minWidth: "100%" },
});

const Signin = ({ providers, csrfToken }: Props) => {
  const { classes } = useStyles();
  const { data } = useSession();
  console.log(data);
  return (
    <Wrapper>
      <Image img={signupImg} />
      <FormWrapper as="div">
        <Title>Join the fastest growing community now!</Title>
        <Form>
          <form action="/api/auth/signin/email" method="post">
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <TextField
              className={classes.inputStyles}
              label="Email"
              variant="outlined"
              name="email"
            />
            <Button type="submit">
              <Box> Log in </Box>
            </Button>
          </form>
          <Button>
            <Box onClick={() => signOut()}> Log out </Box>
          </Button>
        </Form>
        <Seperator />
        <ButtonGroup className={classes.btnGrup}>
          <Button>
            <Box width="100%" height="100%" onClick={() => signIn("github")}>
              Github
            </Box>
          </Button>
          <Button>
            <Box width="100%" height="100%" onClick={() => signIn("google")}>
              Google
            </Box>
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Wrapper>
  );
};

Signin.getInitialProps = async (context: NextPageContext) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session) {
    res.writeHead(302, {
      location: "/dashbord",
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await getProviders(),
    csrfToken: await getCsrfToken(context),
  };
};

export default Signin;
