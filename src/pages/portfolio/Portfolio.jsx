import React, { useState , useRef } from "react";
import { Nav } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Swiper Navigation module
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // Import navigation styles
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Design",
  "Websites",
  "Software Development",
  "Mobile Apps",
  "Advertising",
  "E-commerce",
  "SEO & Marketing",
  "Cloud Services",
  "Business Consulting",
  "Networking",
  "Cybersecurity",
  "Game Development",
  "AI & Machine Learning",
  "Blockchain",
  "E-Learning",
  "Data Science",
  "Healthcare Tech",
  "Video Editing",
  "Photography",
  "Music Production",
  "Podcasting",
  "Marketing Strategy",
  "Social Media Management",
  "UI/UX Design",
  "Print Media",
  "Publishing",
  "Event Management",
  "Legal Tech",
  "Finance & Trading",
];

const services = Array.from({ length: 90 }, (_, index) => ({
  id: index + 1,
  title: `Service ${index + 1}`,
  category: categories[(index % (categories.length - 1)) + 1],
  company: "DTH",
}));

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const swiperRef = useRef(null);
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);
  return (
    <>
      <div className="w-full min-h-screen">
        <Nav changeNav={0.8} />

        <section
          className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/still-life-business-roles-with-various-mechanism-pieces_23-2149352652.jpg)",
          }}
        >

          <div className="h-full w-full absolute top-0 flex justify-center items-center bg-black/60">
            <h1 className="text-white text-4xl sm:text-5xl">Our Portfolio</h1>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-8 px-4 sm:px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>

          {/* Category Slider with Navigation */}
          <div className="relative w-full mb-8">
      {/* Left Navigation Button */}
      <button
        className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        ◀
      </button>

      <Swiper
        ref={swiperRef}
        slidesPerView={2} // Default for very small screens
        spaceBetween={10}
        freeMode={true}
        grabCursor={true} // Enable grab cursor
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store instance
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="mx-10"
      >
        {categories.map((category) => (
          <SwiperSlide key={category} className="text-center">
            <button
              className={`px-4 py-2 w-full rounded-md text-lg transition-all duration-200 ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 text-black hover:bg-orange-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <button
        className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300"
        onClick={() => swiperRef.current?.slideNext()}
      >
        ▶
      </button>
    </div>


          {/* Service Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"

            //   layout
            >
              {filteredServices.slice(0, 6).map((service) => (
                <motion.div
                  key={service.id}
                  className="p-4 border rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all"
                  onClick={() => setSelectedService(service)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.company}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Service Modal */}
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </div>
    </>
  );
}

function ServiceModal({ service, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
        <p className="text-gray-600">Company: {service.company}</p>
        <p className="text-gray-700 mt-4">Technologies Used: React, Node.js</p>
        <p className="text-green-600 mt-2">Price: $500 - $2000</p>
        <p className="text-gray-600 mt-2 italic">
          Client Feedback: "Amazing work! Highly recommended."
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
