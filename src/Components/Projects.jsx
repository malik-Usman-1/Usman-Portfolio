import React from 'react';

const Projects = () => {
  return (
    <div id='Projects' className="p-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center pb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-4 space-y-3 shadow-md">
            <h3 className="text-2xl font-bold">Project 1</h3>
            <p>Compro system</p>
            <img src="/assets/project1.png" alt="" />
            <div className=' border-2 border-blue-600 px-3 py-1  w-max hover:bg-blue-700 hover:text-white duration-300 group  cursor-pointer'>

            <a href="https://compro-system.vercel.app/" className="text-blue-500 group-hover:text-white duration-300 no-underline font-semibold" target="_blank" rel="noopener noreferrer">View Project</a>
            
          </div>

          </div>
          <div className="bg-white p-4  space-y-3 shadow-md">
            <h3 className="text-2xl font-bold">Project 2</h3>
            <p>Audionic</p>
            <img src="/assets/project2.png" alt="" />
            <div className=' border-2 border-blue-600 px-3 py-1  w-max hover:bg-blue-700 hover:text-white duration-300 group  cursor-pointer'>

            <a href="https://audionic.vercel.app/" className="text-blue-500 group-hover:text-white duration-300 no-underline font-semibold" target="_blank" rel="noopener noreferrer">View Project</a>
            
          </div>



          </div>
          <div className="bg-white space-y-3 p-4 shadow-md">
            <h3 className="text-2xl font-bold">Project 3</h3>
            <p>Creasoft</p>
            <img src="/assets/project3.png" alt="" />
            <div className=' border-2 border-blue-600 px-3 py-1  w-max hover:bg-blue-700 hover:text-white duration-300 group  cursor-pointer'>

            <a href="https://creasoft.vercel.app/" className="text-blue-500 group-hover:text-white duration-300 no-underline font-semibold" target="_blank" rel="noopener noreferrer">View Project</a>
            
          </div>



            
          </div>
          <div className="bg-white p-4 space-y-3 shadow-md">
            <h3 className="text-2xl font-bold">Project 4</h3>
            <p>Exclusive</p>
            <img src="/assets/project4.png" alt="" />
            <div className=' border-2 border-blue-600 px-3 py-1  w-max hover:bg-blue-700 hover:text-white duration-300 group  cursor-pointer'>

<a href="https://exclusive-theme-team.vercel.app/" className="text-blue-500 group-hover:text-white duration-300 no-underline font-semibold" target="_blank" rel="noopener noreferrer">View Project</a>

</div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;