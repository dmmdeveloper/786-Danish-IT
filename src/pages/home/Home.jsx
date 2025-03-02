import React  , {useEffect} from "react";
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
import { useLocation } from "react-router-dom";
function Home() {

  const {hash}  = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "auto" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  
  return (
    <>
      <div className="h-[300vh]">
        <span id="home-hero" ></span>
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
