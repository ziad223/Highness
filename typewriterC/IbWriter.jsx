'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const IbWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['IB Commission'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Our IB Commission program offers a seamless way to receive affiliate commissions every day without any limitations on maximum payouts. The more your clients invest in financial assets, the higher the partner commission you can earn.
       </p>
       </div>
  );
}

export default IbWriter;
