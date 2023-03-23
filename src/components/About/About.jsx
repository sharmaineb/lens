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
      <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
      </div>
      </div>

        {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'>
        <div className='max-w-[1240px] mx-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Camera} alt='/' />
        </div> 
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>

        </div>

        {/* -------------------------  */}

        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-5 px-3' src={Movies} alt='/' />
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
        </div> 
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'> 
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Headphones} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
        
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-left' src={Books} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
        </div> 

         {/* -------------------------  */} 
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-right'>  
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-right' src={Bay} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
        </div>

         {/* -------------------------  */}
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto float-left'>
        <div className='w-full bg-[#fff] py-15 px-1 mx-auto my-auto'>
        <img className='w-[450px] mx-auto my-5 px-3 float-left' src={Inspire} alt='/' />
        </div>
        <p className="mx-auto my-5 px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra pellentesque orci, eget sagittis risus bibendum sit amet. 
         Morbi commodo blandit dictum. Donec volutpat ex a metus cursus sollicitudin. 
         Quisque a facilisis nulla, sed hendrerit massa. Nam dapibus, ligula nec blandit 
         volutpat, arcu lectus vestibulum augue, semper congue arcu quam nec lacus. 
         Maecenas eu libero elit. Etiam at vestibulum velit, et euismod orci. 
         Nam id massa ac leo blandit ultrices sed at leo. Fusce bibendum lobortis eleifend.</p>
        </div> 
    </div>
  )
}

export default About