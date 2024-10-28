import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className='text border-t-2 border-b-2 border-zinc-300 overflow-hidden gap-1 pr-20 flex whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 9}} className='text-[12vw] leading-none font-semibold uppercase mb-10 pt-10'> WE ARE OOCHI</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 9}} className='text-[12vw] leading-none font-semibold uppercase mb-10 pt-10'> WE ARE OOCHI</motion.h1>
      </div>
    </div>
  )
}

export default Marquee