import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleState } from '../Store';
import { change_to } from '../Store';

const Navbar = () => {
    let divs=["design spotlight  ","Business  ","Education  ","Plans and pricing  "]
    const dispatch = useDispatch();

    const handleMouseEnter = (index) => {
        if (index === 0) {
            dispatch(toggleState(true));
        }
    };

    const handleMouseLeave = (index) => {
        if (index === 0) {
            dispatch(toggleState(false));
        }
    };
    const theme_enter = () => {

            dispatch(change_to(true));
        
    };

    const theme_leave = () => {

            dispatch(change_to(false));
        
    };



  return (
    <div className='p-4 flex justify-between h-[10vh] '>
        <div className='flex gap-5 justify-start n-left'>
            <div className="w-[8vw] h-[5vh]    bg-[url('https://domainnamewire.com/wp-content/Canva-logo.png')] bg-cover bg-no-repeat" ></div>

            
            <div className="w-8 "></div> {/* This div creates the gap between the logo and the elements */}
            {divs.map((div, index) => (
                <div 
                    key={index} 
                    className={`cursor-pointer rounded-full hover:bg-gray-200 flex items-center justify-between h-5vh w-7vw p-2`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    
                    <span className="mr-2">{div}</span><FaAngleDown />
                </div>
            ))}
            
            <div 
             onMouseEnter={()=>theme_enter()}
             onMouseLeave={()=>theme_leave()}
            className="cursor-pointer hover:bg-gray-300 clea flex items-center justify-between h-5vh w-7vw p-2 rounded-full">
                <span className="mr-2 ">Theme</span><FaAngleDown />

            </div>
            

        </div>



        <div className='n-right flex p-4 gap-4  font-xl text-2xl cursor-pointer'>
        <IoHomeOutline />
        <BsQuestionCircle />
        <FaUserCircle className='font-xl text-2xl'/>




        </div>
    </div>
  )
}

export default Navbar