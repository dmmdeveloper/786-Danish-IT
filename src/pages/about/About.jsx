import React, { useEffect, useState } from "react";
import { FoTer, Nav } from "../../components";
import { useLocation } from "react-router-dom";
function About() {
  const { hash } = useLocation();

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
      <section className="h-auto w-full">
        <span id="about-section"></span>

        <Nav changeNav={1} />
        {/* Hero */}
        <section
          className="relative  h-screen bg-cover bg-center bg-no-repeat flex justify-start items-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }} // Replace with actual image
        >
          <div className="h-full w-full absolute top-0 flex flex-col justify-center items-center bg-black/60">
            <h1 className="text-white md:w-[80%]  w-full  font-bold text-3xl md:text-5xl text-center">
              Empowering Businesses with Cutting-Edge Innovation to Redefine the
              Future of Digital Transformation{" "}
            </h1>
            <p className="md:text-[17px] w-[90%] md:w-[80%] text-white text-[15px] mt-2 text-center md:text-justify">
              For over 10 years, Danish Technology House has pioneered
              groundbreaking innovations, building a vast global portfolio of
              customers and cutting-edge products. Now, it stands at the
              forefront of the next era of intelligent digital transformation.
            </p>{" "}
          </div>
        </section>

        <section className=" py-16 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-appOrange drop-shadow-md">
              Digitalizing Businesses for Over 2 Decades
            </h2>
            <p className="text-lg text-center mt-4 max-w-3xl mx-auto ">
              Since 2011, <strong>Danish Technology House</strong> has been
              empowering organizations worldwide to embrace digital
              transformation through next-generation, high-tech innovative
              platforms and services.
            </p>

            {/* Fancy Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Left Fancy Card */}
              <div
                className="relative bg-white p-5 md:p-8 rounded-2xl shadow-lg border-2 border-orange-500 
                        transition transform "
              >
                <div className="absolute -top-6 -left-6 md:w-14 md:h-14 h-12 w-12 bg-orange-500 flex items-center justify-center rounded-full shadow-lg">
                  <i className="fas fa-lightbulb text-white text-[20px] md:text-2xl"></i>
                </div>
                <h3 className="text-xl w-full font-semibold text-orange-700 pl-10">
                  Innovating the Future
                </h3>
                <p className="text-gray-600 mt-3">
                  Danish Technology House serves as a hub of innovation, where
                  advanced solutions in
                  <strong>
                    {" "}
                    Customer Experience, AI, Blockchain, Cloud Computing,
                    FinTech, Smart City Applications, Business Automation, and
                    Cognitive Platforms{" "}
                  </strong>
                  are developed, deployed, and seamlessly integrated every day.
                </p>
              </div>

              {/* Right Fancy Card */}
              <div
                className="relative bg-white p-5 md:p-8 rounded-2xl shadow-lg border-2 border-orange-500 
                        transition transform"
              >
                <div className="absolute -top-6 -left-6 md:w-14 md:h-14 h-12 w-12 bg-orange-500 flex items-center justify-center rounded-full shadow-lg">
                  <i className="fas fa-industry text-white text-[20px] md:text-2xl"></i>
                </div>
                <h3 className="text-xl w-full font-semibold text-orange-700 pl-10">
                  Empowering Industries
                </h3>
                <p className="text-gray-600 mt-3">
                  We have transformed businesses across diverse industries,
                  including
                  <strong>
                    {" "}
                    Banking, Finance, Telecommunications, Insurance,
                    Pharmaceuticals, and Government Sectors{" "}
                  </strong>
                  —driving the future of digitalization with agility and
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <DTHGlanceSection />
        <CEOSMessage />

        <FoTer />
      </section>
    </>
  );
}
export default About;

const DTHGlanceSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1496065187959-7f07b8353c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h2 className="text-4xl font-bold text-white drop-shadow-lg">
          DTH at a Glance
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 px-6 py-2 text-lg font-semibold text-white bg-appOrange rounded-lg shadow-lg hover:opacity-70 transition"
        >
          Discover DTH
        </button>
      </div>

      {/* Video Popup Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-black rounded-lg shadow-lg max-w-3xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-gray-300"
            >
              ✖
            </button>

            {/* Video */}
            <video className="w-full rounded-lg" autoPlay controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

const CEOSMessage = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-6 md:gap-12  ">
        {/* CEO Image */}

        <div
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            backgroundPosition: "center",
            backgroundSize: "cover", // Ensure full coverage
            backgroundRepeat: "no-repeat",
          }}
          className="relative md:h-[550px] md:w-[400px] h-[400px] w-full max-w-lg mx-auto border-4 md:border-8 border-appOrange shadow-lg rounded-2xl overflow-hidden"
        >
          {/* Optional overlay effect */}
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>

          {/* Fancy Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
            <h3 className="text-white text-lg md:text-xl font-bold">
              Noor Ahmed Panhwar
            </h3>
            <p className="text-orange-400 text-sm md:text-base font-semibold">
              CEO
            </p>
          </div>
        </div>

        {/* CEO Message */}
        <div className="mt-12">
          <h2 className="text-4xl font-bold text-appOrange">CEO's MESSAGE</h2>
          <p className="text-lg text-gray-700 mt-4 text-justify leading-relaxed">
            For more than 2 decade, <strong>Danish Technology House</strong> has
            been at the forefront of innovation, pioneering advanced strategies
            and cutting-edge solutions to shape the digital landscape. As the
            world rapidly embraces modernization, businesses must evolve to stay
            ahead. <strong>DTH</strong> empowers organizations by transforming
            their systems, operations, and processes with next-generation
            technologies, intelligent solutions, and digital platforms.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed text-justify">
            Our unwavering commitment to{" "}
            <strong>people-centric innovation</strong> drives us to collaborate
            across industries, fostering synergies that lead to groundbreaking
            solutions and seamless digital experiences.
          </p>
          <p className="text-lg text-gray-700 mt-4 leading-relaxed text-justify">
            At <strong>Danish Technology House</strong>, our mission is to lead
            businesses into the digital future by delivering state-of-the-art
            solutions through agile methodologies and innovative integration
            techniques.
          </p>
          <h4 className="text-xl font-semibold text-orange-700 mt-6">
            Revolution is achieved through vision, virtue, and harmony.
          </h4>
        </div>
      </div>
    </section>
  );
};
