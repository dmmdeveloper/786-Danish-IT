import { useState, useEffect, useRef } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import {motion} from "framer-motion"

const Nav = ({ changeNav = 1 , key=Math.floor(Math.random()*8888) }) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [bgTransparent, setBgTransparent] = useState(true);

  const [isOpen , setIsOpen]= useState(false)
  const navRef = useRef(null)
  const btnRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navRef.current && 
        !navRef.current.contains(event.target) &&
        btnRef.current && 
        !btnRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Listen for both mouse and touch events
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide Navbar on Scroll Down, Show on Scroll Up
      setVisible(currentScrollY < lastScrollY);

      // Change Navbar Background Color based on Scroll Position
      setBgTransparent(currentScrollY < window.innerHeight * changeNav);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (<>
    <header

      className={`fixed z-50 top-0 left-0 w-full h-[60px] transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        bgTransparent
          ? "bg-transparent"
          : "bg-white border-b-[1px] border-appOrange"
      }`}
    >
      {/* Navigation Start Here   */}
      <nav className="md:px-10 px-6 flex items-center h-full ">
        {/* Logo */}
        <motion.div 
        
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full  flex items-center">
          <img className="h-[50px]" src={logo} alt="Logo" />
        </motion.div>

        {/* Navigation Links Desktop */}
        <motion.div

        className="flex-1 items-center h-full md:flex hidden justify-end space-x-6">
          {links.map((link) => (
<motion.div 
       initial={{ opacity: 0, y: link.id%2 === 0 ? 20 : -20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, ease: "easeOut" }}
  className="">
            <NavLink
              to={link?.to}
              key={link.text}
              className={({ isActive }) =>
                ` ${
                  bgTransparent
                    ? `text-white  px-1 rounded-md   backdrop-blur-md hover:backdrop-blur-xl  py-[2px] border border-[rgba(255,255,255,0)] shadow-sm  hover:mb-2   duration-200  flex justify-center items-center  ${
                        isActive
                          ? "shadow-sm border border-white "
                          : ""
                      }`
                    : ` hover:opacity-80 flex justify-center items-center   px-1 text-xl rounded-md  relative  text-appOrange  py-[2px] ${
                        isActive ? "underline":"group"
                      }`
                } 
                 `
              }
            >
              {link.text}
              <span className="absolute bottom-1 left-0 w-full h-[2px] bg-appOrange transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </NavLink>
            </motion.div>
          ))}
          {/* Contact Button */}
          <NavLink  style={{fontFamily:"Plus Jakarta Sans"}} to={"/contact"}  className={({ isActive }) =>
                ` ${
                  bgTransparent
                    ? `text-black  bg-white px-1 rounded-md    hover:backdrop-blur-xl  py-[2px] flex contact-btn duration-150 border justify-center items-center  ${
                        isActive
                          ? "shadow-sm border border-white shadow-white"
                          : ""
                      }`
                    : ` hover:opacity-80 flex justify-center items-center   px-1 text-xl rounded-md  bg-appOrange text-white  py-[2px] ${
                        isActive ? "underline":"group"
                      }`
                } 
                 `
              } >Contact</NavLink>

        </motion.div>
        {/* Mobile NAVigation Is HERE */}
        <div className="flex-1 h-full  md:hidden flex items-center justify-end">
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          ref={btnRef} onClick={()=>setIsOpen(prev =>!prev)} className={`text-lg  h-8 w-8 rounded-md  flex justify-center items-center ${bgTransparent ? "border-[2px] backdrop-blur-lg text-white ":"bg-appOrange text-white"}`} >
            {
              isOpen ? 
              <i class="fa-solid fa-xmark"></i>
              :
          <i class="fa-solid fa-bars-staggered"></i>
            }
          </motion.button>
        </div>
      </nav>
    </header>
<MobileNav navRef={navRef} bgTransparent={ bgTransparent} isOpen={isOpen} />
  </>);
};
// Moblie Nav Compoenent
function MobileNav ({bgTransparent,isOpen , navRef }) {
  return(<>
  <div ref={navRef} className={`duration-300 md:hidden border  flex min-h-[300px] rounded-lg h-auto max-w-[80%] w-[300px] mobile-nav-b bg-white shadow-sm border-appOrange ${isOpen ? "mobile-nav":"mobile-nav-close"} `}>
    <div className="min-h-[300px]  h-auto  w-full flex justify-center space-y-6 items-center flex-col  text-3xl  py-7" >
{links.map((link)=>
<NavLink to={link.to} key ={link.text} className={({isActive})=> `px-5 flex text-appOrange justify-center items-center ${isActive?"border-l-2 border-r-2 border-appOrange rounded-full":""} `} > {link.text}</NavLink>
)}

<Link  className="bg-appOrange text-white px-3 rounded-full flex justify-center items-center">
Contact
</Link>

</div>


  </div>

  
  
  </>)
  
}

const links = [
  {
    id: 0,
    text: "Home",
    to: "/",
  },
  {
    id: 1,
    text: "About",
    to: "/about#about-section",
  },
  {
    id: 2,
    text: "Secrvices",
    to: "/services",
  },
  {
    id: 3,
    text: "Portfolio",
    to: "/portfolio",
  },
];
export default Nav;
