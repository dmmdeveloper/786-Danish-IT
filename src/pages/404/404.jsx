import { Link } from "react-router-dom";
import { Footer } from "../../components";

const PageNotFound = () => {
  return (
    <main className="h-screen relative w-full flex flex-col justify-center items-center bg-[#1A2238] ">
      <h1 className="md:text-9xl text-7xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-appOrange  text-white md:px-2 px-1 md:text-lg text-[12px] rounded rotate-12 absolute md:top-[43%] top-[41%]">
        Page Not Found
      </div>

      <div className="text-[#ffffffa7] italic mt-7 md:mt-10">
        May Be Upcoming Page
      </div>

      <button className="mt-5 relative inline-block text-sm font-medium text-appOrange group active:text-orange-500 focus:outline-none focus:ring">
        <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-appOrange group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="relative block px-5 md:px-8 py-2 md:py-3 bg-[#1A2238] border border-current">
          <Link to="/">Go Home</Link>
        </span>
      </button>

      <div className="absolute bottom-1">
        <Footer />
      </div>
    </main>
  );
};

export default PageNotFound;
