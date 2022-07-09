import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Image from "next/image";
const StayTuned = () => {
  const [usps, setUsps] = useState([
    "A++ audio experience",
    "Smart Luxury",
    "Made to Measure",
  ]);

  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 3,
      },
    },
  };

  const stayTunedVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transition: {
      delay: 8,
    },
  };

  const uspBoxVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.8,
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  const uspVariant = {
    hidden: {
      opacity: 0.4,
    },
    visible: {
      opacity: [0.6, 1, 0],
    },
  };

  const quotesVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1],
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
  };

  const sloganVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1, 0],
      transition: {
        ease: "easeIn",
        duration: 1,
      },
    },
  };

  return (
    <div className='absolute top-0 w-full  h-full left-0  z-40'>
      <motion.div
        variants={contentVariant}
        animate='visible'
        initial='hidden'
        className='flex flex-col top-0 left-0 absolute pl-10 justify-center items-start gap-8 h-screen w-screen md:w-1/2'
      >
        <motion.div
          variants={uspBoxVariant}
          className='flex flex-col md:pl-10 justify-center items-start gap-8 h-screen md:w-1/2'
        >
          {usps.map((usp) => {
            return (
              <motion.span
                key={usp}
                variants={uspVariant}
                className='text-onyx uppercase text-6xl md:text-8xl '
              >
                {usp}
              </motion.span>
            );
          })}
        </motion.div>

        <motion.div
          variants={quotesVariant}
          className='flex flex-col h-full w-full justify-center items-center gap-8 top-0 md:pl-10 left-0 absolute'
        >
          <motion.h1
            variants={sloganVariant}
            className='text-2xl text-center absolute'
          >
            The future of in-ear technology.
          </motion.h1>

          <motion.div
            variants={sloganVariant}
            className='absolute flex flex-col items-center jusity-center gap-8'
          >
            <div className='relative w-[160px] '>
              <Image
                src='/images/BREGGZ.png'
                alt='BREGGZ'
                width='600'
                height='797.47'
                layout='responsive'
                objectFit='cover'
              />
            </div>
            <span className='text-2xl text-center'>For your ears only.</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stayTunedVariant}
          className='flex flex-col h-full justify-center items-center gap-8 top-0 left-0 absolute'
        >
          <div className='flex flex-col justify-start items-center relative gap-4'>
            <span className='leading-[80%] text-[120px] text-center uppercase text-[#f34606]'>
              stay tuned
            </span>
            <p className=' opacity-80 text-sm italic text-left text-[#f34606]'>
              (pun intended)
            </p>
          </div>
          <div className='flex justify-start items-start  gap-[25px]'>
            <div className='flex flex-col justify-start items-start   '>
              <div className='flex justify-start items-start  relative gap-2'>
                <div className='flex justify-start items-start relative gap-2 border-b  border-[#f34606]'>
                  <a className='text-lg text-left capitalize text-[#f34606]'>
                    Follow us
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StayTuned;
