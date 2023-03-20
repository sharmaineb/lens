import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube
} from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi'
import { GiFilmStrip } from 'react-icons/gi'
import { ImHeadphones } from 'react-icons/im'

import { MdTravelExplore } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#F2B6DD]'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#f1f1f1]'>LENS.</h1>
        <p className='py-4 text-[#f1f1f1]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[90%] my-5 text-[#f1f1f1]'>
            <FaInstagram size={30} />
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaYoutube size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 text-[#f1f1f1]'>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Film Resources</h6>
        <ul>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Movie Resources</h6>
        <ul>
            <li className='py-2 text-sm'>Letterboxd</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum Lorem Ipsum</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
            <li className='py-2 text-sm'>Lorem Ipsum</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-[#f1f1f1]-400'>Policies</h6>
        <ul>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Privacy</li>
            <li className='py-2 text-sm'>Guidelines</li>
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