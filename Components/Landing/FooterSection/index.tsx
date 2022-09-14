import React from "react";
import Wrapper from "../Shared/Wrapper";
import { makeStyles } from "tss-react/mui";
import {
  Container,
  Box,
  Typography,
  List,
  Stack,
  ListItem,
  Theme,
} from "@mui/material";
type Props = {};

const style = makeStyles()((theme) => ({
  container: {
    paddingBlock: "1rem",
    background: `linear-gradient(180deg,${theme.palette.primary[400]},${theme.palette.primary[500]},${theme.palette.primary[600]})`,
    color: "white",
    maxWidth: "100%",
  },
  Box: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  Box2: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "2rem",
    },
  },
}));

const Footer = (props: Props) => {
  const { classes } = style();
  return (
    <Container className={classes.container} maxWidth="xl">
      <Wrapper>
        <Box className={classes.Box}>
          <Box className={classes.Box2}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: "700",
                marginBottom: "2rem",
              }}>
              Protrack
            </Typography>
          </Box>
          <Box className={classes.Box2}>
            <Stack>
              <Typography sx={{ fontSize: "24px" }}>Company</Typography>
              <List>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
              </List>
            </Stack>
            <Stack>
              <Typography sx={{ fontSize: "24px" }}>Company</Typography>
              <List>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
              </List>
            </Stack>
            <Stack>
              <Typography sx={{ fontSize: "24px" }}>Company</Typography>
              <List>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
                <ListItem>home</ListItem>
              </List>
            </Stack>
          </Box>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Footer;
