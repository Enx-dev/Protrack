import React, { useEffect, useState } from "react";
import {
  Container,
  styled,
  ContainerProps,
  TextField,
  ButtonGroup,
  Box,
} from "@mui/material";
import {
  FormWrapper,
  Title,
  Form,
  AdditionalInfo,
  Seperator,
} from "../Components/Common";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";
import fbIcon from "../asset/image/Facebook.svg";
import GoIcon from "../asset/image/Google.svg";
import Button from "../Components/Common/Button/Button";
import SignupImg from "../Components/Common/Images";
import signupimg from "../asset/image/Signup.svg";
import { useAuth } from "../Context/AuthContext";
type Props = {};

const useStyles = makeStyles()({
  btnGrup: {
    display: "flex",
    flexDirection: "column",
  },
  inputStyles: { marginBlock: "1rem", minWidth: "100%" },
});

export const Wrapper = styled(Container)<ContainerProps>(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "grid",
    placeContent: "center",
    gridAutoFlow: "column",
    gridTemplateColumns: "1fr 0.5fr",
    alignItems: "center",
    gap: "4rem",
    padding: "2rem",
  },
  display: "grid",
  placeContent: "center",
}));

const Signup = (props: Props) => {
  const { signinGoogle, signinGithub, signup, user } = useAuth();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const { classes } = useStyles();

  function handleSignInWithEmail() {
    signup(firstName, lastName, email, password, tel);
  }

  return (
    <Wrapper>
      <SignupImg img={signupimg} />
      <FormWrapper as="div">
        <Title variant="h1">Sign up for a free account</Title>
        <Form as="form">
          <TextField
            className={classes.inputStyles}
            required
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Phone Number"
            variant="outlined"
            type="tel"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <TextField
            className={classes.inputStyles}
            required
            label="E-mail"
            variant="outlined"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Password"
            variant="outlined"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>
            <Box onClick={() => handleSignInWithEmail()}>Create Account</Box>
          </Button>
        </Form>
        <Seperator />
        <ButtonGroup className={classes.btnGrup}>
          <Button icon={<Image src={fbIcon} width={20} height={20} />}>
            <Box width="100%" height="100%" onClick={() => signinGithub()}>
              Github
            </Box>
          </Button>
          <Button icon={<Image src={GoIcon} width={20} height={20} />}>
            <Box width="100%" height="100%" onClick={() => signinGoogle()}>
              Google
            </Box>
          </Button>
        </ButtonGroup>
        <AdditionalInfo />
      </FormWrapper>
    </Wrapper>
  );
};

export default Signup;
