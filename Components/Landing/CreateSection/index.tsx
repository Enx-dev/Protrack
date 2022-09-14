import { Container, Box, Typography, Theme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Wrapper from "../Shared/Wrapper";
import createImg from "../../../asset/image/create.svg";
import { makeStyles } from "tss-react/mui";
type Props = {};

const styles = makeStyles()((theme: Theme) => ({
  wrapper: {
    marginBlock: "4rem",
    padding: "0",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row-reverse",
      gap: "6rem",
      justifyContent: "space-between",
      paddingLeft: "0",
      paddingRight: "0",
      alignItems: "center",
    },
  },
  textContent: {
    marginBlock: "2rem",
    width: "100%",
  },
  heading: {
    fontSize: "28px",
    lineHeight: "36px",
    wordSpacing: "0.1em",
    fontWeight: "bold",
    mark: {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px",
      lineHeight: "48px",
    },
  },
  subHeading: {
    color: theme.palette.grey[700],
    marginTop: "0.5rem",
  },
  Img: {
    width: "100%",
    height: "100%",
  },
}));

const CreateSection = (props: Props) => {
  const { classes } = styles();
  return (
    <Wrapper>
      <Container className={classes.wrapper}>
        <Box className={classes.Img}>
          <Image src={createImg} layout="responsive" />
        </Box>
        <Box className={classes.textContent}>
          <Typography className={classes.heading} variant="h1">
            <mark>Create</mark> task and <mark>collaborate</mark> with your
            <mark> team </mark>
            effectively.
          </Typography>
          <Typography className={classes.subHeading}>
            Protrack is a task management app designed to help individuals and
            teams work together in one unified workspace.
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default CreateSection;
