import React from 'react';
import  Typewriter  from 'typewriter-effect';

const TermsWriter = () => {
  return (
    <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Terms and Agreement'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        By using our website, services, or products, you agree to the following terms and conditions. Please read this page carefully.
        </p>
       </div> 
  );
}

export default TermsWriter;
