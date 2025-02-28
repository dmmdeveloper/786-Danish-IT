import { motion } from "framer-motion";
import Footer from "../footer/Footer";

const HomeMessage = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-16 px-4 md:px-12"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740752758/Danish%20IT/gumkqmskdnkic8xm6fku.avif)",
      }} // Replace with actual image
    >
      {/* Overlay for better readability */}
      {/* Content Container */}
      <div className="relative  max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-lg md:p-8 p-3 rounded-lg border border-[#ffffff88]">
        {/*  Info Section */}
        <motion.div className="flex flex-col gap-4 text-white">
          <h2 className="text-3xl font-bold text-white">Contact Info</h2>

          {contact.map((c) => (
            <a
              key={c.to}
              href={c.to}
              target="_blank"
              className="hover:text-appOrange w-1/2 text-nowrap duration-300 hover:opacity-70 cursor-pointer  flex items-center gap-2"
            >
              {" "}
              <i className={`${c.icon} text-appOrange`}> </i> {c.text}
            </a>
          ))}

          <p className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[#F28E13]"></i> 123 Street,
            City, Country
          </p>

          {/* Map Embed */}
          <div className="mt-4">
            <iframe
              className="w-full h-40 rounded-lg"
              src="https://www.google.com/maps/embed?pb=..."
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
        {/*  Email Form */}
        <motion.form className="space-y-4">
          <h2 className="text-3xl font-bold text-appOrange">Send a Message</h2>

          {/* Name & Email in One Line */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="p-3 placeholder:text-appOrange placeholder:italic  rounded-lg w-full bg-transparent backdrop-blur-2xl border-[2px] focus:placeholder:not-italic text-white caret-appOrange border-[#ffffff82] outline-none focus:border-[white]"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="p-3 placeholder:text-appOrange placeholder:italic  rounded-lg w-full bg-transparent backdrop-blur-2xl border-[2px] focus:placeholder:not-italic text-white caret-appOrange border-[#ffffff82] outline-none focus:border-[white]"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            className="p-3 placeholder:text-appOrange placeholder:italic  rounded-lg w-full bg-transparent backdrop-blur-2xl border-[2px] focus:placeholder:not-italic text-white caret-appOrange border-[#ffffff82] outline-none focus:border-[white]"
          />

          {/* Message Textarea */}
          <textarea
            required
            placeholder="Your Message"
            className="p-3 placeholder:text-appOrange h-[130px] resize-none placeholder:italic  rounded-lg w-full bg-transparent backdrop-blur-2xl border-[2px] focus:placeholder:not-italic text-white caret-appOrange border-[#ffffff82] outline-none focus:border-[white]"
          ></textarea>

          {/* Submit Button */}
          <button className="w-full bg-[#F28E13] text-white font-semibold py-3 rounded-lg hover:bg-[#d3740c] transition">
            Send Message
          </button>
        </motion.form>
      </div>
      <Footer/>
  
    </section>
  );
};

export default HomeMessage;

{
  /* <p><i className="fas fa-envelope text-[#F28E13]"> </i> contact@example.com</p> */
}
{
  /* <p><i className="fas fa-globe text-[#F28E13]"></i>  www.example.com</p> */
}
const contact = [
  {
    id: 0,
    icon: "fas fa-phone-alt",
    text: "+92 319 3291955",
    to: "tel:+923193291955",
  },
  {
    id: 1,
    icon: "fas fa-envelope",
    text: "contact@example.com",
    to: "mailto:contact@example.com",
  },
  {
    id: 1,
    icon: "fas fa-globe",
    text: "danishtechnologyhouse.vercel.app",
    to: "https://danishtechnologyhouse.vercel.app/",
  },
];
