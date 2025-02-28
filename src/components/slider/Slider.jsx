import React from "react";
const services = [
  {
    name: "Software Development",
    icon: "fa-laptop-code",
    color: "bg-blue-500",
  },
  { name: "App Development", icon: "fa-mobile-screen", color: "bg-green-500" },
  { name: "Advertising Services", icon: "fa-bullhorn", color: "bg-red-500" },
  { name: "Profile Creation", icon: "fa-briefcase", color: "bg-purple-600" },
  { name: "Logo Design", icon: "fa-pen-nib", color: "bg-yellow-500" },
  { name: "Software Updates", icon: "fa-mobile-alt", color: "bg-green-400" },
  { name: "Website Development", icon: "fa-globe", color: "bg-indigo-500" },
  { name: "Cloud Services", icon: "fa-cloud", color: "bg-blue-400" },
  { name: "Remote Access", icon: "fa-network-wired", color: "bg-pink-500" },
  { name: "Video Editing", icon: "fa-video", color: "bg-red-400" },
  {
    name: "YouTube Monetization",
    icon: "fa-brands fa-youtube",
    color: "bg-red-600",
  },
  {
    name: "Facebook Monetization",
    icon: "fa-brands fa-facebook",
    color: "bg-blue-800",
  },
  {
    name: "E-commerce Development",
    icon: "fa-shopping-cart",
    color: "bg-teal-500",
  },
  { name: "Seller Accounts", icon: "fa-store", color: "bg-yellow-500" },
  { name: "AdSense Setup", icon: "fa-brands fa-google", color: "bg-green-600" },
  { name: "Data Sync", icon: "fa-sync", color: "bg-blue-400" },
  { name: "Business Cards", icon: "fa-id-card", color: "bg-gray-600" },
  { name: "Banner Ads", icon: "fa-rectangle-ad", color: "bg-orange-500" },
  { name: "Networking Solutions", icon: "fa-wifi", color: "bg-gray-800" },
  { name: "Podcast Production", icon: "fa-microphone", color: "bg-purple-400" },
  { name: "Thumbnail Design", icon: "fa-image", color: "bg-orange-400" },
  { name: "Trade Analysis", icon: "fa-chart-bar", color: "bg-green-500" },
  { name: "Photo Editing", icon: "fa-camera-retro", color: "bg-red-500" },
  { name: "Document Composing", icon: "fa-file-alt", color: "bg-blue-700" },
  { name: "Study Notes", icon: "fa-book", color: "bg-indigo-600" },
  { name: "SEO Services", icon: "fa-search", color: "bg-yellow-600" },
  { name: "Content Creation", icon: "fa-edit", color: "bg-green-600" },
  { name: "Animation Services", icon: "fa-film", color: "bg-pink-600" },
  { name: "Transcription Services", icon: "fa-keyboard", color: "bg-blue-300" },
  { name: "Web Traffic", icon: "fa-chart-line", color: "bg-green-700" },
  { name: "Social Marketing", icon: "fa-users", color: "bg-blue-500" },
  { name: "Flyer Design", icon: "fa-file-alt", color: "bg-blue-700" },
  { name: "Blog Writing", icon: "fa-newspaper", color: "bg-gray-700" },
  { name: "Virtual Assistance", icon: "fa-headset", color: "bg-gray-500" },
  { name: "Packaging Design", icon: "fa-box", color: "bg-red-700" },
  { name: "Presentation Design", icon: "fa-chalkboard", color: "bg-blue-800" },
  { name: "E-commerce Marketing", icon: "fa-store", color: "bg-yellow-500" },
  { name: "Windows Installation", icon: "fa-brands fa-windows", color: "bg-blue-700" },
  { name: "Auto Replies", icon: "fa-envelope", color: "bg-purple-400" },
  { name: "Email Setup", icon: "fa-at", color: "bg-blue-600" },
  { name: "Data Recovery", icon: "fa-database", color: "bg-gray-700" },
  { name: "Visa Applications", icon: "fa-passport", color: "bg-blue-500" },
  { name: "Payment Services", icon: "fa-credit-card", color: "bg-yellow-600" },
  { name: "Hosting Services", icon: "fa-server", color: "bg-gray-900" },
  { name: "Trade Reports", icon: "fa-chart-bar", color: "bg-green-500" },
  { name: "Online Courses", icon: "fa-graduation-cap", color: "bg-purple-600" },
  { name: "Tax Services", icon: "fa-money-bill", color: "bg-green-800" },
  { name: "FoxPro Services", icon: "fa-laptop-code", color: "bg-blue-500" },
  { name: "Oracle Management", icon: "fa-database", color: "bg-orange-600" },
  { name: "Java Development", icon: "fa-coffee", color: "bg-yellow-700" },
  {
    name: "Flutter Development",
    icon: "fa-mobile-screen",
    color: "bg-teal-400",
  },
  { name: "LAN Networking", icon: "fa-network-wired", color: "bg-gray-800" },
  { name: "Image Editing", icon: "fa-camera-retro", color: "bg-red-500" },
  { name: "Cloud Sync", icon: "fa-sync", color: "bg-blue-400" },
  { name: "Mac Support", icon: "fa-brands fa-apple", color: "bg-black" },
  { name: "Amazon Setup", icon: "fa-shopping-basket", color: "bg-purple-500" },
  { name: "Architecture Design", icon: "fa-building", color: "bg-gray-600" },
  { name: "PayPal Setup", icon: "fa-dollar-sign", color: "bg-green-500" },
  { name: "Digital Courses", icon: "fa-book-open", color: "bg-indigo-700" },
  {
    name: "PTA Registration",
    icon: "fa-mobile-screen-button",
    color: "bg-blue-500",
  },
  {
    name: "Tax Challan",
    icon: "fa-file-invoice-dollar",
    color: "bg-yellow-700",
  },
];

const Slider = () => {
  return (
    <div className="flex justify-center items-center py-24 overflow-hidden">
      <div className="relative w-full overflow-hidden py-5">
        <div className="flex gap-4 animate-scroll hover:[animation-play-state:paused] w-max">
          {/* Duplicate Services for Infinite Loop Effect */}
          {[...services, ...services].map((service, index) => (
            <div
              key={index}
              className={`md:w-28 h-20 w-20 md:h-28 rounded-lg flex flex-col items-center justify-center text-white flex-shrink-0 ${service.color}`}
            >
              <i className={`fa-solid ${service.icon} md:text-3xl text-2xl mb-2`}></i>
              <p className="md:text-sm text-[10px] text-center text-wrap font-semibold">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Slider;
