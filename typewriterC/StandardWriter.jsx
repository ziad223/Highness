'use client'
import React from 'react';
import  Typewriter  from 'typewriter-effect';

const StandardWriter = () => {
  return (
         <div className='text-center pt-[50px]'>
           <Typewriter
          className = 'Typewriter'
          options={{
          strings: ['Standard Account'],
          autoStart: true,
          loop: true,
    
          }}
         />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
A standard trading account is the basic level of account offered by Highness Investment LLC. It allows traders to trade using real money, but it typically requires a smaller initial deposit than higher level accounts. Standard account enables traders to access a range of trading tools, including charts, technical analysis, and market news. Standard accounts usually have lower trading costs compared to higher level accounts. It is convenient for beginners or traders who are looking for the lowest risk level.
    </p>
       </div>
  );
}

export default StandardWriter;
