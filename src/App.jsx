import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='w-full text-white bg-zinc-900 min-h-screen'>
      <Navbar />
      <LandingPage />
      <Marquee /> 
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  )
}

export default App