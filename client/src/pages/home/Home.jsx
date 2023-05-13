import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import HeroSection from "../../components/HeroSection/HeroSection";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default Home;
