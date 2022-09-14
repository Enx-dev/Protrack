import React from "react";
import { Typography, TypographyProps, styled } from "@mui/material";

const Title = styled(Typography)<TypographyProps>(() => ({
  fontSize: "24px",
  lineHeight: "36px",
  fontWeight: "500",
}));

export default Title;
