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
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#F2B6DD] mt-10'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#f1f1f1]'>LENS.</h1>
        <p className='py-4 text-[#f1f1f1]'>Hey. Hope you have an awesome day!</p>
        <div className='flex justify-between md:w-[90%] my-5 text-[#f1f1f1]'>
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaYoutube size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 text-[#f1f1f1]'>
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
        <h6 className='font-medium text-[#f1f1f1]-400'>Movie Resources</h6>
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
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Resources</h6>
        <ul>
            <li className='py-2 text-sm'>
            <a href='https://www.barnesandnoble.com/'>Books</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://tailwindcss.com/'>Tailwind</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://react-icons.github.io/react-icons/'>React Icons</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://www.npmjs.com/package/react-typed'>React Typed</a>
            </li>
            <li className='py-2 text-sm'>
            <a href='https://stock.adobe.com/'>Adobe Stock Photos</a>
            </li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>LENS.</h6>
        <ul>
        <Link to={`/about`}>
            <li className='py-2 text-sm'>About</li>
        </Link>
            <li className='py-2 text-sm'>
              <a href='https://github.com/sharmaineb'>Github</a>
            </li>
        </ul>
    </div>
      </div>
      <div className='w-full text-[#f1f1f1] flex px-1 space-x-4'>
        <GiFilmStrip size={20}/>
        <BiCameraMovie size={20}/>
        <ImHeadphones size={20}/>
        <MdTravelExplore size={20}/>
        <h2 className="font-extrabold">LENS.</h2>
        </div>
        <button className='bg-[#F2E63D] w-[100px] rounded-md font-medium my-6 mx-auto px-4 py-2 flex flex-row justify-center text-[#f1f1f1]'>Sign Up</button>
    </div>
    
  );
};

export default Footer;