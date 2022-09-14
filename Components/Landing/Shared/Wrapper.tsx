import React from "react";
import { Box, styled, BoxProps } from "@mui/material";
type Props = {};

const Wrapper = styled(Box)<BoxProps>(({ theme }) => ({
  paddingInline: theme.spacing(9),
  [theme.breakpoints.down("md")]: {
    paddingInline: theme.spacing(3),
  },
}));

export default Wrapper;
