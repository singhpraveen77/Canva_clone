import React from 'react'
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-[65%] md:bg-[#D1C4E9] rounded-lg flex flex-col px-[10vh]">
      <div className='flex justify-start gap-4 w-full mt-3'>
        <a href="#" className='hover:underline'>Home</a>
        <FaChevronRight className='mt-1'/>

        <h1 className='hover:text-sky-600 cursor-pointer'>Create Landing Pages</h1>
      </div>

      <div className='flex h-100 gap-10 ' >
          <div className='flex w-[50%] flex-col h-[55vh] '>
            <h1 className='font-semibold md:text-7xl sm:text-3xl color-[#OD1216] mt-[15vh]'>Free Online Landing Page Builder</h1>
            <div className='  w-[30vh] h-[7vh] rounded-lg bg-[hsl(264,62%,46%)] hover:bg-[#40167f] text-m font-medium text-white flex justify-center items-center mt-auto mx-auto'>
            Create a landing Page
            </div>
          </div>
          <div className='border-black  w-[40%] h-[80%] rounded-lg mt-7  bg-[url("https://static-cse.canva.com/_next/static/assets/desktop_w1320xh880_9612c7d0a43bb4847380e27ed868b39a8bb5159789977ade55f6401f3c825876.png")] bg-cover bg-center justify-center pt-[8vh] flex p-4'>
          <img src="https://category-public.canva.com/thumbnails/Website.jpeg " alt="" className='h-[20vh] rounded-lg hover:shadow-black ' />
          </div>

      </div>
      
    </div>
  )
}

export default Hero