import React, { useState } from 'react';
import { Link } from 'react-scroll';

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
            onClick={toggleMenu}

            >
      <h1 className="text-white  Usman sm:text-4xl text-3xl cursor-pointer ">Portfolio</h1>


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
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center">
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              className="py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="py-2 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Home;