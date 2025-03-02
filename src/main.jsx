import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  About,
  Contact,
  Home,
  PageNotFound,
  Portfolio,
  Service,
} from "./pages/index.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { useNavigate } from "react-router-dom"; // Navigation Hook

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<UpcomingServices />} />
      <Route path="/portfolio" element={<Portfolio />} />

      {/* 404 page */}
      <Route path="*" element={<PageNotFound />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

export default function UpcomingServices() {
  const navigate = useNavigate(); // Navigation Function

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-appOrange drop-shadow-md">
          Exciting Services Are On The Way! 
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
          We’re working on innovative solutions to empower businesses with
          cutting-edge technology. Stay tuned for something amazing!
        </p>

        {/* Fancy "Coming Soon" Badge */}
        <div className="inline-block bg-appOrange text-white px-5 py-2 rounded-full text-lg mt-6">
          {/* <i className="fas fa-bell"></i> */}
           Coming Soon 
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          {/* Stay Updated Button */}
          <button
            className="bg-appOrange text-white px-6 py-3 rounded-lg text-lg font-semibold 
                             flex items-center gap-2  transition duration-300"
          >
            {/* <i className="fas fa-bell"></i> */}
             Stay Updated 
          </button>

          {/* Go to Home Button */}
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 cursor-pointer hover:scale-95 text-white px-6 py-3 rounded-lg text-sm md:text-lg font-semibold 
                       flex items-center gap-2 animate-heartbeat hover:bg-gray-900 transition duration-300"
          >
            Go to Home
          </button>
        </div>
      </div>
    </section>
  );
}
