import React from "react";
import { Box, BoxProps, styled, FormGroupProps } from "@mui/material";
type Props = BoxProps & FormGroupProps & {};

const Form = styled(Box)<Props>(({ theme }) => ({
  "& > *": {
    marginTop: theme.spacing(2),
  },
}));

export default Form;
