import React from "react";
import Lightbulb from '../../assets/lightbulb.jpg'
import Camera from '../../assets/aboutcamera.jpg'
import Movies from '../../assets/movies.jpg'
import Headphones from '../../assets/aboutheadphones.jpg'
import Bay from '../../assets/yee.jpg'
import Inspire from '../../assets/inspired.jpg'
import Books from '../../assets/books.jpg'

const About = () => {
  return (
    <div>
      <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[450px] mx-auto my-5 px-3' src={Lightbulb} alt='/' />
      <p className="mx-auto my-5 px-3">Hello! Welcome to LENS. This project came about because recently, I picked up my
      camera and quickly realized that I haven't taken any photos in a long time and I haven't
      been feeling creatively inspired lately.</p>
      </div>
      </div>

        {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'>
        <div className='max-w-[1240px] mx-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Camera} alt='/' />
        </div> 
        <p className="mx-auto my-5 px-3">It used to feel simple and easy to just pick up the camera and go. 
        But with so much going on we sometimes forget to just stop and take a break. We all need some kind of creative outlet.
        Whether it be movies, music, books, or traveling, just a little spark of inspiration can 
        make a difference.</p>

        </div>

        {/* -------------------------  */}

        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-5 px-3' src={Movies} alt='/' />
        <p className="mx-auto my-5 px-3">With movies, you can immerse yourself into that world, appreciate the cinematography, 
        the colors and the color contrast of the movie, and even the story might give you an idea of how you want your photos to 
        look like. The lighting of a movie or the angle of the camera can inspire your next photo session. Each camera film listed
        is paired with a movie that may or may not inspire you for your next photo session.</p>
        </div> 
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'> 
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Headphones} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Music can bring forth emotions and can spark an idea or two on the type of photos 
        you want to capture. Each camera film listed is paired with an album and a song that may or may not fit the vibe of the 
        camera film and hopefully will spark some sort of creative inspiration. </p>
        
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-left' src={Books} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Books can open doors to worlds one could not have imagined. Be it a fantasy book, a thriller, or a rom-com. 
        It can also open one’s eyes on how small we are in this universe and that can spark some sort of creativity. Books help our minds have the 
        space to think about things in a deeper way and can help develop our imagination and understanding.
        Each camera film listed is paired with a book that may or may not fit the vibe of the camera film and hopefully will spark some sort of creative inspiration.</p>
        </div> 

         {/* -------------------------  */} 
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'>  
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Bay} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">I chose to include places in the San Francisco Bay Area and a couple of places in Northern California 
        in general because it’s what I’m familiar with. Being born and raised here was fun and all and all my family and friends are here but lately I think 
        I have fallen out of love with the Bay Area and it’s something I’m working on. So I shared some places that I have found some inspiration in. 
        Each camera film listed is paired with a place that may or may not fit the vibe of the camera film and hopefully will spark some sort of creative inspiration.
        </p>
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-left' src={Inspire} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Thank you for checking this project out. 
        It was a personal one and I had a lot of fun. Hope this inspires you creatively in some way!</p>
        </div> 
    </div>
  )
}

export default About