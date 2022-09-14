import React, { useState } from "react";
import Wrapper from "../Shared/Wrapper";
import {
  AppBar,
  Drawer,
  Box,
  Typography,
  Link,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../../asset/image/logo.svg";
import { makeStyles } from "tss-react/mui";
import Image from "next/image";
import { Button as CusBtn } from "../../Common";
import { useRouter } from "next/router";
type Props = {};

const useStyles = makeStyles()((theme) => ({
  nav: {
    paddingBlock: theme.spacing(3),
    backgroundColor: "transparent",
    boxShadow: "1px 1px 7px 1px #d2d0d08c",
    color: "black",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const links = ["Pricing", "Feature", "About us"];

const Navbar = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const { push } = useRouter();
  const { classes } = useStyles();
  return (
    <AppBar position="static" className={classes.nav}>
      <Wrapper>
        <Box className={classes.navbar}>
          <Typography
            sx={{ fontSize: "30px", FontWeight: "700" }}
            color="primary.500">
            ProTrack
          </Typography>
          <IconButton
            sx={{ display: ["block", "block", "none"] }}
            onClick={() => setToggle(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={toggle}>
            <SideBar toggler={setToggle} />
          </Drawer>
          <Box
            sx={{
              display: ["none", "none", "flex"],
              gap: "2rem",
              fontSize: "1rem",
            }}>
            {links.map((link) => (
              <Button key={link}>{link}</Button>
            ))}
          </Box>
          <Box
            sx={{
              display: ["none", "none", "flex"],
              alignItems: "center",
              gap: "5px",
            }}>
            <Button variant="outlined">
              <Box width="100%" height="100%" onClick={() => push("/signin")}>
                Login
              </Box>
            </Button>
            <Button variant="contained" color="primary">
              Get Protrack for free
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </AppBar>
  );
};

type SidebarProps = {
  toggler: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ toggler }: SidebarProps) => (
  <Box
    sx={{
      paddingBlock: "3rem",
      paddingInline: "2rem",
      width: "70vw",
      maxWidth: "400px",
      position: "relative",
      display: ["block", "block", "none"],
    }}>
    <IconButton
      sx={{ position: "absolute", top: "10px", right: "0" }}
      onClick={() => toggler(false)}>
      <CloseIcon />
    </IconButton>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}>
      {links.map((link) => (
        <Button sx={{ fontSize: "1.5rem" }} key={link}>
          {link}
        </Button>
      ))}
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginBlockStart: "4rem",
      }}>
      <Button
        sx={{
          alignSelf: "stretch",
          paddingBlock: "0.5rem",
          transition: "all 0.3s ease-in",
          ":hover": { backgroundColor: "primary.main", color: "white" },
        }}
        variant="outlined">
        Login
      </Button>
      <Button
        sx={{ alignSelf: "stretch", paddingBlock: "0.5rem" }}
        variant="contained"
        color="primary">
        Get Protrack for free
      </Button>
    </Box>
  </Box>
);
export default Navbar;
