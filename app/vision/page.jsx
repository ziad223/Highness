import Image from 'next/image';
import React from 'react'
import vision1 from '../../assests/vision-icon-1.png';
import vision2 from '../../assests/vision-icon-2.png';
import vision3 from '../../assests/vision-icon-3.png';
import vision4 from '../../assests/vision-icon-4.png';
import vision5 from '../../assests/vision-icon-5.png';
import VissionWriter from '../../typewriterC/VissionWriter';
const Vision = () => {
  return (
    <div className='vision'>
      <div className="vision-page-hero">
        <VissionWriter/> 
      </div>
      <div className="vision-one container">
        <h1 className='vision-one-title text-center text-3xl font-bold text-[#2b61ac] mb-3'>Our Employees are committed to:</h1>
        <div className="vision-content flex flex-wrap justify-center gap-3">
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={vision1} alt='vision-icon' className='mx-auto block w-[100px]' />
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Client Comes First</h2>
       <p className='text-gray-600'>
       We believe that by placing our clients at the forefront of our operations, we can deliver services that not only meet but exceed their expectations.
       </p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={vision2} alt='vision-icon' className='mx-auto block w-[100px]' />
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Integrity</h2>
       <p className='text-gray-600'>
       Our reputation is built on trust, and by adhering to this principle, we cultivate a business environment where clients feel secure and valued.
       </p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center'>
       <Image src={vision3} alt='vision-icon' className='mx-auto block w-[100px]'/ >
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Flexibility</h2>
       <p className='text-gray-600'>
       We pride ourselves on our ability to be flexible and responsive to the changing needs of our clients and the market.
       </p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center mt-6'> 
       <Image src={vision4} alt='vision-icon' className='mx-auto block w-[100px]'/>
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Highness Purpose</h2>
       <p className='text-gray-600'>
       Every call, click, or tap is done with the intention of partnering with FX and CFD traders.
       </p>
        </div>
        <div className='vision-div w-[31%] p-4 text-center mt-6'> 
       <Image src={vision5} alt='vision-icon' className='mx-auto block w-[100px]'/>
       <h2 className='text-2xl my-3 text-[#2b61ac] font-medium '>Highness Strategy</h2>
       <p className='text-gray-600'>
       Is built to be dedicated to this goal by making constant adjustments to meet their needs.
       </p>
        </div>
        
        </div>
       </div>
   <div className="container">
  <div className='text-center'>
  <h2 className='vision-last-main text-center text-3xl font-bold text-[#2b61ac] mb-3'>Life at Highness Investment LLC</h2>
   <p className='vision-last-p w-[60%] mx-auto my-4 text-gray-600'>
   Many of employees of Highness Investment LLC have worked with Highness Investment LLC for at least half of our 14-year history and they adopt and share the four major values that demonstrate our business.
   </p>
  </div>
  <div className="vision-last flex flex-wrap mt-14  gap-5">
    <div className='vision-last-div w-[48%]'>
        <h2 className='vision-last-title text-2xl font-bold text-[#2b61ac] mb-3'>Diversified cultures</h2>
        <p>
        Our belief in diversity enriches our global team with fresh perspectives, collaborative solutions, and unconventional thinking.
        </p>
    </div>
    <div className='vision-last-div w-[48%] te'>
        <h2 className='vision-last-title text-2xl font-bold text-[#2b61ac] mb-3'>Resilient team
</h2>
        <p>
        Our team members are resilient and adaptable, and they definitely able to overcome any challenge.
        </p>
    </div>
    <div className='vision-last-div w-[48%] mt-10'>
        <h2 className='vision-last-title text-2xl font-bold text-[#2b61ac] mb-3'>Transparency</h2>
        <p>
        We operate with transparency in all aspects of our business to gain and sustain the trust of our clients and stakeholders.
        </p>
    </div>
    <div className='vision-last-div w-[48%] mt-10'>
        <h2 className='vision-last-title text-2xl font-bold text-[#2b61ac] mb-3'>Competence Wins</h2>
        <p>
        We believe that the best ideas and solutions come from those who demonstrate skills and gained higher positions through hard work and merit.
        </p>
    </div>
  </div>
   </div>
    </div>
  )
}

export default Vision
