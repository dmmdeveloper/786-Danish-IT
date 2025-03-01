import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    icon: "fa-laptop-code",
    heading: "Custom Software Development",
    description: "Expert in Devotech, FoxPro, Oracle, HTML, Java, Python.",
    link: "/services/software-development",
  },
  {
    id: 2,
    icon: "fa-mobile-alt",
    heading: "Android & iOS App Development",
    description: "Kotlin, Java, Flutter, React Native solutions.",
    link: "/services/mobile-development",
  },
  {
    id: 3,
    icon: "fa-globe",
    heading: "Website Design & Development",
    description: "HTML, WordPress, PHP, Laravel.",
    link: "/services/web-development",
  },
  {
    id: 4,
    icon: "fa-chart-line",
    heading: "SEO & Digital Marketing",
    description: "Rank websites, YouTube channels & Facebook pages.",
    link: "/services/seo-marketing",
  },
  {
    id: 5,
    icon: "fa-paint-brush",
    heading: "Business Branding",
    description:
      "Logos, Business Profiles, Flyers, Banners, Packaging Designs.",
    link: "/services/business-branding",
  },
  {
    id: 6,
    icon: "fa-shopping-cart",
    heading: "E-Commerce Solutions",
    description: "Daraz, Amazon, Etsy store setup & full SEO optimization.",
    link: "/services/ecommerce",
  },
  {
    id: 7,
    icon: "fa-cloud",
    heading: "Cloud & Remote Access Services",
    description: "Data sync, hosting, FTP, RDP, domain management.",
    link: "/services/cloud-services",
  },
  {
    id: 8,
    icon: "fa-video",
    heading: "Video & Photo Editing",
    description: "YouTube thumbnails, animations, 3D designs, podcast covers.",
    link: "/services/video-editing",
  },
  {
    id: 9,
    icon: "fa-database",
    heading: "Data Recovery & System Services",
    description: "Windows, Mac, mobile data restoration & unlock.",
    link: "/services/data-recovery",
  },
  {
    id: 10,
    icon: "fa-dollar-sign",
    heading: "Social Media Monetization",
    description: "YouTube, Facebook, Instagram revenue optimization.",
    link: "/services/social-media",
  },
  {
    id: 11,
    icon: "fa-graduation-cap",
    heading: "Online Courses & Training",
    description: "50+ certified learning & earning programs.",
    link: "/services/online-courses",
  },
  {
    id: 12,
    icon: "fa-file-invoice-dollar",
    heading: "Financial & Tax Services",
    description: "Tax challans, PayPal, Payoneer, PTA approvals.",
    link: "/services/financial-services",
  },
];

function Grid({ heading = "Our Services" }) {
  const memoizedCards = useMemo(() => cards, []);
  return (
    <div className="md:w-[80%] w-[95%] mx-auto mt-24">
      {heading && (
        <h1 className="text-3xl font-bold text-center text-[#F28E13] mb-6">
          {heading}
        </h1>
      )}

      <div className="grid md:grid-cols-3 w-full  grid-cols-2 md:gap-6 gap-2">
        {memoizedCards.map((card) => (
          <div
            key={card.id}
            className="group w-full h-[200px] md:h-auto bg-white md:p-6  p-2 rounded-2xl md:shadow-lg shadow-sm border border-gray-200 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="text-[#F28E13] md:text-4xl text-3xl mb-4">
              <i className={`fa-solid ${card.icon}`}></i>
            </div>

            {/* Heading */}
            <h2 className="md:text-xl text-sm font-bold text-gray-800">
              {card.heading}
            </h2>

            {/* Description */}
            <p className="text-gray-600 md:text-sm text-[10px] mt-2">
              {card.description}
            </p>

            {/* Link */}
            <div className="flex justify-center mt-4  items-center gap-3">
              <Link
                to={card.link}
                className=" bg-[#F28E13] text-white font-semibold md:py-2  py-1 md:px-4 px-2 rounded-full md:text-sm text-[10px] transition-all duration-300 hover:bg-orange-600"
              >
                Learn More
              </Link>

              <i class="fa-brands fa-whatsapp block text-appOrange text-2xl md:text-4xl cursor-pointer hover:scale-90 duration-200"></i>
            </div>
          </div>
        ))}
        {/* Explore more */}
      </div>
      <div className="text-start py-3 w-full mt-[70px]">
        <a
          href={"/about#about-section"}
          className="border-[3px] group md:py-2 wau py-[5px] md:px-6 px-3 learn-more border-appOrange rounded-full md:text-2xl text-[12px] uppercase"
        >
          Discover more{" "}
          <i class="fa-solid group-hover:ml-3 duration-150 fa-arrow-right  text-appOrange"></i>{" "}
        </a>
      </div>
    </div>
  );
}

export default Grid;
