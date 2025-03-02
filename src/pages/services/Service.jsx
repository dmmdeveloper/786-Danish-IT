import React from 'react'
import { FoTer, Nav } from '../../components'

function Service() {
  return (
    <>
<section  className='h-auto w-full bg-gray-500' >
    <Nav changeNav={0} />
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-orange-700 drop-shadow-md">
      Our Upcoming Services 🚀
    </h2>
    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
      Get ready for a new era of innovation! We are introducing cutting-edge services to empower 
      your business and accelerate digital transformation.
    </p>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      {[
        { title: "AI-Powered Solutions", icon: "🤖" },
        { title: "Blockchain Consulting", icon: "🔗" },
        { title: "Cloud Transformation", icon: "☁️" },
        { title: "Cybersecurity Services", icon: "🔒" },
        { title: "Business Automation", icon: "⚡" },
        { title: "Smart City Innovations", icon: "🏙️" },
      ].map((service, index) => (
        <div
          key={index}
          className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-500 
                     transition transform hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center"
        >
          <div className="text-4xl">{service.icon}</div>
          <h3 className="text-xl font-semibold text-orange-700 mt-4">
            {service.title}
          </h3>
          <p className="text-gray-600 mt-3">
            A next-generation service designed to revolutionize your business.
          </p>
        </div>
      ))}
    </div>

    {/* Call to Action */}
    <div className="mt-12">
      <button className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-semibold 
                         hover:bg-orange-700 transition duration-300">
        Stay Updated 📩
      </button>
    </div>
  </div>
</section>

    <FoTer/>

</section>

    
    </>
  )
}

export default Service