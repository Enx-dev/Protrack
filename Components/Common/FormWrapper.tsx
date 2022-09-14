import React from "react";
import { Box, styled, BoxProps } from "@mui/material";
type Props = {};

interface FormProps extends BoxProps {}

const FormWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
  maxWidth: "400px",
}));

export default FormWrapper;
