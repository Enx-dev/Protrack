import React from "react";
import Wrapper from "../Shared/Wrapper";
import { Container, Grid, Typography, Box, Theme } from "@mui/material";
import Image from "next/image";
import feImg from "../../../asset/image/Features.svg";
import { styles } from "./Styles";
type Props = {};

const features = [
  {
    _id: 1,
    name: "Easy Access",
    desc: "Protrack is an App with intuitive interface and promotes team collaboration.",
  },
  {
    _id: 2,
    name: "Task Tracking",
    desc: "ProTrack helps you to track the status of tasks and your project progression.",
  },
  {
    _id: 3,
    name: "Visual Appeal",
    desc: "it is a simplified task management app with aesthetically pleasing design features.",
  },
  {
    _id: 4,
    name: "Task Scheduling",
    desc: "Our app allows users organize, create and manage assigned task.",
  },
];

const Features = (props: Props) => {
  const { classes } = styles();
  return (
    <Wrapper>
      <Typography variant="h1" className={classes.heading}>
        Why ProTrack?
      </Typography>
      <Container className={classes.wrapper}>
        <Box className={classes.Img}>
          <Image src={feImg} layout="responsive" />
        </Box>
        <Grid
          sx={{ marginTop: "2rem", justifyContent: "center", height: "100%" }}
          container
          spacing="1.5rem">
          {features.map((items) => (
            <Grid key={items._id} item className={classes.gridItem}>
              <Typography variant="h2">{items.name}</Typography>
              <Typography className={classes.body1} variant="body1">
                {items.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Features;
