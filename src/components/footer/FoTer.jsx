import { Link } from "react-router-dom";

const footerData = {
  services: [
    { name: "Software Development", link: "/software-development" },
    { name: "App Development (Android & iOS)", link: "/app-development" },
    { name: "Website Development & Design", link: "/web-development" },
    { name: "Cloud Services", link: "/cloud-services" },
    { name: "SEO & Digital Marketing", link: "/seo-marketing" },
    { name: "Business Profile Creation", link: "/business-profile" },
    { name: "Logo & Graphic Design", link: "/logo-design" },
    { name: "Networking (LAN/WiFi)", link: "/networking" },
    { name: "Content Creation & Animation", link: "/content-animation" },
    { name: "E-Commerce Solutions", link: "/ecommerce" },
  ],
  information: [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact us", link: "/contact" },
    // { name: "FAQs", link: "/faqs" },
    // { name: "Blogs", link: "/blogs" },
    // { name: "Privacy Policy", link: "/privacy-policy" },
  ],
  contact: {
    address: "Larkana  , Sindh ,  Pakistan",
    phone: "+92 331 1285705",
    email: "contact@example.com",
  },
  socialLinks: [
    { icon: "fab fa-facebook-f", link: "#" },
    { icon: "fab fa-twitter", link: "#" },
    { icon: "fab fa-instagram", link: "#" },
    { icon: "fab fa-linkedin-in", link: "#" },
  ],
};

export default function FoTer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">
            Danish Technology House
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {footerData.services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.link}
                  className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:mt-2 after:h-[1px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full after:right-0 after:mx-auto after:block"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {footerData.information.map((info, index) => (
              <li key={index}>
                <Link
                  to={info.link}
                  className=" relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full after:block"
                >
                  {info.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm">{footerData.contact.address}</p>
          <p className="text-sm mt-2">{footerData.contact.phone}</p>
          <p className="text-sm">{footerData.contact.email}</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            {footerData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-white hover:text-orange-400"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="mt-10 text-center">
        <p className="text-sm">
          Don't miss to subscribe to our new feeds, kindly fill the form below.
        </p>
        <form className="mt-4 flex justify-center">
          <input
            required
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded-l-md border-none text-black outline-none"
          />
          <button
            type="submit"
            className="bg-orange-500 px-4 py-2 rounded-r-md text-white hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm">
        <p>D T H © 2023</p>
      </div>
    </footer>
  );
}
