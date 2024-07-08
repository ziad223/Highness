'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';

const CryptocurrenciesWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
      <Typewriter
     className = 'Typewriter'
     options={{
     strings: ['Highness Cryptocurrencies'],
     autoStart: true,
     loop: true,
    
     }}
    />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Popular examples include Bitcoin and Ethereum, which are digital currencies that use encryption for securing transactions. They are characterized by being decentralized and offer new opportunities in the world of digital investment, but come with high levels of instability and risk.
       </p>
       </div>
  );
}

export default CryptocurrenciesWriter;
