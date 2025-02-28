import React from "react";
import { Nav } from "../../components";
import FrormSection from "./FrormSection";

function Contact() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Nav changeNav={1} />
        {/* Hero Section */}
        <section

          className="relative  h-screen bg-cover bg-center bg-no-repeat flex justify-start items-center"

          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740752767/Danish%20IT/wxe67ak600lnokvpcjn6.jpg)",
          }} // Replace with actual image
        >
          <div className="text-white md:ml-[200px] ml-6 w-full md:w-[480px]">
            <h1 className="text-white font-bold text-4xl md:text-6xl">Connect with us</h1>
            <p className="md:text-2xl text-xl" >
              Complete the form to schedule a demo or ask questions about the
              ways we can support your business goals.
            </p>
          </div>
        </section>

        {/* Nice to meet you sction */}
        <div className="flex justify-center items-center  text-[25px] md:text-3xl">
            <h2> <i class="fa-solid mr-2 fa-heart text-appOrange animate-heartbeat"></i>
            Nice to meet you</h2>
            <img className="h-16" src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740753587/Danish%20IT/ykqp7zzewskqtufeo766.gif" alt="" />
        </div>

        {/* Form Section */}

        <FrormSection/>
    
      </div>
    </>
  );
}

export default Contact;
