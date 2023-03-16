import React from 'react';
import Countdown from '../src/assets/countdown.gif'

const Description = () => {
  return (
    <div className='w-full bg-[#fff] py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-5 px-3' src={Countdown} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#eeaf61] font-bold '>LOREM IPSUM</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Lorem Ipsum Lorem Ipsum Lorem Ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;