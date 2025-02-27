import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

function Homeachievements() {
  const [startCount, setStartCount] = useState(false);
  const achievementsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={achievementsRef}
      className="md:h-[600px] h-auto flex md:flex-row flex-col items-center mt-10 w-full"
    >
      {/* Image 70% */}
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740666886/Danish%20IT/gj2qbixxd4voog9r8ggh.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="md:h-[600px] w-1/2  h-[240px] md:flex-1 "
      ></div>
      {/* Achievements 30% */}
      <div className="md:h-full h-1/2 md:w-[350px] w-[90%]   border-orange-300  flex flex-col justify-between py-3">
        {/* Achievement Items */}
        {achievements.map((a) => (
          <div key={a.id} className="px-4">
            <h1 className="text-3xl text-appOrange font-bold flex items-center">
              {isNaN(a.count) ? (
                a.count // Display text if it's not a number
              ) : (
                startCount && (
                  <CountUp
                    start={0}
                    end={Number(a.count)}
                    duration={2.75}
                    separator=" "
                    decimals={a.count.includes(".") ? 1 : 0} // Handle decimal values
                  />
                )
              )}
              {a.plus && <i className="fa-solid fa-plus text-2xl"></i>}
            </h1>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Homeachievements;

const achievements = [
  { id: 1, count: "2000", description: "Successful Software Solutions across the globe", plus: true },
  { id: 2, count: "50", description: "Serving Clients in multiple countries", plus: true },
  { id: 3, count: "170", description: "Skilled Professionals pushing innovation", plus: true },
  { id: 4, count: "10", description: "Years of Excellence in development", plus: true },
  { id: 5, count: "100%", description: "Client Satisfaction Rate achieved" },
  { id: 6, count: "AI, SaaS, FinTech", description: "Expertise in advanced technologies" },
  { id: 7, count: "Global Brands", description: "Trusted for scalable applications" },
];
