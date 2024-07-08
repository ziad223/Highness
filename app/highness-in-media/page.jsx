import Image from 'next/image';
import React from 'react'
import media from '../../assests/media-img.png';
import MediaHigness from '../../typewriterC/MediaHigness';
const HighnessMedia = () => {
    return (
        <div className='highness-media'>
        <div className="highness-media-page-hero">
     <MediaHigness/>
            </div>
            <div className="highness-content container flex justify-center gap-10 rounded-lg">
              <div className="media-left text-gray-300 ml-10 mt-16">
                <h2 className='text-primary text-3xl font-bold'>Highness Launches Global Trading Race</h2>
                <p className='my-5 text-xl w-[70%] leading-[1.8]'>
                Highness has announced the launch of a Global Trading Competition with a prize pool of $500,000 for 33 winners in 3 rounds.*
                </p>
               <p className=' text-xl w-[80%] leading-[1.8]' >
               *Terms and conditions apply
                <span className='block '>All trading involves risk. It is possible to lose all your capital.</span>
               </p>
              </div>
              <div className="media-right mt-10">
                <Image src ={media} alt='media-img w-[100%] h-[400px]' className='media-img'/>
              </div>
            </div>

        </div>
    )
}

export default HighnessMedia
