import { motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function LandingPage() { 
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 text-white pt-1">
        <div className="textstructure mt-52 px-20">
            {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index)=>{
                return <div className="masker">
                    <div className="w-fit flex">
                        {index === 1 && (
                <motion.div
                initial={{width: 0}}
                animate={{width: "9vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                className='w-[9vw] h-[6vw] relative top-[0.5vw] bg-red-100 rounded-[10px]'><img className='w-full rounded-[10px] h-full bg-cover ' src="public\cute-cartoon-hacker-with-laptop-vector-illustration-dark-background_1142-98376.jpg" alt="" /></motion.div>)}
                     <h1 className='uppercase text-[7.5vw] leading-[6vw] h-full tracking-tighter font-semibold'>
                {item}
            </h1>
        </div>
        </div>
            })}
        
        </div>
        <div className="border-t-[1px] border-x-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch of IPO"].map((item, index)=><p className="text-md font-light tracking-tighter leading-none">{item}</p>)}
            <div className="start flex items-center gap-5">
                <div className="px-5 uppercase py-2 border-[1px] border-zinc-500 font-light text-sm rounded-full">Start the project</div>
                <div className="w-10 flex items-center justify-center h-10 rounded-full border-[2px] border-zinc-500">
                    <MdOutlineArrowOutward />
                </div>
            </div>
        </div>
        </div>
  )
}

export default LandingPage