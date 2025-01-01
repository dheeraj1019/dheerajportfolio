import React from 'react';
import { motion } from 'framer-motion';
export const Projects = () => {
  const projectData = [
    {
      year: "Feb 2024 – May 2024",
      title: "Weather Forecasting Application",
      role: "Full-Stack Developer",
      description:
        "Created a weather forecasting project by integrating a real-time weather API, resulting in accurate and up-to-date forecasts with 95% accuracy. Used responsive design principles to improve accessibility across 5+ device types, boosting mobile user engagement by 20%. Built the front-end with HTML, CSS, and JavaScript, reducing load time by 30% and enhancing user engagement.",
      technologies: ["HTML", "CSS", "JavaScript", "SQL"],
    },
    {
      year: "Sep 2023 – Nov 2023",
      title: "Chili Crop Health Check Website",
      role: "AI Engineer",
      description:
        "Designed and implemented a deep learning model with DARKNET53 and YOLOv4 to identify and diagnose crop diseases, achieving over 90% accuracy. Integrated the AI model into an agricultural platform for real-time health monitoring, reducing processing time by 20% and contributing to better crop yield management.",
      technologies: ["HTML", "CSS", "Python", "SQL", "GIT"],
    },
  ];

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1  whileInView={{y:0,opacity:1}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}  className='my-20 text-center text-4xl'>Projects</motion.h1>
      {projectData.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <motion.div initial={{x:-100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1}} className='w-full lg:w-1/2'>
            <p className='mb-2 text-neutral-400'>{project.year}</p>
          </motion.div>
          <motion.div  initial={{x:100,opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1}}   className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>
              {project.role} - <span className='text-purple-100'>{project.title}</span>
            </h6>
            <p className='mb-4 text-neutral-400'>{project.description}</p>
            <div className='flex flex-wrap'>
              {project.technologies.map((tech, techIndex) => (
                <h3
                  key={techIndex}
                  className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700 transition-colors duration-300 cursor-pointer hover:bg-purple-700 hover:text-white'
                >
                  {tech}
                </h3>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};
