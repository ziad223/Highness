'use client'
import Image from 'next/image';
import React from 'react'
import mission1 from '../../assests/mission-icon-1.png';
import mission2 from '../../assests/mission-icon-2.png';
import mission3 from '../../assests/mission-icon-3.png';
import mission4 from '../../assests/mission-icon-4.png';
import mission5 from '../../assests/mission-icon-5.png';
import MissionWriter from '../../typewriterC/MissionWriter';

  const page = () => {
  return (
    <div className='mision'>
      <div className="mision-page-hero">
      <MissionWriter/> 
      </div>
      <div className="mission-one  container">
        <div className="vision-content mt-10 flex flex-wrap justify-center gap-3">
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={mission1} alt='vision-icon' className='mx-auto block w-[100px]' />
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Technological Innovation</h2>
       <p className='text-gray-600'>
       The trade environment is always changing. We are dedicated to remaining ahead of the curve by investing in cutting-edge trading platforms, tools, and technology that improve the user experience and provide a competitive advantage.
</p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={mission2} alt='vision-icon' className='mx-auto block w-[100px]' />
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Global with a Local Perspective</h2>
       <p className='text-gray-600'>
       As we approach trading with a world-wide view, recognizing the intricacies of local markets is critical. To give the best advice possible, our team of specialists keeps an eye on both global trends and location specifics.
</p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={mission3} alt='vision-icon' className='mx-auto block w-[100px]'/ >
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Empowerment and Education</h2>
       <p className='text-gray-600'>
       The basis of effective trading is knowledge. We are committed to providing our clients with the most recent market information, educational materials, and professional advice so that they may make educated decisions.
</p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center mt-6'> 
       <Image src={mission4} alt='vision-icon' className='mx-auto block w-[100px]'/>
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Our Commitment</h2>
       <p className='text-gray-600'>
       Highness Investment LLC understands the goals and obstacles that investors encounter. Our aim goes beyond simply providing services; it is about building relationships with our customers, helping them through each market turn, and sharing their victories.
</p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center mt-6'> 
       <Image src={mission5} alt='vision-icon' className='mx-auto block w-[100px]'/>
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Your Funds are Safe</h2>
       <p className='text-gray-600'>
       We hope to reinvent what it actually entails to trade with quality, trust, and vision by working together. Join us in our quest for a bright financial future.
</p>
        </div>
        
        </div>
       </div>
    </div>
  )
}

export default page