import { Theme } from "@mui/material";
import { makeStyles } from "tss-react/mui";

export const styles = makeStyles()((theme: Theme) => ({
  wrapper: {
    marginBlock: "3rem",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "6rem",
      justifyContent: "space-between",
      paddingLeft: "0",
      paddingRight: "0",
      [theme.breakpoints.up("md")]: {
        alignItems: "stretch",
      },
    },
  },
  heading: {
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "0.1em",
    color: "rgba(42, 60, 87, 0.87)",
  },
  gridItem: {
    padding: "1rem",
    textAlign: "center",
    justifyContent: "center",
    h2: {
      fontSize: "24px",
      fontWeight: "500",
      color: theme.palette.primary.main,
      marginBlockEnd: "10px",
    },
  },
  body1: {
    fontSize: "16px",
    minWidth: "10ch",
    color: theme.palette.grey[700],
    maxWidth: "20ch",
    textAlign: "center",
  },
  Img: {
    display: "block",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
