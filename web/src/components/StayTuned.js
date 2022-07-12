import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useAnimationIntro, useAnimationUpdate} from '../../src/lib/AnimationProvider';

import { useState, useEffect } from "react";
import Image from "next/image";
import SubscribePopup from "./SubscribePopup";
import { useSubscribe, useSubscribeUpdate } from "../../src/lib/SubscribeProvider";
import { contentVariant, stayTunedVariant, uspBoxVariant,uspVariant, quotesVariant, sloganVariant} from '../lib/animate';
const StayTuned = () => {
  const subscribe = useSubscribe();
  const update = useSubscribeUpdate();

  const playing = useAnimationIntro();
  const updatePlaying = useAnimationUpdate();

  const [usps, setUsps] = useState([
    "A++ audio experience",
    "Smart Luxury",
    "Made to Measure",
  ]);
  

  
  const controls = useAnimation();
  
  useEffect(() => {
    playing &&  controls.set("hidden");
    playing && controls.start("visible");
    
  }, [controls, playing]);


  return ( <div className='absolute top-0 w-full  h-full left-0 z-10'>
   
      <motion.div
      id='wrapper'
        variants={contentVariant}
        animate={controls}
        initial='hidden'
        className='flex flex-col top-0 left-0 absolute md:pl-10 justify-center items-start gap-8 h-screen w-screen md:w-1/2'
        onAnimationComplete={updatePlaying}
      >

        <motion.div
        id='intro'
          variants={uspBoxVariant}
          className='flex flex-col  pl-2 md:pl-10 md:justify-center items-start gap-2 md:gap-8 h-screen md:w-1/2'
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
          className='flex flex-col h-full w-full justify-center items-center gap-8 top-0  left-0  md:px-20  fixed'
        >
          <motion.h1
            variants={sloganVariant}
            className='text-2xl text-center absolute m-auto' 
          >
            The future of in-ear technology.
          </motion.h1>

          <motion.div
          id='slogans'
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
        id='staytuned'
       
        variants={stayTunedVariant}
        className='flex flex-col fixed md:w-1/2 justify-center md:px-[5%] items-center gap-8 '
        >
         
            <span className='leading-[80%] text-8xl md:text-[120px] text-center uppercase text-[#f34606]'>
              stay tuned 
            </span>
            <p className='opacity-80 text-sm italic text-[#f34606]'>
              (pun intended)
            </p>
         
          <div className='flex justify-start items-start  gap-[25px]'>
            <div className='flex flex-col justify-start items-start   '>
              <div className='flex justify-start items-start  relative gap-2'>
                <button onClick={update} className='flex justify-start items-start relative gap-2 border-b  border-[#f34606]'>
                  <a className='text-lg text-left capitalize text-[#f34606]'>
                   Stay in the loop
                  </a>
                </button>
              
              </div>
           
            </div>
          </div>
             <div className="w-full  mt-24 flex items-center justify-center">
        
     
        <button className="flex justify-center items-center relative gap-2.5 p-2 rounded-[5px]"  onClick={updatePlaying}>
  <p className="flex-grow-0 flex-shrink-0 opacity-90 text-sm text-left uppercase text-[#f34606]">
    restart
  </p>
  <svg
    width={15}
    height={16}
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0"
    preserveAspectRatio="none"
  >
    <path
      d="M14.1074 5.27747C14.4905 6.18308 14.6849 7.1446 14.6849 8.13533C14.6849 9.12605 14.4905 10.0876 14.1074 10.9932C13.7376 11.8679 13.2084 12.6525 12.534 13.3269C11.8605 14.0004 11.0751 14.5305 10.2003 14.8994C9.29472 15.2825 8.3332 15.477 7.34247 15.477C6.35174 15.477 5.39022 15.2825 4.48462 14.8994C3.60989 14.5296 2.82533 14.0005 2.1509 13.3269C1.47734 12.6533 0.947332 11.8679 0.577574 10.9932C0.194462 10.0876 0 9.12605 0 8.13533H1.46063C1.46063 11.378 4.09905 14.0162 7.34151 14.0162C10.5842 14.0162 13.2224 11.3778 13.2224 8.13533C13.224 4.89265 10.5857 2.25445 7.343 2.25445C5.78053 2.25445 4.30396 2.87209 3.21317 3.94797H5.70201V5.4086H0.815989V0.523438H2.27662V2.82211C3.62876 1.53256 5.4349 0.794736 7.34298 0.794736C8.33371 0.794736 9.29523 0.989211 10.2008 1.37231C11.0756 1.74207 11.8601 2.27123 12.5345 2.94564C13.2081 3.61836 13.7373 4.40294 14.107 5.27764L14.1074 5.27747Z"
      fill="#F34606"
    />
  </svg>
</button>
        </div>
        </motion.div>
      


      </motion.div>

      {subscribe && <SubscribePopup/>}
    
    </div>
  );
};

export default StayTuned;
