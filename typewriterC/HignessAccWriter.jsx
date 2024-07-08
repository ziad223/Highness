'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const HignessAccWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Account'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Highness account is an intermediate level account offered by Highness Investment LLC. This type of account typically requires a higher initial deposit than the standard account and it provides additional trading tools and features. These may include personalized customer support, access to educational resources, advanced charting capabilities, and faster trade execution. Highness account usually offers lower trading costs than the premium account, which makes it suitable for more experienced traders who are looking to improve their trading skills.
       </p>
       </div>
  );
}

export default HignessAccWriter;
