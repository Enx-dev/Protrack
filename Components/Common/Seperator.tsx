import React from "react";
import { Grid, Stack, Typography, styled } from "@mui/material";
type Props = {};

const Divider = styled("hr")(({ theme }) => ({
  width: "100%",
  height: "1px",
  borderColor: theme.palette.grey[400],
}));

const Seperator = (props: Props) => {
  return (
    <Stack
      direction="row"
      mt="2rem"
      mb="1rem"
      spacing="7px"
      alignItems="center"
      width="100%">
      <Divider />
      <Typography>or</Typography>
      <Divider />
    </Stack>
  );
};

export default Seperator;
