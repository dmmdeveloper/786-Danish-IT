import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function HomeAbout() {
  return (
    <>
      <section className=" w-full mt-11">
        {Content.map((content) => {
          return (
            <>
              <div
                key={content.id + content.description}
                className="md:w-1/2 w-[90%] mt-4 mx-auto flex justify-center items-center flex-col md:space-y-3 space-y-2"
              >
                <mark className="bg-appOrange text-white">
                  <motion.h1
                    initial={{ opacity: 0, x: content.id % 2 === 0 ? 80 : -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.6 }} // Runs once when 30% of element is visible
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:text-6xl text-4xl font-[100] uppercase"
                  >
                    {content.headig}
                  </motion.h1>
                </mark>

                <motion.p
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }} // Runs once when 30% of element is visible
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  className="md:text-center text-justify text-sm md:text-[16px] text-[#111111] font-[200]"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus magnam reprehenderit nemo quibusdam maiores quo,
                  corrupti animi veniam nam dolorum, consequatur sapiente fuga
                  omnis earum itaque debitis impedit temporibus commodi?
                </motion.p>
                {content.line && (
                  <div className="md:h-[70px] h-[50px] w-[2px] bg-appOrange opacity-50"></div>
                )}
              </div>
            </>
          );
        })}
        {/* Learn More */}
        <div className="text-center mt-[70px]">
          <a
            href={"/about#about-section"}
            className="border-[3px] group md:py-2 py-[5px] md:px-6 px-3 learn-more border-appOrange rounded-full md:text-2xl text-xl uppercase"
          >
            Learn more{" "}
            <i class="fa-solid group-hover:ml-3 duration-150 fa-arrow-right  text-appOrange"></i>{" "}
          </a>
        </div>
        {/*  */}
      </section>
    </>
  );
}

export default HomeAbout;

const Content = [
  {
    id: 0,
    headig: "welcome",
    description: "",
    line: true,
  },
  {
    id: 1,
    headig: "history",
    description: "",
    line: true,
  },
  {
    id: 0,
    headig: "mision",
    description: "",
    line: false,
  },
];
