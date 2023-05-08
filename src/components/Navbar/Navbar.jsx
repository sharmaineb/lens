import React from "react";
import { BiCameraMovie } from 'react-icons/bi'
import { GiFilmStrip } from 'react-icons/gi'
import { ImHeadphones } from 'react-icons/im'
import { NavLink } from "react-router-dom";
import { MdTravelExplore } from 'react-icons/md'

const Navbar = () => {
    return (
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#6AB9D9]'>        
        <div className='w-full text-[#6AB9D9] flex px-1 space-x-4'>
        <GiFilmStrip size={20}/>
        <BiCameraMovie size={20}/>
        <ImHeadphones size={20}/>
        <MdTravelExplore size={20}/>
        <h2 className="font-extrabold">LENS.</h2>
        </div>
        <ul className='md:flex'>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 p-4 text-[##6AB9D9]'>
        <div className='text-sm md:flex-grow'>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/home">Home</NavLink>
        </div>    
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 p-4 text-[#6AB9D9]'>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/list">List</NavLink>
        </div>
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 p-4 text-[#6AB9D9]'>
        <NavLink 
	            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
	            to="/about">About</NavLink>
        </div>
        </div>  
        </ul>
      </div>
    )
}

export default Navbar