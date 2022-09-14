import React from "react";
import {
  Box,
  Typography,
  Button,
  OutlinedInput,
  Grid,
  Container,
} from "@mui/material";
import Image from "next/image";
import heroImg from "../../../asset/image/HeroImg.svg";
import Wrapper from "../Shared/Wrapper";
import styles from "./Styles";
import { useRouter } from "next/router";

type Props = {};

const HeroSection = (props: Props) => {
  const { push } = useRouter();
  const { classes } = styles();
  return (
    <Wrapper>
      <Container className={classes.wrapper}>
        <Box className={classes.heroImg}>
          <Image src={heroImg} />
        </Box>
        <Box width="100%">
          <Typography className={classes.heading}>
            Protrack help teams to <span>collaborate</span> , <span>plan </span>
            and <span>manage</span> tasks.
          </Typography>
          <Typography className={classes.subheading}>
            Seamlessly manage projects, track tasks and collaborate with your
            team across multiple projects; all from one tool.
          </Typography>
          <Grid container spacing="1rem" className={classes.inputGrid}>
            <Grid className={classes.gridI} item>
              <OutlinedInput
                sx={{ width: "100%", alignSelf: "stretch" }}
                placeholder="Email"
              />
            </Grid>
            <Grid className={classes.gridBtn} item>
              <Button
                sx={{
                  width: "100%",
                  height: "50px",
                  boxShadow: "1px 2px 3px 3px #8080809e",
                }}
                color="primary"
                variant="contained">
                <Box
                  display="grid"
                  sx={{ placeItems: "center" }}
                  width="100%"
                  height="100%"
                  onClick={() => push("/signin")}>
                  Sign up
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default HeroSection;
