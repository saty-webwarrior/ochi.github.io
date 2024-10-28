 import  eact from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
        <h1 className='text-[3.5vw] text-black leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#daf08b]">
            <div className="w-1/2 ">
                <h1 className='text-7xl text-black'>Our approach:</h1>
                <button className='px-10 py-6 bg-zinc-900 flex gap-10 items-center mt-10 uppercase rounded-full text-white'>Read More
                    <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#daf08b]"><img className='object-cover' src="public/anime-style-earth.jpg" alt="" /></div>
        </div>
    </div>
  )
}

export default About