import { Box } from "@mui/material";

import SubscribeSection from "../components/home/SubscribeSection";

import VideoSection from "../components/home/VideoSection";
import SweetDreamsSection from "../components/home/SweetDreamsSection";
import Header from "../components/home/Navbar";
import Breadcrumbs from "./Breadcrumbs";

const Home = () => {
  return (
    <Box
      sx={{
        maxWidth: "1440px",

        backgroundColor: "#340253", // Replace 'red' with your desired background color
        borderRadius: "99px",
        py: 5,
        margin: "0 auto",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Header />
      <Breadcrumbs />
      <VideoSection />
      <SweetDreamsSection />
      <SubscribeSection />
    </Box>
  );
};

export default Home;
