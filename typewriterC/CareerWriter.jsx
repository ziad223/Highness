'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const CareerWriter = () => {
  return (
          <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['A Few Steps Towards Success...'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Once you join the Highness Investment LLC team, you'll benefit from a collaborative and vibrant environment that fosters growth and aspiration. We are dedicated to equipping our employees with the tools and resources they need for effective performance and to excel in their unique careers.
   </p>
       </div> 
  );
}

export default CareerWriter;
