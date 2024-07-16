'use client'
import React from 'react';
import  Typewriter  from 'typewriter-effect';

const WhiteLabelWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['White Label'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Highness Investment LLC, offers a wide range of services under the White Label model, allowing other companies to use these services under their own brand. These services include advanced trading platforms with analytical tools and automated trading options, customizable mobile trading applications, comprehensive market data services, risk management tools, customer technical support, backend service solutions for managing trades and accounts, educational resources and tools, API integration to merge different tools and platforms, liquidity solutions to ensure sufficient liquidity stock, and customization and branding capabilities to reflect the partner's brand.
</p>
       </div> 
  );
}

export default WhiteLabelWriter;
