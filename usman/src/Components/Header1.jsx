import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons';


const Header1 = () => {
  return (
    <div id='port' className="relative w-full h-screen">
      <img 
        src="/assets/Usman1.jpg" 
        alt="Profile" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <div>
            <div className=' bg-white'>
            {/* <FontAwesomeIcon icon={faCrown} className="text-yellow-500 text-3xl" /> */}
            </div>
        <div className='  sm:border-4   border-black sm:p-5   flex justify-center items-center'>
        <h1 className="text-white  Usman sm:text-4xl text-3xl mb-4">Usman Jamshaid</h1>
        </div>
        <marquee
            behavior=""
            direction="scroll"
            scrollamount=""
            className=""
          >
          
                <h2 className=' text-white text-lg '>
                    Frontend Developer React js
                </h2>
            
     
          </marquee>
       

        </div>
        <div className="flex space-x-6 bg-black p-3 px-6">
          <a href="https://github.com/malik-Usman-1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-3xl" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026847819006&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl" />
          </a>
          <a href="https://www.instagram.com/usman_malik24?igsh=MWNiazJ0c3BrczNnMw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl" />
          </a>
          <a href="https://www.linkedin.com/in/usman-jamshaid-4789842b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header1;