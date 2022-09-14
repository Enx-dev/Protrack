import * as React from "react";
import type { NextPage } from "next";
import Box from "@mui/material/Box";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  NavSection,
  HeroSection,
  FeaturesSection,
  CreateSection,
  ShareSection,
  FooterSection,
} from "../Components/Landing";

const Home: NextPage = () => {
  return (
    <Box>
      <NavSection />
      <HeroSection />
      <FeaturesSection />
      <CreateSection />
      <ShareSection />
      <FooterSection />
    </Box>
  );
};

export default Home;
