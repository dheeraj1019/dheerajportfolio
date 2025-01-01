import React from 'react';
import { motion } from 'framer-motion';
export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}} className='my-10 text-center text-4xl'>Get in touch</motion.h1>
      <div className='flex justify-between cursor-pointer text-center tracking-tighter'>
        <motion.p initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='my-4'>Venkatadripalem, Kandukur</motion.p>
        <motion.p initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1}}className='my-4'>+91 630162XXXX</motion.p>
        <motion.p initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='my-4'>kumardheeraj97648@gmail.com</motion.p>
      </div>
    </div>
  );
};