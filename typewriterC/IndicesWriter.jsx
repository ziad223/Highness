'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const IndicesWriter = () => {
  return (
  <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Higness Indices'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Are measures that reflect the performance of a group of stocks in a specific market. They are used to assess the overall performance of the market and help investors understand market trends. Famous indices include the Dow Jones, NASDAQ, and FTSE.

       </p>
       </div>
  );
}

export default IndicesWriter;
