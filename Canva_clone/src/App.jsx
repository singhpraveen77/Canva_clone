import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Hovers from './components/Hovers'
import { useSelector } from 'react-redux'
import { set_theme_red } from './Store'

function App() {
  const set_theme_State=useSelector((state)=>state.set_theme.value);

  return (
  
      <div className={`w-full h-screen flex-column align-center justify-center ${set_theme_State ? 'bg-black text-white' : 'bg-white text-black'}`}  >
        <Navbar />
        <Hero />
        <Cards />
        <Hovers />


        </div>
    
  )
}


export default App
