import React, { useState } from "react";
import {
  Drawer,
  DrawerProps,
  Container,
  Typography,
  IconButton,
  Icon,
  Toolbar,
  AppBar,
  Avatar,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Groups2Icon from "@mui/icons-material/Groups2";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TaskIcon from "@mui/icons-material/Task";
import DashboardIcon from "@mui/icons-material/Dashboard";

const links = [
  {
    _id: 0,
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    _id: 1,
    name: "Teams",
    icon: <Groups2Icon />,
  },
  {
    _id: 2,
    name: "Projects",
    icon: <AccountTreeIcon />,
  },
  {
    _id: 3,
    name: "Tasks",
    icon: <TaskIcon />,
  },
];

import { useAuth } from "../../../Context/AuthContext";
type Props = {};

function drawerItems() {
  return (
    <Container
      sx={{
        height: "100%",
        width: "300px",
        backgroundColor: "primary.main",
      }}>
      <Avatar />
      <Divider />
      <Stack>
        {links.map((link) => (
          <Stack sx={{ color: "white" }} key={link._id} direction="row">
            {link.icon}
            <Typography>{link.name}</Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}

const SidePane = (props: Props) => {
  const [open, setOpen] = useState(false);
  const { signout } = useAuth();
  return (
    <>
      <AppBar
        sx={{
          marginInlineStart: "300px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          padding: "1rem",
          justifyContent: "space-between",
          width: { sm: "100%", md: `calc(100% - 300px)` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen((prev) => !prev)}
            edge="start"
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ fontSize: "24px" }}>ProTrack</Typography>
        </Toolbar>
        <Button
          sx={{
            padding: "0.5rem",
            color: "white",
            borderColor: "whitesmoke",
          }}
          onClick={(e) => signout()}
          variant="outlined">
          Logout
        </Button>
      </AppBar>
      <Drawer
        id="desktop"
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& > div": { backgroundColor: "transparent" },
        }}>
        {drawerItems()}
      </Drawer>
      <Drawer
        id="mobile"
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        variant="temporary"
        sx={{
          display: { xs: "block", md: "none" },
        }}
        open={open}
        onClose={() => setOpen((prev) => !prev)}>
        {drawerItems()}
      </Drawer>
    </>
  );
};

export default SidePane;
