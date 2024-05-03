import React from 'react';
import { PROJECTS } from '../../constants';

const Projects = () => {
  return (
    <div>
      <h2 className='my-20 font-black text-center text-4xl text-PinkTitle'>Projects</h2>
      <hr className="my-8 border-t-4 border-customRose" />
      
      <div>{PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded border border-customMagenta'/>
            
          </div>
          <div className='text-gray-600 w-full max-w-xl lg:w-3/4'>
            <h6 className='text-gray-700 mb-2 font-semibold'>{project.title}</h6>
            <p className='mb-4'>{project.description}</p>
            {project.technologies.map((tech, index) => (
              <span key={index} className='mr-2 rounded bg-customRose px-2 py-1 text-sm font-medium'>
                {tech}
              </span>
            ))}
          </div>
          
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
