'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const CookiesWriter = () => {
  return (
      <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['COOKIES POLICY'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        By continuing to use our website, you acknowledge and accept our use of cookies as outlined in this Cookies Policy. We may update this policy from time to time, so we encourage you to review it periodically.
</p>
       </div>
  );
}

export default CookiesWriter;
