import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExperienceAndSkills = () => {
  return (
    <div id='Resume' className=" p-8  bg-white  ">
      <div className="container mx-auto">

      <div id="primary" className="content-area">
        <div id="content" className="site-content" role="main">
          <div className="page-single page-layout">
            <article className="page hentry">
              <header className="entry-header text-center pb-12">
                <h1 className=" text-4xl font-bold">Resume</h1>
              </header>
              <div className="entry-content">
                <div className="row">
                  <div className="col-sm-6 col-lg-7 space-y-7 pb-4 sm:pb-0">
                    <div className="event">
                    <h2><i>Experience</i></h2>

                      <p>
                        <i className="pw-icon-badge"></i>
                      </p>
                    </div>

                    <div className="event space-y-2">
                      <div className=' border-2 border-blue-600 px-3 py-1  w-max '>
                      <h3 className=' text-sm text-blue-600'>Aug 2023 - PRESENT</h3>

                      </div>
                      <h4>Front-End DEVELOPER</h4>
                      <h5 className=' text-lg text-gray-500'>Digital Vortax</h5>
                      <p className=' text-base font-semibold text-black '>
                        <b>-</b> Developed and implemented APIs and RESTful services, facilitating smooth communication between different components of the software architecture and enabling efficient data exchange. <br /><br />
                        <b>-</b> Led the design of application structure, schema, and frontend components utilizing React JS. <br /><br />
                        <b>-</b> Writing clean code for the front-End of the software. Considering security, maintenance, scalability, and more when developing.
                      </p>
                    </div>

                    <div className="event space-y-2">
                    <div className=' border-2 border-blue-600 px-3 py-1  w-max '>

                      <h3 className=' text-sm text-blue-600'>Mar 2024 - PRESENT</h3>
                    </div>

                      <h4>FRONTEND | REACT JS INSTRUCTOR</h4>
                      <h5>Vvork Cloud Technology.</h5>
                     
                    </div>

                    <div className="event">
                      <h2 className=' text-black'>EDUCATION</h2>
                      <p>
                        <i className="pw-icon-education"></i>
                      </p>
                    </div>

                    <div className="event space-y-2">
                    <div className=' border-2 border-blue-600 px-3 py-1  w-max '>

                      <h3 className=' text-sm text-blue-600'>2022</h3>
                    </div>

                      <h4 className=' text-lg'>Matric</h4>
                      <h5 className=' text-lg text-gray-500'>Abdali School, Lhr</h5>
                      <p className=' text-black font-semibold'>I studied Matric at Abdali School, Lhr.</p>
                    </div>

                    <div className="event space-y-2">
                    <div className=' border-2 border-blue-600 px-3 py-1  w-max '>

                      <h3 className=' text-sm text-blue-600'>2024</h3>
                    </div>

                      <h4 className=' text-lg'>ICOM</h4>
                      <h5 className=' text-lg text-gray-500'>Private, Lhr</h5>
                      <p className=' text-black font-semibold'>I studied ICOM at Private Academy, Lhr.</p>
                    </div>

                    <div className="event space-y-2">
                    <div className=' border-2 border-blue-600 px-3 py-1  w-max '>

                      <h3 className=' text-sm text-blue-600'>Mar 2023 – Apr 2024 (1 year)</h3>
                    </div>

                      <h4 className=' text-lg'>Web development training</h4>
                      <h5 className=' text-lg text-gray-500'>Vvork Cloud Technology.</h5>
                    </div>
                    <div className=' border-2 border-blue-600 px-3  pt-2  w-max  '>

                    <p className=' text-sm text-blue-600'>
                      <a target="_blank" rel="noopener noreferrer" href="/assets/Usman Jamshaid[3].pdf" className="button primary">
                        <i className="pw-icon-doc-alt"></i>
                        Download CV
                      </a>
                    </p>
                    </div>

                  </div>
                  <div className="col-sm-6 col-lg-5 space-y-6">
                    <div className="section-title center">
                      <h2><i>Coding Skills</i></h2>
                    </div>

                    {renderSkillUnit("Javascript", 70)}
                    {renderSkillUnit("React js", 80)}
                    {renderSkillUnit("Html", 100)}
                    {renderSkillUnit("css", 95)}
                    {renderSkillUnit("tailwind css", 90)}
                    {renderSkillUnit("bootstrap", 80)}
                    {renderSkillUnit("material ui", 70)}
                    {renderSkillUnit("REDUX \\ THUNK \\ RTK", 80)}

                   

                    <h2><i>Deployment Tools</i></h2>

                    {renderSkillUnit("git | github", 95)}
                    {renderSkillUnit("vercel", 90)}
                    {renderSkillUnit("netlify", 70)}
                    {renderSkillUnit("FIREBASE STORE", 60)}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

const renderSkillUnit = (skill, percentage) => (
  <div className="skill-unit">
    <h4 className=' text-base'>{skill}</h4>
    <div className="bar " data-percent={percentage}>
      <div className=" h-1  bg-blue-700  " style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default ExperienceAndSkills;