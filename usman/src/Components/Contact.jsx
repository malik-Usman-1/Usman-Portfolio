import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-white pb-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center pb-8">Contact</h2>

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