import React from "react";
import { Link } from "react-router-dom";

function Grid({ cards = [], heading = "Our Services" }) {
  return (
    <>
      <div className="md:w-[80%] w-[90%]  mx-auto mt-[100px]">
        {heading && (
          <div className="">
            <h1 className="tmd:ext-4xl text-3xl text-appOrange">{heading} </h1>
          </div>
        )}
        {/* Grid */}
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-cols-[repeat(auto-fill,minmax(45%,1fr))] md:gap-4 gap-3 mt-5 bg-slat-300  ">
          {/* Card */}
          {cards.map((card) => {
            return (
              <>
                <div
                  key={card.description}
                  className="group mx-auto  relative md:h-[250px] h-[150px]  w-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                    src="https://i.imgur.com/QYWAcXk.jpeg"
                    alt="Photo of Cartagena"
                  />

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 w-full h-full group-hover:backdrop-blur-sm md:h-[80%] bgradientg--to-t from-black via-black/50 to-transparent translate-y-[60%] group-hover:translate-y-0 transition-transform duration-500 md:p-4 p-2 flex flex-col justify-between">
                    {/* Title with Animated Underline */}
                    <h2 className="relative text-white md:text-lg text-sm font-bold uppercase w-fit before:absolute before:-bottom-1 before:left-0 before:h-[3px] before:w-0  before:bg-orange-500 before:transition-all before:duration-700 group-hover:before:w-full">
                      {card?.heading}
                    </h2>
                    {/* Description (Hidden Initially) */}
                    <p className="text-white md:text-sm text-[10px] opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      {card?.description}
                    </p>
                    {/* Button */}
                    <Link
                      to="/about"
                      className="md:mt-2 bg-orange-500 text-black font-semibold md:py-1 py-[2px] md:px-4 px-2 rounded-full md:text-sm text-[10px] opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Grid;
