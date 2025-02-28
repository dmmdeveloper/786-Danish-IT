import React, { useState, useEffect } from "react";

const posters = [
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754773/Danish%20IT/pyzurauiaiwzajv851bo.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754778/Danish%20IT/r63hxml6py8ztnvorky3.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754745/Danish%20IT/gp8swx7sq6xeuiszo7js.gif",
  //   "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754740/Danish%20IT/oux39aycjqwue796oqmf.gif"
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740755600/Danish%20IT/hy2u2zbrxuvhd1cwynpl.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740755601/Danish%20IT/x7h07bszobvqfontkrye.gif",
];

function FrormSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      className="relative  py-9 md:py-0 bg-black contact-form-section min-h-screen h-auto bg-cover bg-center bg-no-repeat md:flex-row flex-col  flex justify-start items-center transition-all duration-500"
      style={{
        backgroundImage: `url(${posters[index]})`,
      }}
    >
      {/* Text / Headings  */}
      <div className="md:h-full h-1/2 md:w-1/2 w-[90%] flex-col flex justify-around items-center">
      
        <div className="md:w-[60%] w-full  backdrop-blur-lg rounded-lg p-4 shadow-sm shadow-white text-white">

          <h1 className="md:text-4xl text-3xl font-bold">We are here to help</h1>
          <p className="md:text-lg text-sm">
            Let's get this conversation started. Tell us a bit about yourself,
            and we'll get in touch as soon as we can.
          </p>
        </div>
{/* Desktop -- career Apply */}
        <div className="w-[70%] backdrop-blur-lg  shadow-sm shadow-white mt-10  hidden md:block rounded-lg p-4 text-white">

          <h1 className="text-4xl  font-bold">
            Looking to learn about careers at DTH?
          </h1>
          <p className="text-lg">
            We do not accept applications via this form. To apply for roles,
            please review our portal here.
          </p>
          <button
            disabled
            className="bg-appOrange py-2 text-sm px-4 rounded-lg mt-5"
          >
            Apply
          </button>
        </div>

      </div>
      {/* Form */}
      <div className="md:h-full h-1/2  md:w-1/2 w-[90%] flex-col py-10 flex justify-around items-center">

      <form action="" className="h-[550px] md:w-[80%] w-full rounded-lg backdrop-blur-lg border text-white text-6xl p-3">
        Form Here
      </form>
      

      <div className="w-full backdrop-blur-lg  mt-16 md:hidden block rounded-lg p-4 text-white">

          <h1 className="md:text-4xl text-3xl font-bold">
            Looking to learn about careers at DTH?
          </h1>
          <p className="md:text-lg text-sm">
            We do not accept applications via this form. To apply for roles,
            please review our portal here.
          </p>
          <button
            disabled
            className="bg-appOrange py-2 text-sm px-4 rounded-lg mt-5"
          >
            Apply
          </button>
        </div>

      </div>
    </section>
  );
}

export default FrormSection;
