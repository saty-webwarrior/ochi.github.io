import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight'>Featured Projects:-</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer w-1/2 relative h-[75vh]'>
            <h1 className='absolute left-full flex overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl tracking-tighter leading-none'>
              {"SEM-I".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.06 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer w-1/2 h-[75vh] rounded-xl relative'>
            <h1 className='absolute right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl tracking-tighter leading-none'>
              {"SEM-II".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: "easeInOut", delay: index * 0.06 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;