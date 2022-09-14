import React from "react";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { makeStyles } from "tss-react/mui";
type Props = {
  img: string | StaticImageData;
};

const useStyles = makeStyles()((theme) => ({
  Box: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    width: "100%",
    aspectRatio: "1/1",
  },
}));

const MainImg = ({ img }: Props) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.Box}>
      <Image src={img} alt="illustaration" layout="responsive" loading="lazy" />
    </Box>
  );
};

export default MainImg;
