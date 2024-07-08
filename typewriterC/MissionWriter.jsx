import React from 'react';
import Typewriter from 'typewriter-effect';

const MissionWriter = () => {
  return (
   <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Highness Mission'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Our primary aim is to provide the highest quality technology solutions and global-standard services while maintaining the highest level of integrity in all we do. We are constantly devoted to assisting, inspiring, and broadening our workers' responsibilities to increase performance and growth.
      </p>
       </div>
  );
}

export default MissionWriter;
