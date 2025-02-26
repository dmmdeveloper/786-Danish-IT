import { useState, useEffect } from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgTransparent, setBgTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide Navbar on Scroll Down, Show on Scroll Up
      setVisible(currentScrollY < lastScrollY);

      // Change Navbar Background Color based on Scroll Position
      setBgTransparent(currentScrollY < window.innerHeight * 1);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full h-[80px] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        bgTransparent
          ? "bg-transparent"
          : "bg-white border-b-[1px] border-yellow-500"
      }`}
    >
      {/* Navigation Start Here  */}
      <nav className="px-10 flex items-center h-full ">

    {/* Logo */}
    <div className="h-full  flex items-center">
        <img className="h-[50px]" src={logo} alt="Logo" />
    </div>

    {/* Navigation Links (Auto Width) */}
    <div className="flex-1 items-center h-full flex justify-end space-x-6">
        {
            links.map(()=>
                <NavLink to={"/k"} className={({isActive})=>` ${bgTransparent ? "text-[white]  px-1 rounded-md  backdrop-blur-md hover:backdrop-blur-xl  py-[2px] border border-[rgba(255,255,255,0.12)] shadow-sm  flex justify-center items-center":""}  ${isActive?"shadow-white":
                "  px-1 rounded-md  text-yellow-500  py-[2px] border border-[rgba(255,255,255,0.2)]  flex justify-center items-center"} `} >
            Home
        </NavLink>

            )
        }
     
        
    </div>
</nav>


    </header>
  );
};

export default Nav;

const links = [1,2,3,4,5]