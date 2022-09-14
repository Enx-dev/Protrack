import React from "react";
import {
  Container,
  styled,
  ContainerProps,
  TextField,
  ButtonGroup,
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
import { Padding } from "@mui/icons-material";
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
  const { classes } = useStyles();
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
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Last Name"
            variant="outlined"
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Phone Number"
            variant="outlined"
            type="tel"
          />
          <TextField
            className={classes.inputStyles}
            required
            label="E-mail"
            variant="outlined"
            type={"email"}
          />
          <TextField
            className={classes.inputStyles}
            required
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <Button>Create Account</Button>
        </Form>
        <Seperator />
        <ButtonGroup className={classes.btnGrup}>
          <Button icon={<Image src={fbIcon} width={20} height={20} />}>
            FaceBook
          </Button>
          <Button icon={<Image src={GoIcon} width={20} height={20} />}>
            Google
          </Button>
        </ButtonGroup>
        <AdditionalInfo />
      </FormWrapper>
    </Wrapper>
  );
};

export default Signup;
