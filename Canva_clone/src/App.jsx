import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cards from './components/Cards'

function App() {

  return (
  
      <div className="w-full h-screen flex-column align-center justify-center  ">
        <Navbar />
        <Hero />
        <Cards />


        </div>
    
  )
}


export default App
