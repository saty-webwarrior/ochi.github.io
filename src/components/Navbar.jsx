
import React from 'react'

function  Navbar() {
  return (
    <div className='fixed z[999] w-full px-20 py-8 flex justify-between items-center z-40'>
        <div className='logo'><img className='w-72 h-10' src="public\1725892873353.svg" alt="" /></div>
                            <div className='links flex gap-10'>
                                {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index)=>( 
                                    <a key={index} className={`text-lg capitalize font ${index === 4 && "ml-32"}`}>{item}</a> )
                                )}
                            </div>
    </div>
  )
}

export default  Navbar