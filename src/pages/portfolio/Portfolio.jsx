import React, { useState, useRef, useEffect } from "react";
import { FoTer, Nav } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation"; // Import navigation styles
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const categories = [
  "All",
  "Software Development",
  "Mobile App Development",
  "Advertising & Branding",
  "Web Development",
  "Cloud & Networking",
  "Digital Marketing",
  "Design & Editing",
  "Data & Security",
  "E-commerce & Monetization",
  "Business & Finance",
];

const services = [
  // Software Development
  {
    id: 1,
    category: "Software Development",
    service: "Custom Software Solutions",
    feedback: "Efficient and scalable solutions.",
    more: "Devotech, FoxPro, Oracle, HTML, Java, Python, Flutter",
    image: "https://picsum.photos/200/300?random=1",
  },
  {
    id: 2,
    category: "Software Development",
    service: "H.O Remote Access Software",
    feedback: "Secure remote access setup.",
    more: "Optimized for enterprise needs.",
    image: "https://picsum.photos/200/300?random=2",
  },
  {
    id: 3,
    category: "Software Development",
    service: "Automation & AI Integration",
    feedback: "Transforming businesses with AI.",
    more: "Automate tasks with intelligent systems.",
    image: "https://picsum.photos/200/300?random=3",
  },

  // Mobile App Development
  {
    id: 4,
    category: "Mobile App Development",
    service: "Android & iOS App Development",
    feedback: "Seamless cross-platform apps.",
    more: "Kotlin, Java, Flutter, React",
    image: "https://picsum.photos/200/300?random=4",
  },
  {
    id: 5,
    category: "Mobile App Development",
    service: "Software Updates",
    feedback: "Keep your apps up-to-date.",
    more: "Android & iPhone software updates.",
    image: "https://picsum.photos/200/300?random=5",
  },
  {
    id: 6,
    category: "Mobile App Development",
    service: "Mobile Data Recovery",
    feedback: "Recover lost data quickly.",
    more: "Restore, unlock passwords, and secure data.",
    image: "https://picsum.photos/200/300?random=6",
  },

  // Advertising & Branding
  {
    id: 7,
    category: "Advertising & Branding",
    service: "Business Profile Creation",
    feedback: "Professional branding assistance.",
    more: "Optimized for digital and print media.",
    image: "https://picsum.photos/200/300?random=7",
  },
  {
    id: 8,
    category: "Advertising & Branding",
    service: "Logo & Banner Design",
    feedback: "Creative and impactful designs.",
    more: "For businesses and social media.",
    image: "https://picsum.photos/200/300?random=8",
  },
  {
    id: 9,
    category: "Advertising & Branding",
    service: "Podcast & Thumbnail Designs",
    feedback: "Enhancing digital presence.",
    more: "Custom covers, thumbnails, and more.",
    image: "https://picsum.photos/200/300?random=9",
  },

  // Web Development
  {
    id: 10,
    category: "Web Development",
    service: "Website Development & Design",
    feedback: "Responsive and modern websites.",
    more: "HTML, WordPress, PHP, Laravel",
    image: "https://picsum.photos/200/300?random=10",
  },
  {
    id: 11,
    category: "Web Development",
    service: "E-commerce Page Development",
    feedback: "Boost online sales.",
    more: "Daraz, Amazon, Etsy, FB Shops.",
    image: "https://picsum.photos/200/300?random=11",
  },
  {
    id: 12,
    category: "Web Development",
    service: "SEO Optimization",
    feedback: "Improve search rankings.",
    more: "For websites, blogs, and posts.",
    image: "https://picsum.photos/200/300?random=12",
  },

  // Cloud & Networking
  {
    id: 13,
    category: "Cloud & Networking",
    service: "Cloud Services & Data Sync",
    feedback: "Reliable cloud storage solutions.",
    more: "Sync data of any business securely.",
    image: "https://picsum.photos/200/300?random=13",
  },
  {
    id: 14,
    category: "Cloud & Networking",
    service: "Networking (LAN/WiFi)",
    feedback: "Stable and secure network setup.",
    more: "For homes and enterprises.",
    image: "https://picsum.photos/200/300?random=14",
  },
  {
    id: 15,
    category: "Cloud & Networking",
    service: "Domain & Hosting",
    feedback: "Fast and secure hosting.",
    more: "RDP, FTP, and premium domains.",
    image: "https://picsum.photos/200/300?random=15",
  },

  // Digital Marketing
  {
    id: 16,
    category: "Digital Marketing",
    service: "YouTube Channel Monetization",
    feedback: "Grow and earn from YouTube.",
    more: "SEO and content strategies.",
    image: "https://picsum.photos/200/300?random=16",
  },
  {
    id: 17,
    category: "Digital Marketing",
    service: "Social Media Marketing",
    feedback: "Increase brand visibility.",
    more: "Facebook, Instagram, and Twitter.",
    image: "https://picsum.photos/200/300?random=17",
  },
  {
    id: 18,
    category: "Digital Marketing",
    service: "AdSense & Online Ads",
    feedback: "Optimize ad revenue.",
    more: "Google AdSense and PPC campaigns.",
    image: "https://picsum.photos/200/300?random=18",
  },

  // Design & Editing
  {
    id: 19,
    category: "Design & Editing",
    service: "Video Editing",
    feedback: "Professional-grade edits.",
    more: "For YouTube, social media, and business.",
    image: "https://picsum.photos/200/300?random=19",
  },
  {
    id: 20,
    category: "Design & Editing",
    service: "3D Animation & Motion Graphics",
    feedback: "Engaging visual content.",
    more: "Best for ads and promotions.",
    image: "https://picsum.photos/200/300?random=20",
  },
  {
    id: 21,
    category: "Design & Editing",
    service: "Flyer & Poster Designs",
    feedback: "Attractive marketing materials.",
    more: "For print and digital use.",
    image: "https://picsum.photos/200/300?random=21",
  },
  {
    id: 41,
    category: "Data & Security",
    service: "Penetration Testing",
    feedback: "Identify security vulnerabilities.",
    more: "Ethical hacking, vulnerability assessment.",
    image: "https://picsum.photos/200/300?random=41",
  },
  {
    id: 42,
    category: "Data & Security",
    service: "End-to-End Encryption",
    feedback: "Secure your communications.",
    more: "SSL, VPN, Zero Trust security.",
    image: "https://picsum.photos/200/300?random=42",
  },
  {
    id: 43,
    category: "Data & Security",
    service: "Identity & Access Management",
    feedback: "Control user access effectively.",
    more: "MFA, Role-based access control.",
    image: "https://picsum.photos/200/300?random=43",
  },
  {
    id: 44,
    category: "E-commerce & Monetization",
    service: "Subscription Model Setup",
    feedback: "Create a steady revenue stream.",
    more: "SaaS, Membership websites.",
    image: "https://picsum.photos/200/300?random=44",
  },
  {
    id: 45,
    category: "E-commerce & Monetization",
    service: "E-commerce SEO",
    feedback: "Optimize store for more traffic.",
    more: "Keyword research, product page optimization.",
    image: "https://picsum.photos/200/300?random=45",
  },
  {
    id: 46,
    category: "E-commerce & Monetization",
    service: "Payment Gateway Integration",
    feedback: "Seamless online transactions.",
    more: "Stripe, PayPal, Razorpay.",
    image: "https://picsum.photos/200/300?random=46",
  },
  {
    id: 47,
    category: "Business & Finance",
    service: "Tax Preparation & Filing",
    feedback: "Compliant tax solutions.",
    more: "Corporate & individual tax filing.",
    image: "https://picsum.photos/200/300?random=47",
  },
  {
    id: 48,
    category: "Business & Finance",
    service: "Investment Advisory",
    feedback: "Maximize your returns.",
    more: "Stock market, real estate, cryptocurrency.",
    image: "https://picsum.photos/200/300?random=48",
  },
  {
    id: 49,
    category: "Business & Finance",
    service: "Payroll Management",
    feedback: "Automate salary distribution.",
    more: "HRM software, tax deductions.",
    image: "https://picsum.photos/200/300?random=49",
  },
];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);
  const swiperRef = useRef(null);
  const {hash} =useLocation()


  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);


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
      <div className="w-full min-h-screen">
        <span id="portfolio" ></span>
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
        <div className="" id="service-section"></div>
        <section className="py-8 md:px-10 px-2">
          <h2 className="text-3xl font-bold text-center mb-6">Our Work</h2>

          {/* Category Slider with Navigation */}
          <div
            className={`w-full  z-50
              sticky top-0
               md:py-2 py-1 bg-white flex items-center mb-8`}
          >
            {/* Left Navigation Button */}
            <button
              className="prev-btn text-3xl md:text-4xl text-appOrange ml-1 md:mr-3 mr-1 hover:scale-110 duration-200 "
              onClick={() => swiperRef.current?.slidePre2v()}
            >
              <i class="fa-solid fa-chevron-left"></i>{" "}
            </button>
            <CategoriesSwiper
              swiperRef={swiperRef}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <button
              className="prev-btn text-3xl md:text-4xl text-appOrange mr-1 md:ml-3 ml-1 hover:scale-110 duration-200 "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <i class="fa-solid fa-chevron-right"></i>{" "}
            </button>
          </div>

          {/* Service Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              className={`grid ${
                activeCategory === "All" ? "grid-cols-2" : "grid-cols-1"
              } sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6`}
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  className={`border h-[250px] rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-all overflow-hidden relative group ${
                    activeCategory === "All"
                      ? "w-full h-[160px]"
                      : "md:w-full w-[90%]  mx-auto"
                  }`}
                  onClick={() => setSelectedService(service)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.5]"
                    style={{
                      backgroundImage: `url(${service.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div
                    className={`h-full w-full bg-[#00000080] text-white p-3 ${
                      activeCategory == "All"
                        ? "text-2xl md:text-3xl"
                        : "text-4xl"
                    } flex items-center justify-center relative`}
                  >
                    <h1>{service.service}</h1>
                  </div>
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
            selectedService={selectedService}
          />
        )}

        <FoTer />
      </div>
    </>
  );
}

function ServiceModal({ service, onClose }) {
  const popUpRef = useRef(null);

  useEffect(() => {

    function handleClickOutside(event) {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]); // ✅ Cleanup function added

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000000]  backdrop-blur-sm">
      <motion.div
        ref={popUpRef} // ✅ Correctly assigned ref
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-[90%] relative"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2">{service.service}</h2>
        <p className="text-gray-600 italic">"{service.feedback}"</p>
        <p className="text-gray-700 mt-4">Details: {service.more}</p>
      </motion.div>
    </div>
  );
}

function CategoriesSwiper({ swiperRef, activeCategory, setActiveCategory }) {
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        grabCursor={true} // Enable grab cursor
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store instance
        breakpoints={{
          640: { slidesPerView: 3  , spaceBetween:5 },
          768: { slidesPerView: 4 , spaceBetween:5 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        className="md:mx-10 mx-2 flex items-center  "
      >
        {categories.map((category) => (
          <SwiperSlide key={category} className="text-center">
            <button
              className={`md:py-2 py-1  w-full rounded-md md:text-lg text-[12px] transition-all duration-200 ${
                activeCategory === category
                  ? "bg-orange-500 text-white"
                  : "text-appOrange border"
              }`}
              onClick={() => {
                setActiveCategory(category);
                document
                  .getElementById("service-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {category}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Portfolio;
