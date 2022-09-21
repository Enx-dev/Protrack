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
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues } from "react-hook-form/dist/types";
import axios from "axios";
import { GetServerSidePropsContext } from "next/types";
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

  const schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler: SubmitHandler<FieldValues> = ({ email, password }) => {
    signin(email, password);
  };
  return (
    <Wrapper>
      <Image img={signupImg} />
      <FormWrapper as="div">
        <Title>Welcome back</Title>
        <Form as="form" onSubmit={handleSubmit(submitHandler)}>
          <TextField
            className={classes.inputStyles}
            label="Email"
            variant="outlined"
            {...register("email")}
          />
          <TextField
            className={classes.inputStyles}
            label="Password"
            variant="outlined"
            {...register("password")}
          />
          <Button type="submit">
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

// export const getServerSideProps = async ({
//   req,
//   res,
// }: GetServerSidePropsContext) => {
//   const user = await axios.get("http://localhost:3000/api/auth/user");
//   console.log(user.data);

//   if (user.data) {
//     res.writeHead(302, { Location: "/dashboard" });
//   }
//   return {
//     props: {},
//   };
// };
