import React from 'react';
import {
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutube
} from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi'
import { GiFilmStrip } from 'react-icons/gi'
import { ImHeadphones } from 'react-icons/im'
import { MdTravelExplore } from 'react-icons/md'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
  <div class="mx-auto py-8 px-4 sm:py-16 grid grid-cols-1 gap-8 text-gray-300 bg-[#F2B6DD] mt-10" aria-label='footer'>
  <div>
    <h1 className='w-full text-3xl font-bold text-[#f1f1f1]' aria-label='name of site - lens'>LENS.</h1>
    <p className='py-4 text-[#f1f1f1]' aria-label='thank you message'>Hey. Hope you have an awesome day!</p>
    <div className='flex justify-between my-5 text-[#f1f1f1]'>
        <FaGithubSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaYoutube size={30} />
    </div>
  </div>
  <div className='col-span-1 flex justify-between mt-6 text-[#f1f1f1]' aria-label='film resources'>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Film Resources</h6>
        <ul>
            <li className='py-2 text-sm'>
            <a href='https://thedarkroom.com/'>The Dark Room</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://www.bhphotovideo.com/c/browse/Film/ci/9954/N/4093113318'>B&H Photo</a>  
            </li>
            <li className='py-2 text-sm'>
            <a href='https://www.shopmoment.com/film-shop/film'>Moment</a>
            </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400' aria-label='movie resources'>Movie Resources</h6>
        <ul>
            <li className='py-2 text-sm'>
            <a href='https://letterboxd.com/'>Letterboxd</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://shotdeck.com/'>Shotdeck</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://film-grab.com/'>Film Grab</a>
            </li>
        </ul>
    </div>
    <div class="p-4 md:flex md:justify-between md:items-center md:space-x-4" aria-label='coding resources'>
  <div class="mb-4 md:mb-0">
    <h6 class="font-medium text-gray-400">Resources</h6>
    <ul class="mt-2">
      <li class="text-sm"><a href="https://www.barnesandnoble.com/">Books</a></li>
      <li class="text-sm"><a href="https://tailwindcss.com/">Tailwind</a></li>
      <li class="text-sm"><a href="https://react-icons.github.io/react-icons/">React Icons</a></li>
      <li class="text-sm"><a href="https://www.npmjs.com/package/react-typed">React Typed</a></li>
      <li class="text-sm"><a href="https://stock.adobe.com/">Adobe Stock Photos</a></li>
    </ul>
  </div>
  <div class="mb-4 md:mb-0">
    <h6 class="font-medium text-gray-400" aria-label='name of site - lens'>LENS.</h6>
    <ul class="mt-2">
    <Link>
      <li class="text-sm"><a href="/about" aria-label='about'>About</a></li>
    </Link>
      <li class="text-sm" aria-label='github'><a href="https://github.com/sharmaineb">Github</a></li>
    </ul>
  </div>
  <div class="flex items-center space-x-4" aria-label='icons'>
    <GiFilmStrip class="w-5 h-5 md:w-6 md:h-6" />
    <BiCameraMovie class="w-5 h-5 md:w-6 md:h-6" />
    <ImHeadphones class="w-5 h-5 md:w-6 md:h-6" />
    <MdTravelExplore class="w-5 h-5 md:w-6 md:h-6" />
    <h2 class="font-extrabold text-lg md:text-xl">LENS.</h2>
  </div>
  <button class="bg-yellow-400 text-white rounded-md font-medium py-2 px-4 mt-4 md:mt-0" aria-label='sign up button'>Sign Up</button>
</div>
</div> 
</div>   
  
  );
};

export default Footer;