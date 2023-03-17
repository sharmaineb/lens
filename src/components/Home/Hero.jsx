import React from "react";
import Typed from "react-typed";
import Countdown from "../../assets/countdown.gif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="text-[#0E7373]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#eeaf61]">
          LENS.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Lorem Ipsum:
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["Camera Film", "Music", "Movies"]}
            typeSpeed={130}
            backSpeed={150}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Link to={`/list`}>
        <button className="bg-[#eeaf61] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Here's a Button</button>
        </Link>
        <div className="w-full bg-[#fff] py-16 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img
              className="w-[400px] mx-auto my-5 px-3"
              src={Countdown}
              alt="/"
            />
            <div className="flex flex-col justify-center">
              <p className="text-[#eeaf61] font-bold ">LOREM IPSUM</p>
              <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum molestiae delectus culpa hic assumenda, voluptate
                reprehenderit dolore autem cum ullam sed odit perspiciatis.
                Doloribus quos velit, eveniet ex deserunt fuga?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
