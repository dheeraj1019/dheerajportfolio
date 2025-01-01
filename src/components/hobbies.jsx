import React from 'react';
import { BiSolidCricketBall } from "react-icons/bi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { SiCodingninjas } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { IoMdMusicalNote } from "react-icons/io";
import {FaBookOpen} from "react-icons/fa"
import { motion } from 'framer-motion';

export const Hobbies = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{y:0,opacity:1}}
      initial={{y:-100,opacity:0}}
      transition={{duration:1}} className='my-20 text-center text-4xl'>Hobbies and Interests</motion.h1>
      
      {/* Cricket Hobby */}
      <div className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Cricket</p>
        </motion.div>
        <motion.div initial={{x:0,opacity:0}}
        whileInView={{x:0,opacity:1}} transition={{duration:1}} >
        <BiSolidCricketBall className='mr-3 text-purple-500 text-xl' /></motion.div>
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Enthusiastic about playing cricket, which enhances my teamwork and strategic thinking skills.</span>
          </h6>
        </motion.div>
      </div>

      {/* Watching Movies Hobby */}
      <div  className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}}  className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Watching Movies</p>
        </motion.div>
        <MdOutlineLocalMovies className='mr-3 text-purple-500 text-xl' />
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Enjoy watching a variety of movies, especially those with interesting plots and character development, which helps me to think creatively.</span>
          </h6>
        </motion.div>
      </div>

      {/* Programming Hobby */}
      <div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Programming</p>
        </motion.div>
        <SiCodingninjas className='mr-3 text-purple-500 text-xl' />
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Passionate about exploring new technologies and often participate in online coding challenges.</span>
          </h6>
        </motion.div>
      </div>

      {/* Photography Hobby */}
      <div  className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Photography</p>
        </motion.div>
        <HiOutlinePhotograph className='mr-3 text-purple-500 text-xl' />
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Enjoy capturing creative moments through photography, with an interest in photo-editing techniques.</span>
          </h6>
        </motion.div>
      </div>

      {/* Music Hobby */}
      <div  className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Music</p>
        </motion.div>
        <IoMdMusicalNote className='mr-3 text-purple-500 text-xl' />
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Listening to music helps me relax and inspires creativity. I also enjoy exploring different genres to broaden my perspective.</span>
          </h6>
        </motion.div>
      </div>
      <div  className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full lg:w-1/2 flex items-center'>
          <p className='mb-2 text-neutral-400'>Reading Books</p>
        </motion.div>
        <FaBookOpen className='mr-3 text-purple-500 text-xl' />
        <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className='w-full max-w-xl lg:w-3/4'>
          <h6 className='mb-2 font-semibold'>
            - <span className='text text-purple-100'>Reading books enhances my knowledge and analytical skills. I enjoy exploring genres like self-development, technology, and fiction.</span>
          </h6>
        </motion.div>
      </div>
    </div>
  );
};
