import React from "react";
import { Link } from "react-router-dom";
function Grid({ heading = "Our Services" }) {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto mt-24">
      {heading && <h1 className="text-3xl text-appOrange">{heading}</h1>}

      <div className="grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(auto-fill,minmax(45%,1fr))] md:gap-4 gap-3 mt-50">
        {cards.map((card) => (
          <div
            key={card.id}
            className="group mx-auto  card-loading md:h-[250px] h-[150px] w-full rounded-lg shadow-md cursor-pointer relative overflow-hidden"
          >
            {/* Background Image */}
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
              src={card.image}
              alt={`Photo Of ${card.heading}`}
              loading="lazy"
            />

            {/* Card Content */}
            <div className="absolute bottom-0 left-0 w-full h-full md:h-[80%] hover:bg-gradient-to-t from-black via-black/50 to-transparent transition-transform duration-500 p-2 md:p-4 flex flex-col justify-end ">
            <mark  className="bg-[#00000078] group-hover:bg-transparent"  >
              <h2 className="text-white md:text-lg text-sm font-bold uppercase">
                {card.heading}
              </h2>
            </mark>
              <p className="text-white md:text-sm text-[10px] opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="md:mt-2 bg-orange-500 text-black font-semibold md:py-1 py-[2px] md:px-4 px-2 rounded-full md:text-sm text-[10px] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;

const cards = [
  {
    id: 1,
    heading: "Custom Software Development",
    description:
      "Expert in Devotech, FoxPro, Oracle, HTML, Java, Python, Flutter.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671056/Danish%20IT/ct9cryaki8tjynw73q67.jpg",
    linkText: "Learn More",
    link: "/services/software-development",
  },
  {
    id: 2,
    heading: "Android & iOS App Development",
    description: "Kotlin, Java, Flutter, React Native solutions.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671061/Danish%20IT/qwydwlqyqppoqeoxgeql.jpg",
    linkText: "Learn More",
    link: "/services/mobile-development",
  },
  {
    id: 3,
    heading: "Website Design & Development",
    description: "HTML, WordPress, PHP, Laravel.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671054/Danish%20IT/xd8rssa83sycyhhebhhj.jpg",
    linkText: "Learn More",
    link: "/services/web-development",
  },
  {
    id: 4,
    heading: "SEO & Digital Marketing",
    description: "Rank websites, YouTube channels & Facebook pages.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671065/Danish%20IT/k68nxd4fdtnthgcpcghd.jpg",
    linkText: "Learn More",
    link: "/services/seo-marketing",
  },
  {
    id: 5,
    heading: "Business Branding",
    description:
      "Logos, Business Profiles, Flyers, Banners, Packaging Designs.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671057/Danish%20IT/uamscqzzz8tg0hhhswue.jpg",
    linkText: "Learn More",
    link: "/services/business-branding",
  },
  {
    id: 6,
    heading: "E-Commerce Solutions",
    description: "Daraz, Amazon, Etsy store setup & full SEO optimization.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671065/Danish%20IT/lyboeclzldpcvor5adrp.jpg",
    linkText: "Learn More",
    link: "/services/ecommerce",
  },
  {
    id: 7,
    heading: "Cloud & Remote Access Services",
    description: "Data sync, hosting, FTP, RDP, domain management.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671537/Danish%20IT/yhzzbxcohogy4scqn1vp.avif",
    linkText: "Learn More",
    link: "/services/cloud-services",
  },
  {
    id: 8,
    heading: "Video & Photo Editing",
    description: "YouTube thumbnails, animations, 3D designs, podcast covers.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671062/Danish%20IT/zlqjl9ojatzy1cgeipix.jpg",
    linkText: "Learn More",
    link: "/services/video-editing",
  },
  {
    id: 9,
    heading: "Data Recovery & System Services",
    description: "Windows, Mac, mobile data restoration & unlock.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671050/Danish%20IT/w4fscpfzbrswyujiud74.jpg",
    linkText: "Learn More",
    link: "/services/data-recovery",
  },
  {
    id: 10,
    heading: "Social Media Monetization",
    description: "YouTube, Facebook, Instagram revenue optimization.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671057/Danish%20IT/jda8kvqv4ebwmlxzhoyb.jpg",
    linkText: "Learn More",
    link: "/services/social-media",
  },
  {
    id: 11,
    heading: "Online Courses & Training",
    description: "50+ certified learning & earning programs.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671060/Danish%20IT/nvcpjdaq8imu1q6lpz0y.jpg",
    linkText: "Learn More",
    link: "/services/online-courses",
  },
  {
    id: 12,
    heading: "Financial & Tax Services",
    description: "Tax challans, PayPal, Payoneer, PTA approvals.",
    image:
      "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740671537/Danish%20IT/gjhbrp0paonmxzxjnsbl.jpg",
    linkText: "Learn More",
    link: "/services/financial-services",
  },
];
