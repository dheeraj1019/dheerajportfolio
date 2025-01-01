//import React from 'react'
import dheeraj from "../assets/dheerajkumar.jpg";
import {  motion } from "framer-motion";

export const Hero = () => {
    const container=(delay)=>({
        hidden:{x: -100, opacity: 0},
        visible:{
            x:0,
            opacity:1,
            transition:{duration : 0.5, delay:delay}
        }
    })
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap items-center">
                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                        initial="hidden"
                        animate="visible" 
                         className="pb-4 text-6xl font-thin tracking-tight lg:text-7xl">
                            Dheeraj Kumar Jillellamudi
                        </motion.h1>
                        <motion.span 
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                         className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                            Skilled Full-Stack Engineer proficient in ReactJS, HTML, CSS, Python, and SQL, with a strong foundation in building dynamic and user-centric web applications. Adept at delivering impactful solutions through innovative problem-solving, effective project management, and a commitment to creating seamless digital experiences. Passionate about developing scalable and efficient software solutions that drive results.
                        </motion.p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="relative">
                        <motion.img initial={{initial:100,opacity:0}}
                        animate={{initial:0,opacity:1}}
                        transition={{duration:1,delay:1}}
                            src={dheeraj}
                            alt="Dheeraj Kumar"
                            className="m-20 w-70 h-64 rounded-lg border-2 border-neutral-800 shadow-lg lg:mt-[-40px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
