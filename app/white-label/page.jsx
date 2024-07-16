import Image from 'next/image';
import React from 'react'
import vision1 from '../../assests/vision-icon-1.png';
import vision2 from '../../assests/vision-icon-2.png';
import vision3 from '../../assests/vision-icon-3.png';
import vision4 from '../../assests/vision-icon-4.png';
import vision5 from '../../assests/vision-icon-5.png';
import VissionWriter from '../../typewriterC/VissionWriter';
import WhiteLabelWriter from '@/typewriterC/WhiteLabelWriter';
const Vision = () => {
  return (
    <div className='white'>
      <div className="white-page-hero">
        <WhiteLabelWriter/> 
      </div>
      <div className='mx-auto py-20 bg-gray-200 text-center'>
        <h2 className='text-blue-700 text-3xl font-bold '>Have a Question ?</h2>
        <h2 className='text-blue-500 text-2xl font-bold my-5 '>Get in Touch</h2>
        <p className='text-lg font-bold text-gray-400'>If you have any questions or enquiries, fill in the form in this section.</p>
        <p className='text-lg font-bold text-gray-400'>Alternatively, contact us at info@highnessinv.com and one of our Account Managers will get back to you soon.</p>
        <form className='mt-10 bg-gray-300 w-[90%] md:w-[60%] mx-auto p-10'>
            <h2 className='text-blue-700 text-2xl font-bold mb-10'>Sending a Message</h2>
            <input type="text" placeholder='username*' className='block w-full mb-5 p-3 rounded-md outline-0' />
            <input type="text" placeholder='Phone*' className='block w-full mb-5 p-3 rounded-md outline-0' />
            <input type="text" placeholder='Email*' className='block w-full mb-5 p-3 rounded-md outline-0' />
            <textarea placeholder='message*' className='block w-full mb-5 p-3 rounded-md outline-0 h-[200px]'></textarea>
            <button className="bg-blue-500 w-[30%] text-xl mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
        </form>
      </div>
      
     </div>
  )
}

export default Vision
