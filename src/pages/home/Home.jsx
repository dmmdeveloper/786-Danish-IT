import React from "react";
import {
  Grid,
  Hero,
  HomeAbout,
  Homeachievements,
  HomeFAQ,
  HomeMessage,
  Nav,
  Slider,
} from "../../components";
import { HomeCards } from "../../data";

function Home() {
  return (
    <>
      <div className="h-[300vh]">
        <span></span>
        <Nav />
        <Hero />
        {/* Landing OverView Page  Section*/}
        <HomeAbout />
        {/* top 12 Services Skills  */}
        <Grid />
        {/* Technology Icons Slider  */}
        <Slider />
        {/* FAQs */}
        <HomeFAQ />
        <Homeachievements />
        {/* Touch Us or Send Email  */}
        <HomeMessage/>
        {/* Footer */}
      </div>
    </>
  );
}

export default Home;
