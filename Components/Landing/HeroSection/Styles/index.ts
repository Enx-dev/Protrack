import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const heroStyles = makeStyles()((theme) => ({
  wrapper: {
    marginBlockEnd: "5rem",
    marginBlockStart: "3rem",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      gap: "6rem",
      justifyContent: "space-between",
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  heading: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "clamp(24px,4vw,64px)",
    fontWeight: "700",
    lineHeight: "1.3em",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "start",
    },
    span: {
      color: theme.palette.primary.main,
    },
  },
  subheading: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "clamp(16px,2vw,24px)",
    fontWeight: "400",
    lineHeight: "1.3em",
    textAlign: "center",
    color: theme.palette.grey[700],
    [theme.breakpoints.up("md")]: {
      textAlign: "start",
      marginTop: "20px",
      marginBottom: "20px",
    },
  },
  heroImg: {
    width: "100%",
    display: "grid",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
  inputGrid: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  gridBtn: {
    width: "100%",
    alignSelf: "stretch",
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
  gridI: {
    width: "100%",
    alignSelf: "stretch",
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  },
}));

export default heroStyles;
