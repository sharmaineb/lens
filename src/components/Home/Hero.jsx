import React from "react";
import Typed from "react-typed";
import Photos from '../../assets/photos.jpg'
import Reel from '../../assets/reel.jpg'
import HeroImg from '../../assets/hero.jpg'
import { Link } from "react-router-dom";
import { GiFilmStrip } from 'react-icons/gi'
import Countdown from '../../assets/countdown.gif';

const Hero = () => {
  return (
    <div className="text-[#0E7373]">
       <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
       <img className='w-[1100px] mx-auto my-5 px-3' src={HeroImg} alt='/' />
         <div className="flex justify-center items-center">
        <div className="flex justify-center items-center ">
           <Typed
             className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
             strings={["WELCOME TO LENS."]}
             typeSpeed={130}
             backSpeed={180}
             loop
           />
        </div>
         </div>
      </div>
      {/* ----------------------------------------------------------- */}
      <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-4 px-2' src={Photos} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#eeaf61] font-bold '>CREATIVITY.</p>
          <p>
          How do we find creative inspiration?
          Everyone finds inspiration in different ways. 
          I wanted to share how I found mine. 
          </p>
        </div>
        </div>
        <div class="overflow-hidden text-neutral-700 pt-28">
        <img className='w-[350px] mx-auto' src={Countdown} alt='/' />
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Promising_Young_Woman_011.jpg?bwg=1618571691" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/lalal022.jpg?bwg=1551286196" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Up_015.jpg?bwg=1601639914" />
        </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/The_Last_Black_Man_in_San_Francisco_006.jpg?bwg=1569597711" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/2021/06/Minari-030.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thumb/thematrix009.jpg?bwg=1546895512" />
        </div>
      </div>
      </div>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Shang_Chi_and_the_legend_of_the_ten_rings_007.jpg?bwg=1642586754" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Howl's_Moving_Castle_002.jpg?bwg=1569592973" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Into_the_Spider-Verse_020.jpg?bwg=1569496332" />
        </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Everything_Everywhere064.jpg?bwg=1653471161" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/30%20(503).jpg?bwg=1547222276" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/63%20(283).jpg?bwg=1547216111" />
        </div>
      </div>
      </div>
      </div>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
        <div class="flex w-1/2 flex-wrap">
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://filmgrab.files.wordpress.com/2014/07/0433.jpg" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/The_Apartment023.jpg?bwg=1653471882" />
        </div>
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Dune_2021_059.jpg?bwg=1642501566" />
        </div>
        </div>
        <div class="flex w-1/2 flex-wrap">
        <div class="w-full p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/bladerunner048.jpg?bwg=1551282394" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://film-grab.com/wp-content/uploads/photo-gallery/Nope_15.jpg?bwg=1664197124" />
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            class="block h-full w-full rounded-lg object-cover object-center"
            src="https://filmgrab.files.wordpress.com/2015/04/3520.jpg" />
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>
{/*  --------------------------------------------------------------- */}
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <GiFilmStrip size={20}/>
              <p className='text-center text-3xl font-bold'>Camera Film</p>
              <div className='text-center font-medium'>
              <img className='w-[450px] mx-auto my-5 px-7' src={Reel} alt='/' />
              </div>
              <Link to={`/list`}>
              <button className='bg-[#F2E63D] text-[#003000] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Explore</button>
              </Link>
          </div>
      </div>
    </div>
{/*  --------------------------------------------------------------- */}
    </div>    
  );
};

export default Hero;
