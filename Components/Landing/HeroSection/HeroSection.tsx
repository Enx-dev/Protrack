import React, { useEffect } from "react";
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
import gsap from "gsap-trial";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { push } = useRouter();
  const { classes } = styles();

  useEffect(() => {
    const animate = gsap.matchMedia();
    animate.add("(max-width: 899px)", (ctx) => {
      gsap.fromTo(
        "#HeroImg",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power1.in" }
      );
      const animation = gsap.fromTo(
        "#animateText",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
        }
      );
      ScrollTrigger.create({
        trigger: "#HeroImg",
        animation,
        scrub: 0.2,
        start: "top 10%",
        once: true,
      });
      gsap.utils.toArray("#featuresItem").forEach((item: any, i) => {
        const fAnimate = gsap.fromTo(
          item,
          { opacity: 0, xPercent: i % 2 === 0 ? 100 : -100 },
          {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "back2.in",
          }
        );
        ScrollTrigger.create({
          trigger: item,
          animation: fAnimate,
          scrub: 0.2,
          once: true,
          start: "-100% top",
          end: "top top",
        });
      });
      gsap.utils.toArray("#share").forEach((item: any, i) => {
        const fAnimate = gsap
          .timeline({ duration: 1, ease: "back2.in" })
          .fromTo(
            item,
            { opacity: 0, yPercent: 50 },
            {
              opacity: 1,
              yPercent: 0,
            }
          )
          .fromTo("#shareItem", { opacity: 0 }, { opacity: 1 });
        ScrollTrigger.create({
          trigger: item,
          animation: fAnimate,
          scrub: 0.2,
          once: true,
          start: "-100% 50%",
          end: "top top",
          markers: true,
        });
      });
    });

    animate.add("(min-width:900px)", () => {
      gsap.fromTo(
        "#HeroImg",
        { opacity: 0, xPercent: 100 },
        { opacity: 1, xPercent: 0, duration: 1, ease: "power1.in" }
      );
      gsap.fromTo(
        "#animateText",
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          delay: 0.5,
          duration: 1,
          stagger: { amount: 0.5 },
        }
      );
      const fAnimate = gsap.fromTo(
        "#featuresItem",
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          stagger: { amount: 0.5 },
          duration: 1,
        }
      );
      ScrollTrigger.create({
        trigger: "#features",
        animation: fAnimate,
        once: true,
        start: "-50% top",
        end: "bottom 30%",
      });
      gsap.utils.toArray("#share").forEach((item: any, i) => {
        const fAnimate = gsap
          .timeline({ duration: 1, ease: "back2.in" })
          .fromTo(
            item,
            { opacity: 0, yPercent: 50 },
            {
              opacity: 1,
              yPercent: 0,
            }
          )
          .fromTo("#shareItem", { opacity: 0 }, { opacity: 1 }, "-=50%");
        ScrollTrigger.create({
          trigger: item,
          animation: fAnimate,
          once: true,
          start: "-100% 50%",
        });
      });
    });
  }, []);

  return (
    <Wrapper>
      <Container className={classes.wrapper}>
        <Box id="HeroImg" className={classes.heroImg}>
          <Image src={heroImg} />
        </Box>
        <Box width="100%">
          <Typography id="animateText" className={classes.heading}>
            Protrack help teams to <span>collaborate</span> , <span>plan </span>
            and <span>manage</span> tasks.
          </Typography>
          <Typography id="animateText" className={classes.subheading}>
            Seamlessly manage projects, track tasks and collaborate with your
            team across multiple projects; all from one tool.
          </Typography>
          <Grid
            container
            id="animateText"
            spacing="1rem"
            className={classes.inputGrid}>
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
                  onClick={() => push("/signup")}>
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
