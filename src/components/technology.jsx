//import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { RiJavaLine } from "react-icons/ri"
import { RiJavascriptLine } from "react-icons/ri"
import { RiNodejsLine } from "react-icons/ri"
import { FaPython } from "react-icons/fa"
import { FaDatabase } from "react-icons/fa"
import { animate, motion } from "framer-motion"

const iconVar = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
export const Tech = () => {
    return (
        <div 
         className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{y:0,opacity:1}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{x:0,opacity:1}}
        initial={{opacity:0,x:100}}
        transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVar(2)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <RiReactjsLine className="text-7xl text-cyan-400 " />
                </motion.div>
                <motion.div variants={iconVar(2.5)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <RiJavaLine className="text-7xl text-400 " />
                </motion.div>
                <motion.div
                    variants={iconVar(2)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <RiJavascriptLine className="text-7xl text-yellow-400 " />
                </motion.div>
                <motion.div variants={iconVar(2.5)}
                initial="intial"
                animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <RiNodejsLine  className="text-7xl text-green-500 " />
                </motion.div>
                <motion.div variants={iconVar(2)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <FaPython className="text-7xl text-400 " />
                </motion.div>
                <motion.div
                    variants={iconVar(2.5)}
                    initial="intial"
                    animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>

                    <FaDatabase className="text-7xl text-cyan-400 " />
                </motion.div>

            </motion.div>
        </div>
    )
}
