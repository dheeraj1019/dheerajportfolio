//import React from 'react'
//import dheera from "../assets/dheera.jpg";
import asdfads from "../assets/assdddd.jpg"
import { motion } from "framer-motion";
export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1}} className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    {/* Image with styling */}
                    <img 
                        className="rounded-2xl w-80 h-80 object-cover border-4 border-neutral-800 shadow-lg" 
                        src={asdfads} 
                        alt="about me" 
                    />
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
                <motion.div  whileInView={{opacity:1, x:0}}
            initial={{x:100,opacity:0}}
            transition={{duration:1}}  className="flex justify-center lg:justify-center">
                    <p className="my-2 max-w-xl py-6 text-justify">
                    I am a fresher with a strong desire to utilize technology to solve real-world problems. My focus will be on innovative solutions, from chili crop health detection using Darknet53 and state-of-the-art weather forecasting techniques to developing efficient systems for agricultural optimization, combining technical expertise in Python, ReactJS, and machine learning. My aim is to see improved farming outcomes through better decision-making and sustainability, integrating AI and the predictive models.
                    </p>
                </motion.div>
            </div>
        </div>
    </div>
  );
};
