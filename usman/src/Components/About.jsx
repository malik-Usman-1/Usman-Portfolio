import React from 'react';


const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-100">
      <h1 className="entry-title  text-center pb-12">About Me</h1>

      <div className="container mx-auto flex items-center">

        <img src='/assets/Usman2.jpg' alt="" className="w-32 h-32 rounded-full mr-8" />
        <div>
        <h2 class="fw-300">Hey there, my name is <strong>Usman
                                                            Jamshaid</strong> I am a <strong>Front-End
                                                            Developer</strong> based in Lahore, Pakistan.
                                                    </h2>
                                                    <p>Specialized in frontend development with years of
                                                        professional experience in building the web and working with
                                                        technologies like React.js, Next.js and much more. I help our
                                                        clients create brands, build digital products and services,
                                                        innovate, find opportunities and validate ideas.</p>
        </div>
      </div>
    </section>
  );
};

export default About;