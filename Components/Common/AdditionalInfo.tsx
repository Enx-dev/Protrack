import React from "react";
import { Typography, Stack, Box, Link } from "@mui/material";
import { makeStyles } from "tss-react/mui";
type Props = {};

const useStyles = makeStyles()((theme) => ({
  wrapper: {
    fontSize: "12px",
    marginTop: "2rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: "3rem",
  },
  wrapper_top: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    gap: "6px",
  },
  wrapper_bottom: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    textAlign: "center",
  },
}));

const AdditionalInfo = (props: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Stack className={classes.wrapper_top}>
        <Typography>
          By signing up, you confirm that you've read and accepted our
        </Typography>
        <Typography>
          <Link href="/#">Terms of Service</Link>
          and
          <Link href="/#">Privacy Policy.</Link>
        </Typography>
      </Stack>
      <Box className={classes.wrapper_bottom}>
        <Typography>Already have an account?</Typography>
        <Link href="/signin">Sign in</Link>
      </Box>
    </Box>
  );
};

export default AdditionalInfo;
