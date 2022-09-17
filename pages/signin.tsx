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
import { useAuth } from "../Context/AuthContext";

type Props = {};

const useStyles = makeStyles()({
  btnGrup: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyles: { marginBlock: "1rem", minWidth: "100%" },
});

const Signin = () => {
  const { classes } = useStyles();
  const [email, setEmail] = React.useState<string>("");
  const { signinGithub, signinGoogle, signin, user } = useAuth();
  console.log(user);

  return (
    <Wrapper>
      <Image img={signupImg} />
      <FormWrapper as="div">
        <Title>Welcome back</Title>
        <Form as="form">
          <TextField
            className={classes.inputStyles}
            label="Email"
            variant="outlined"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.inputStyles}
            label="Password"
            variant="outlined"
            name="password"
          />
          <Button>
            <Box> Log in </Box>
          </Button>
        </Form>
        <Seperator />
        <ButtonGroup className={classes.btnGrup}>
          <Button>
            <Box width="100%" height="100%" onClick={() => signinGithub()}>
              Github
            </Box>
          </Button>
          <Button>
            <Box width="100%" height="100%" onClick={() => signinGoogle()}>
              Google
            </Box>
          </Button>
        </ButtonGroup>
      </FormWrapper>
    </Wrapper>
  );
};

export default Signin;
