'use client';
import { motion } from "framer-motion";
import React from 'react';
import Typewriter from 'typewriter-effect';
import { AuroraBackground } from '@/app/components/ui/aurora-background';

const About = () => {
  return (
    <AuroraBackground>
      <section className="w-screen h-screen text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D/400x400"
              style={{ width: '400px', height: '400px' }} // Manually set the size
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-100 to-blue-500">
              Uzma Khan
            </h1>
            <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-100 to-blue-500 ">
              <Typewriter
                options={{
                  strings: ['Data Analysis', 'Web Developer', 'Web Designer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default About;