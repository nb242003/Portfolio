"use client";

import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import finance from "../assets/finance.png";

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4" id="about">        
      {/* Responsive Heading */}
      <h1 className='text-white text-4xl md:text-6xl text-center font-semibold p-4 mb-4'>
        About <span className='text-orange-400'>Me</span>
      </h1> 
      <div className="grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
        
        {/* Education Card */}
        <div className="w-full md:col-span-5 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 items-center overflow-hidden">
            <Image src={book} alt="book" className="w-20 h-20 md:w-auto md:h-[130px]" />
            <div className='flex flex-col ml-4 text-truncate'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Education</h2>
              <p className='text-base md:text-lg text-white/70 mt-2'>
                Currently studying Information Technology with a focus on technologies like React and Backend development.
              </p>
            </div>
          </div>
        </div>

        {/* Problem Solving Card */}
        <div className="w-full md:col-span-3 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 items-center overflow-hidden">
            <Image src={finance} alt="finance" className="w-20 h-20 md:w-auto md:h-[130px]" />
            <div className='flex flex-col ml-4 text-truncate'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Problem-Solving</h2>
              <p className='text-base md:text-lg text-white/70 mt-2'>
                I approach challenges with a logical/systematic mindset.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div className="w-full md:col-span-3 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 items-center overflow-hidden">
            <Image src={card} alt="card" className="w-20 h-20 md:w-auto md:h-[130px]" />
            <div className='flex flex-col ml-4 text-truncate'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Experience</h2>
              <p className='text-base md:text-lg text-white/70 mt-2'>
                Front-end Developer Intern at Codsoft, developed user interfaces using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="w-full md:col-span-5 bg-white/10 backdrop-blur-lg border-white/20 rounded-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row p-6 items-center overflow-hidden">
            <Image src={pc} alt="pc" className="w-20 h-20 md:w-auto md:h-[130px]" />
            <div className='flex flex-col ml-4 text-truncate'>
              <h2 className='text-xl md:text-2xl font-bold text-white/80'>Technical Skills</h2>
              <p className='text-base md:text-lg text-white/70 mt-2'>
                As a Fullstack Web Developer, I specialize in JavaScript frameworks.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
