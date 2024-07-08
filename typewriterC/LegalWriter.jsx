'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const LegalWriter = () => {
  return (
  <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Legal Forms Documents'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Highness Investment LLC provides a range of legal forms and documents to facilitate various business activities and ensure compliance with regulatory requirements. These documents are designed to protect the rights and interests of all parties involved. Some of the key legal forms and documents offered by Highness Investment LLC include
    </p>
       </div>
  );
}

export default LegalWriter;
