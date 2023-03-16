import React from "react";
import { BiCameraMovie } from 'react-icons/bi'
import { GiFilmStrip } from 'react-icons/gi'
import { ImHeadphones } from 'react-icons/im'

const Navbar = () => {
    return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#6a0d83]'>
        <div className='w-full text-[#6a0d83] flex px-1 space-x-4'>
        <GiFilmStrip size={20}/>
        <BiCameraMovie size={20}/>
        <ImHeadphones size={20}/>
        </div>
        <ul className='hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>About</li>
          <li className='p-4'>List</li>
          <li className='p-4'>Contact</li>
        </ul>
        </div>
    )
}

export default Navbar