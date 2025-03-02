import React, { useState } from "react";
// import loading from "../../assets/Animation_1740565613749.gif";
// import loading from "../../assets/tech.gif";
import gif1 from "../../assets/digital.gif";
import gif2 from "../../assets/software.gif";
import gif3 from "../../assets/SEO.gif";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

function Hero() {
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % poster.length); // Change 5 to the total number of items
  };
  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + poster.length) % poster.length); // Change 5 to the total number of items
  };

  const handlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: prev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      {...handlers}
      style={{
        // backgroundImage: `url(${loading})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
      className="h-screen w-full select-none bg-black relative"
    >
      <div
        key={index + poster[index].gif1}
        style={{
          backgroundImage: `url(${poster[index].video})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
        className="h-screen w-full select-none bg-black relative"
      ></div>
      {/* <video
        key={index}
        className="h-full w-full object-cover"
        src={poster[index].video}
        autoPlay
        loop
        muted
      /> */}

      {/* Hero Content  */}
      <div className="h-full w-full top-0 left-0 ring-0 bottom-0 absolute">
        {/* Heading and Descriptions */}
        <div className=" text-white  md:ml-[100px] ml-3 md:h-[80%] md:pt-[70px]  pt-[100px] min-h-[70%] h-auto md:w-[70%] w-[80%] ">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index + poster[index].desciption}
              className="md:leading-[100px]  md:text-[96px] text-5xl"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: poster[index].heading }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={index + poster[index].heading}
              className="text-[18px] ml-2 md:ml-0 mt-3 font-[100]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              dangerouslySetInnerHTML={{ __html: poster[index].desciption }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </AnimatePresence>
        </div>
        <div className="md:ml-[100px] ml-8 mt-8">
          <AnimatePresence mode="wait">
            <motion.button
              key={index + poster[index].btn}
              className="bg-white her0-btn duration-300 border-[1.5px] border-[#ffffff7e] hover:border-white  hover:scale-110  md:py-2 py-1  md:px-6 px-3 md:text-[17px] text-[15px]  rounded-lg uppercase"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              {poster[index].btn}
            </motion.button>
          </AnimatePresence>
        </div>

        {/* left */}
        <div className="h-full md:w-[80px] w-[20px] top-0   absolute md:text-5xl text-2xl  left-0 flex items-center justify-end">
          <i
            onClick={prev}
            className="fa-solid fa-chevron-left hero-icon-anim hover:scale-110 duration-300 cursor-pointer"
          ></i>
        </div>

        {/* Right */}
        <div className="h-full bg md:w-[80px] w-[25px]  absolute md:text-5xl text-2xl right-0 top-0 flex items-center justify-start">
          <i
            onClick={next}
            className="fa-solid hover:scale-110 duration-300 cursor-pointer fa-chevron-right hero-icon-anim"
          ></i>
        </div>
      </div>
    </section>
  );
}

export default Hero;

const poster = [
  {
    id: 0,
    video: gif2,
    heading: `Transform Ideas <br/> into Powerful <br/> Software`,
    desciption:
      "Custom software, mobile apps, and cloud solutions designed to scale your business with <br/> cutting-edge innovation and seamless functionality.",
    btn: "Start Building Now",
    to: "",
  },
  {
    id: 1,
    video: gif3,
    heading: "Turn Clicks <br/> into Revenue <br/> Streams",
    desciption:
      "Grow your online presence with expert SEO, social media marketing, and monetization <br/> strategies for YouTube, Facebook, and e-commerce platforms.",
    btn: "Boost Your Business",
    to: "",
  },
  {
    id: 2,
    video: gif1,
    heading: "IT & Cloud <br/> Solutions",
    desciption:
      " From cloud computing to data recovery and networking, we provide reliable <br/> IT solutions to keep your business connected and efficient.",
    btn: "Optimize Now",
    to: "",
  },
];
