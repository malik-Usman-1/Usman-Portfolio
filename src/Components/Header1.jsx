import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons';


const Header1 = () => {
  return (
    <div id='port' className="relative sm:w-full sm:h-screen">
      <img 
        src="/assets/Usman1.jpg" 
        alt="Profile" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-14 sm:pt-0 bg-black  bg-opacity-50">
        <div>
           
        <div className='  sm:border-4   border-black sm:p-5   flex justify-center items-center'>
        <h1 className="text-white  Usman sm:text-4xl text-2xl sm:mb-4">Usman Jamshaid</h1>
        </div>
        <marquee
            behavior=""
            direction="scroll"
            scrollamount=""
            className=""
          >
          
                <h2 className=' text-white sm:text-lg text-sm '>
                    Frontend Developer / React js Developer
                </h2>
            
     
          </marquee>
       

        </div>
        <div className="flex sm:space-x-6 space-x-3 bg-black sm:p-3 p-2 sm:px-6 px-3">
          <a href="https://github.com/malik-Usman-1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026847819006&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.instagram.com/usman_malik24?igsh=MWNiazJ0c3BrczNnMw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/usman-jamshaid-4789842b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white sm:text-3xl text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header1;