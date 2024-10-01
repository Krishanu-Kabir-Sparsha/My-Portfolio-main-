import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useState } from "react";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { li, link, nav } from "framer-motion/client";


const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    //dynamic template string
    <nav className={`${styles.paddingX_axis} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}> 

        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

          <Link
            to= "/" className="flex items-center gap-3" onClick={()=>{
              setActive("");
              window.scrollTo(0,0);
            }}
          >
          
          <img src={logo} alt="logo" className="max-w-[2rem] max-h-[2rem] object-contain" />
            <p className="text-white text-[18px] font-extrabold cursor-pointer flex">Krishanu Kabir Sparsha &nbsp;<span className="sm:block hidden"> | &nbsp; Full Stack Developer</span></p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id} 
                  className= {`${
                active === link.title ? "text-slate-100" : "text-secondary"
              } hover:text-slate-100 text-[19px] font-semibold cursor-pointer `} 
                  onClick={()=> setActive(link.title)}
              >

                <a href={`#${link.id}`}>{link.title}</a>

              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img 
              src={toggle ? close : menu} alt="menu" className="w-[29px] h-[29px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex'} p-7 black-gradient absolute top-20 right-0 mx-5 my-2 min-w-[145px] z-10 rounded-xl`}>

            <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.id} 
                  className= {`${
                active === link.title ? "text-slate-100" : "text-secondary"
              } font-poppins font-semibold cursor-pointer text-[17px]`} 
                  onClick={()=> {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
              >

                <a href={`#${link.id}`}>{link.title}</a>

              </li>
            ))}
            </ul>

            </div>

          </div>


        </div>

    </nav>
  )
}

export default Navbar