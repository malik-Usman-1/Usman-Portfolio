import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <h1 className=" text-4xl text-center font-bold md:pb-12 pb-6">About Me</h1>

      <div className="container mx-auto flex flex-col md:gap-6 gap-2 md:flex-row items-center md:items-start">
        <img src='/assets/Usman2.jpg' alt="Usman Jamshaid" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-8 mx-auto md:mx-0" />
        
        <div className=" md:text-left">
          <h2 className="fw-300">
            Hey there, my name is <strong>Usman Jamshaid</strong>. I am a <strong>Front-End Developer</strong> based in Lahore, Pakistan.
          </h2>
          <p>
            Specialized in frontend development with years of professional experience in building the web and working with technologies like React.js, Next.js, and much more. I help our clients create brands, build digital products and services, innovate, find opportunities, and validate ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
