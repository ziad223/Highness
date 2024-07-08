'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const MediaHigness = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Media'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        As a leading entity in the trading industry, Highness Investment LLC is consistently at the pulse of financial innovation and market shifts. Our Media Page is the central repository for our communications, providing writers, analysts, and the curious with a comprehensive view of our latest news, insights, and company milestones.</p>
       </div>
  );
}

export default MediaHigness;
