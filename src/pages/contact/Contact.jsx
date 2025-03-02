import React , {useEffect} from "react";
import { FoTer, Nav } from "../../components";
import FrormSection from "./FrormSection";
import { useLocation } from "react-router-dom";

function Contact() {
  const {hash} =useLocation()

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
      <div className="min-h-screen w-full">
        <span id="contact-hero" ></span>
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
            <h1 className="text-white font-bold text-4xl md:text-6xl">
              Connect with us
            </h1>
            <p className="md:text-2xl text-xl">
              Complete the form to schedule a demo or ask questions about the
              ways we can support your business goals.
            </p>
          </div>
        </section>

        {/* Nice to meet you sction */}
        <div className="flex justify-center items-center  text-[25px] md:text-3xl">
          <h2>
            {" "}
            <i class="fa-solid mr-2 fa-heart text-appOrange animate-heartbeat"></i>
            Nice to meet you
          </h2>
          <img
            className="h-16"
            src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740753587/Danish%20IT/ykqp7zzewskqtufeo766.gif"
            alt=""
          />
        </div>

        {/* Form Section */}
        <FrormSection />
        <DirectContact />
        {/*  */}
        <FoTer />
      </div>
    </>
  );
}

export default Contact;

const DirectContact = () => {
  const contacts = [
    {
      icon: <i className="fa fa-phone text-appOrange text-5xl"></i>,
      title: "Phone",
      details: [
        {
          label: "Office Contact",
          value: "+92 331 1285705",
          link: "tel:+923001234567",
        },
        {
          label: "Manager Contact",
          value: "+92 331 1285705",
          link: "tel:+923157654321",
        },
      ],
    },
    {
      icon: <i className="fa-brands fa-whatsapp text-appOrange text-5xl"></i>,
      title: "WhatsApp",
      details: [
        {
          label: "Office WhatsAppp",
          value: "+92 331 1285705",
          link: "https://wa.me/923311285705",
        },
        {
          label: "Manager WhatsApp",
          value: "+92 331 1285705",
          link: "https://wa.me/923311285705",
        },
      ],
    },



    {
      icon: <i className="fa fa-envelope text-appOrange text-5xl"></i>,
      title: "Email",
      details: [
        {
          label: "Office Email",
          value: "office@example.com",
          link: "mailto:office@example.com",
        },
        {
          label: "Manager Email",
          value: "manager@example.com",
          link: "mailto:manager@example.com",
        },
      ],
    },
    {
      icon: (
        <i className="fa-solid fa-location-dot text-appOrange animate-heartbeat  text-5xl"></i>
      ),
      title: "Address",
      details: [
        {
          label: "Office Address",
          value: "123, Business Street, Larkana, Pakistan",
          link: "#",
        },
      ],
    },
  ];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-appOrange">
        Direct Contact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="p-5 flex flex-col items-center bg-white  transition-all"
          >
            <div className="mb-3">{contact.icon}</div>
            <h3 className="text-xl font-semibold">{contact.title}</h3>
            <div className="mt-2 text-center">
              {contact.details.map((detail, i) => (
                <p key={i} className="mt-2 flex flex-col">
                  <strong>{detail.label}: </strong>
                  <a
                    href={detail.link}
                    target="_blank"
                    className="text-appOrange hover:underline"
                  >
                    {detail.value}
                  </a>
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
