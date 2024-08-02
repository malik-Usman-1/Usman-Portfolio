import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin, } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white pb-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center pb-8">Contact</h2>
        <div className="flex sm:space-x-8 space-x-5 justify-center  sm:p-3 p-2  pb-5 sm:px-6 px-3">
          <a href="https://github.com/malik-Usman-1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-black sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100026847819006&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-700 sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.instagram.com/usman_malik24?igsh=MWNiazJ0c3BrczNnMw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className=" text-pink-500 sm:text-3xl text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/usman-jamshaid-4789842b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 sm:text-3xl text-2xl" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center">
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-4xl mb-2" />
            <p className="text-lg text-blue-600 "><strong className=' text-black'>Email:</strong> ujamshaid62@Gmailcom</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPhone className="text-4xl mb-2" />
            <p className="text-lg text-blue-600"><strong className=' text-black'>Phone:</strong> +91 3164466401</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-2" />
            <p className="text-lg text-blue-600"><strong className=' text-black'>Address:</strong> Afzal road sanda kalan, Lahore, Pakistan</p>
          </div>
        </div>

        <form className="max-w-lg mx-auto">
          <label className="block mb-2">Name:</label>
          <input type="text" className="border p-2 mb-4 w-full" />

          <label className="block mb-2">Email:</label>
          <input type="email" className="border p-2 mb-4 w-full" />

          <label className="block mb-2">Message:</label>
          <textarea className="border p-2 mb-4 w-full"></textarea>

          <button type="submit" className="bg-blue-700 text-white p-2 w-full">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;