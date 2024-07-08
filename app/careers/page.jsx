import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import CareerWriter from '../../typewriterC/CareerWriter';

const Careers = () => {
  return (
    <div className='careers'>
      <div className="careers-page-hero">
     <CareerWriter/>  
      </div>
      <div className="container">
        <h1 className='careers-title text-center text-3xl font-bold text-[#2b61ac] mb-3'>Search for your role among our vacant positions:</h1>
        <div className="careers-content flex justify-center gap-3 flex-wrap mt-12">
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Social Media Specialist</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Content Writer</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Graphic Designer</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Marketing Coordinator</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Office Manager</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
          <div className='careers-job p-4 border border-gray-300 w-[31%]  '>
            <h2 className='careers-job-title text-2xl text-[#2b61ac] mb-3'>Media Buyer</h2>
            <div className='flex items-center mt-4 gap-2'>
                  <FaLocationDot className='text-[#d4bda4]'/>
                  <span className='text-gray-600'>Dubai, UAE</span>
            </div>
          </div>
        </div>
      </div>
      <div className="careers-three container">
        <h2 className='careers-three-title text-3xl font-bold text-[#2b61ac] mb-3'>Welcome on board!</h2>
        <p>
        Your passion and expertise can shape the future of trading and investment with us. Explore rewarding opportunities in a dynamic environment and join our team in driving success. Explore a whole world of growth and excellence here at Highness Investment LLC.
        </p>
      </div>
      <div className="careers-four container flex">
        <div className='career-last'>
          <h2 className='career-last-title ml-5 text-xl font-bold text-[#2b61ac] mb-3'>Our commitment to employee improvement:</h2>
          <p className='text-gray-500 leading-[1.8]'>
          Highness Investment LLC is committed to the professional development and the improvement of its employees. The company provides training, guidance, and career enhancement to help its staff build prominent careers in trading industry.
          </p>
        </div>
        <div className='career-last'>
          <h2 className='career-last-title ml-5 text-xl font-bold text-[#2b61ac] mb-3'>Focus on Client Satisfaction:</h2>
          <p className='text-gray-500 leading-[1.8]'>
          Highness Investment LLC places strong emphasis on providing exceptional services to its clients. The company strives to meet and exceed their expectations by offering customized solutions and technical.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Careers
