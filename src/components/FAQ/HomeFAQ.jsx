import { useState } from "react";
import { motion } from "framer-motion";

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


const faqs = [
    {
      id: 1,
      icon: "fa-laptop-code", // Software Development
      question: "What services does Danish Technology House provide?",
      answer:
        "We offer software development, mobile app development, website design, SEO, business branding, cloud services, digital marketing, and much more.",
    },
    {
      id: 2,
      icon: "fa-clock", // Time-related
      question: "How long does it take to develop a custom software solution?",
      answer:
        "The timeline depends on project complexity. Small projects take 4-6 weeks, while larger solutions can take several months.",
    },
    {
      id: 3,
      icon: "fa-mobile-alt", // Mobile-related
      question: "Do you provide Android & iOS app development?",
      answer:
        "Yes, we develop mobile applications for both Android and iOS using Kotlin, Java, Flutter, and React Native.",
    },
    {
      id: 4,
      icon: "fa-globe", // Website-related
      question: "Can you design and develop websites?",
      answer:
        "Yes, we build modern websites using HTML, WordPress, PHP, Laravel, and other technologies.",
    },
    {
      id: 5,
      icon: "fa-chart-line", // Marketing/SEO
      question: "Do you provide SEO and social media marketing?",
      answer:
        "Yes, we optimize websites for search engines and manage digital marketing campaigns to boost online presence.",
    },
    {
      id: 6,
      icon: "fa-cloud", // Cloud Services
      question: "What cloud services do you offer?",
      answer:
        "We provide cloud storage, cloud synchronization, remote access solutions, and data security services.",
    },
    {
      id: 7,
      icon: "fa-edit", // Content & Design
      question: "Do you offer graphic design services?",
      answer:
        "Yes, we create logos, business profiles, banners, flyers, thumbnails, packaging, and label designs.",
    },
    {
      id: 8,
      icon: "fa-video", // Video Editing
      question: "Do you provide video editing and animation services?",
      answer:

        "Yes, we offer professional video editing, animation, 3D design, and YouTube content creation services.",
    },
    {
      id: 9,
      icon: "fa-dollar-sign", // Monetization
      question: "Can you help monetize YouTube channels and Facebook pages?",
      answer:
        "Yes, we assist in YouTube channel monetization, Facebook page monetization, and e-commerce store setups.",
    },
    {
      id: 10,
      icon: "fa-robot", // AI/Automation
      question: "Do you offer automation solutions?",
      answer:
        "Yes, we provide automated SMS & WhatsApp reply services, chatbot integration, and AI-driven customer support.",
    },
  ];


  return (
    <div className="max-w-3xl mx-auto p-4 md:p-10">
      <h2 className="md:text-3xl text-[25px] font-bold text-center text-[#F28E13] mb-8">
        Frequently Asked Questions
      </h2>
      <div className="md:space-y-4 space-y-2">
        {faqs.map((faq, index) => (
            
          <motion.div
          initial={{ opacity: 0,  scale: .5}}
          whileInView={{ opacity: 1,scale:1 } }
          viewport={{ once: false, amount: 0.4 }} 
          transition={{ duration: 0.2, ease: "easeOut" }}
            key={faq.question}
            className={`border border-[#F28E13] hover:bg-orange-100 ${index === openIndex? "bg-orange-100":""} rounded-2xl overflow-hidden transition-all duration-300`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between itemss-center p-3 md:p-5 text-lg font-medium text-left focus:outline-none text-[#F28E13]"
            >
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${faq.icon} text-[#F28E13] text-xl`}></i>
                <span className="text-sm md:text-base">{faq.question}</span>
              </div>
              <i
                className={`fa-solid ${
                  openIndex === index ? "fa-chevron-up" : "fa-chevron-down"
                } text-[#F28E13] transition-transform duration-300`}
              ></i>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="p-4 md:p-5 text-gray-700 text-sm md:text-base">
                {faq.answer}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};





export default HomeFAQ












