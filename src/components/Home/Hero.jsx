import React from "react";
import Typed from "react-typed";
// import Music from '../../assets/music.jpg';
import Camera from '../../assets/camera.jpg';
import Eeaao from '../../assets/eeaao.jpg';
import SFGB from '../../assets/sf.jpg';
import Reel from '../../assets/reel.jpg'
import { Link } from "react-router-dom";
import { GiFilmStrip } from 'react-icons/gi'
import { BiCameraMovie } from 'react-icons/bi'
import { MdTravelExplore } from 'react-icons/md'

const Hero = () => {
  return (
    <div className="text-[#0E7373]">
       <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
         <div className="flex justify-center items-center">
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>  
        <img className='w-[400px] mx-auto my-5 px-3' src={Reel} alt='/' />
        </div>
        <div className="flex justify-center items-center ">
           {/* <p className="md:text-5xl sm:text-4xl text-xl font-bold py-3">Lorem Ipsum:</p> */}
           <Typed
             className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
             strings={["Camera Film.", "Music.", "Movies."]}
             typeSpeed={130}
             backSpeed={150}
             loop
           />
        </div>
         </div>
         <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Link to={`/about`}>
       <button className="bg-[#eeaf61] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Here's a Button</button>
      </Link>
      </div>
{/*  --------------------------------------------------------------- */}
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center'>
          <BiCameraMovie size={20}/>
              <p className='text-center text-3xl font-bold'>Lorem Ipsum</p>
              <div className='text-center font-medium'>
              <img className='w-[450px] mx-auto my-5 px-7' src={Eeaao} alt='/' />
              </div>
              <Link to={`/movies`}>
              <button className='bg-[#F2E63D] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Explore</button>
              </Link>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <GiFilmStrip size={20}/>
              <p className='text-center text-3xl font-bold'>Lorem Ipsum</p>
              <div className='text-center font-medium'>
              <img className='w-[450px] mx-auto my-5 px-7' src={Camera} alt='/' />
              </div>
              <Link to={`/list`}>
              <button className='bg-[#F2E63D] text-[#003000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Explore</button>
              </Link>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <MdTravelExplore size={20}/>
              <p className='text-center text-3xl font-bold'>Lorem Ipsum</p>
              <div className='text-center font-medium'>
              <img className='w-[450px] mx-auto my-5 px-7' src={SFGB} alt='/' />
              </div>
              <Link to={`/places`}>
              <button className='bg-[#F2E63D] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Explore</button>
              </Link>
          </div>
      </div>
    </div>
{/*  --------------------------------------------------------------- */}
    </div>    
  );
};

export default Hero;
