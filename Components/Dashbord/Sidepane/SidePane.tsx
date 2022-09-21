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
  Link,
  Box,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import Groups2Icon from "@mui/icons-material/Groups2";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import TaskIcon from "@mui/icons-material/Task";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PP from "../../Protected/PP";
const links = [
  {
    _id: 0,
    name: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    _id: 1,
    name: "Teams",
    icon: <Groups2Icon />,
    link: "/teams",
  },
  {
    _id: 2,
    name: "Projects",
    icon: <AccountTreeIcon />,
    link: "/projects",
  },
  {
    _id: 3,
    name: "Tasks",
    icon: <TaskIcon />,
    link: "/tasks",
  },
];

import { useAuth } from "../../../Context/AuthContext";
type Props = {
  children: React.ReactNode;
};

function DrawerItems() {
  const { signout } = useAuth();
  const { pathname } = useRouter();

  return (
    <Container
      sx={{
        height: "100%",
        width: "300px",
        backgroundColor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBlock: "0.5rem",
      }}>
      <Avatar
        sx={{
          width: "100px",
          height: "100px",
          // display: { xs: "none", md: "block" },
        }}
      />
      <Divider sx={{ width: "100%", marginBlock: "2rem" }} />
      <Stack spacing="3rem" mt="1rem">
        {links.map((link) => (
          <Link key={link._id} href={link.link}>
            <Button
              startIcon={link.icon}
              sx={{
                "&:hover": {
                  "&:after": {
                    width: "100%",
                  },
                },
                width: "fit-content",

                "&:after": {
                  content: '""',
                  position: "absolute",
                  backgroundColor:
                    pathname === link.link ? "secondary.main" : "white",
                  width: "0%",
                  height: "5%",
                  bottom: "0",
                  transition: "all 0.5s ease",
                },
                position: "relative",
                color: pathname === link.link ? "secondary.main" : "white",
                cursor: "pointer",
                justifyContent: "flex-start",
              }}>
              {link.name}
            </Button>
          </Link>
        ))}
      </Stack>
      <Divider sx={{ width: "100%", marginBlock: "2rem" }} />
      <Button
        onClick={() => signout()}
        sx={{
          color: "white",
          width: "fit-content",
          justifyContent: "flex-start",
        }}
        startIcon={<LogoutIcon />}>
        Logout
      </Button>
    </Container>
  );
}

const SidePane = ({ children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container
        sx={{ minHeight: "100vh", paddingInline: "0", minWidth: "100vw" }}>
        <AppBar
          sx={{
            marginInlineStart: "300px",
            alignItems: "center",
            flexDirection: "row",
            padding: "1rem",
            justifyContent: "space-between",
            width: {
              sm: "100%",
              md: `calc(100% - 300px)`,
            },
            display: { xs: "block", md: "none" },
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
        </AppBar>
        <Drawer
          id="desktop"
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& > div": { backgroundColor: "transparent" },
          }}>
          {DrawerItems()}
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
          {DrawerItems()}
        </Drawer>
        <Box
          sx={{
            marginInlineStart: "300px",
            width: {
              sm: "100%",
              md: `calc(100% - 300px)`,
            },
          }}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default SidePane;
