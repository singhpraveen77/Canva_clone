import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'
import Hovers from './components/Hovers'

function App() {

  return (
  
      <div className="w-full h-screen flex-column align-center justify-center  ">
        <Navbar />
        <Hero />
        <Cards />
        <Hovers />


        </div>
    
  )
}


export default App
