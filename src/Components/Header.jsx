import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="  head text-white p-4  sticky z-30 top-0">
      <div className="container mx-auto flex justify-between items-center">
      <Link 
            to="port" 
            smooth={true} 
            duration={500} 
          

            >
      <h1 className="text-white  Usman sm:text-4xl text-2xl cursor-pointer ">Portfolio</h1>


            </Link>

        <nav className="hidden md:flex">
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            className="mr-4 font-semibold text-white   duration-300 text-lg cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link 
            to="Resume" 
            smooth={true} 
            duration={500} 
            className="mr-4 font-semibold text-white  duration-300 text-lg cursor-pointer"
            onClick={toggleMenu}
          >
            Resume
          </Link>
          <Link 
            to="Projects" 
            smooth={true} 
            duration={500} 
            className="mr-4 font-semibold  text-white duration-300 text-lg cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="mr-4 font-semibold  text-white duration-300 text-lg cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-3xl">
          {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}

           
          </button>
          {menuOpen && (
        <div className="  absolute   w-full inset-0  h-40 top-20 head">
          <nav className="flex flex-col  pl-10  pt-3">
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="py-1 cursor-pointer no-underline text-white font-serif"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="Resume" 
              smooth={true} 
              duration={500} 
              className="py-1 cursor-pointer no-underline text-white font-serif"
              onClick={toggleMenu}
            >
              Resume
            </Link>
            <Link 
              to="Projects" 
              smooth={true} 
              duration={500} 
              className="py-1 cursor-pointer no-underline text-white font-serif"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="py-1 cursor-pointer no-underline text-white font-serif"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
        </div>
      </div>
     
    </header>
  );
};

export default Home;