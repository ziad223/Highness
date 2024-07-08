'use client'
import React from 'react'
import NumberCounter from 'number-counter';
import { FaQuoteLeft , FaQuoteRight  } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import AboutWriter from '../../typewriterC/AboutWriter';

const About = () => {
  return (
    <div className='about '>
      <div className="about-hero">
       <AboutWriter/>
      </div>
       <div className="about-counter container flex justify-around">
        <div className='text-center'>
          <h4 className='text-bold text-xl'>over</h4>
          <h2 className='text-2xl my-3 font-bold text-[#2b61ac]'>3,500,000</h2>
          <h4>Live Accounts Opened</h4>
        </div>
        <div className='text-center'>
          <h4 className='text-bold text-xl'>Established since</h4>
          <NumberCounter start={1500} end = {2009} delay={4} className="text-2xl my-3 font-bold text-[#2b61ac]" />
          <h4>As a Global Market Leader</h4>
        </div>
        <div className='text-center'>
          <h4 className='text-bold text-xl'>more than</h4>
          <NumberCounter start={150} end = {200} delay={5} postFix="+" className="text-2xl my-3 font-bold text-[#2b61ac]" />
          <h4>Employees Globally</h4>
        </div>
        <div className='text-center'>
          <h4 className='text-bold text-xl'>over</h4>
          <NumberCounter start={0} end = {60} delay={3} className="text-2xl my-3 font-bold text-[#2b61ac]" />
          <h4>Industry Awards</h4>
        </div>
        <div className='text-center'>
          <h4 className='text-bold text-xl'>more than</h4>
          <NumberCounter start={0} end = {27} delay={3}  className="text-2xl my-3 font-bold text-[#2b61ac]" />
          <h4>Supported Languages</h4>
        </div>
       </div>
       <div className=' container'>
       <h2 className='text-2xl font-bold text-[#2b61ac] mb-3 '>Who Are We?</h2>
        <p className='leading-[1.8]'>
        We are Highness Investment LLC, a major brand in financial technology with headquarters and branches in the United States, the United Kingdom, the United Arab Emirates, Turkey, and Malaysia. Highness is distinguished by our legal standing as a worldwide investment company, as we are licensed and regulated by Mauritius. Highness has earned a reputation as a dependable, strong, and trustworthy broker since its start. In addition, we provide management advice, analysis, and rapid execution services.
        </p>
       </div>
       <div className=' container '>
       <h2 className='text-2xl font-bold text-[#2b61ac] mb-3'>Highness Investment LLC Services</h2>
       <p className='mb-4'>1- Offers various trading methods, including software and tools.</p>
        <p className='mb-4'>2- CFD trading in Forex, Spot Metals, Energies, Commodities, Indices, Bonds, and popular exchange stocks.</p>
        <p className='mb-4'>3- Advanced automated trading platforms for accessing digital markets.</p>
        <p className='mb-4'>4- Tailored services for retail, affiliate, and white-label clients.</p>
        <p className='mb-4'>5- Customized account options for individual trading needs.</p>
        <p className='mb-4'>6- Quick execution with superior trading facilities.</p>
        <p className='mb-4'>7- Committed to assisting clients from all backgrounds achieve trading objectives.</p>
       </div>
       <div className='bg-[#e9e9e9] p-3'>
        <div className="container ">
       <h2 className='more-title text-2xl font-bold text-[#2b61ac] mb-3 '>More than a Mission, It's a Commitment!</h2>
          <p className='text-xl leading-[1.8]'>
          <FaQuoteLeft className='inline-block mr-1'/>
          Our primary aim is to provide the highest quality technology solutions and global-standard services while maintaining the highest level of integrity in all we do.
          We are constantly devoted to assisting, inspiring, and broadening our workers' responsibilities to increase performance and growth. 
          <FaQuoteRight className='inline-block ml-1'/>
          </p>
        </div>
       </div>
       <div className="about-last container flex items-center gap-5">
        <div className='about-last-left w-[50%]'>
       <h2 className='about-last-left-title text-2xl font-bold text-[#2b61ac] mb-3'>Highness Values (Approach)</h2>
       <div className='about-last-div flex items-center gap-4 mb-5 mt-8 '>
      <FaCheck className='text-primary text-xl about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Integrity</h4>
        <p className='text-gray-700 text-[16px]'>We maintain the greatest levels of honesty in all of our acts, assuring dependability and openness.</p>
      </div>
       </div>
       <div className='about-last-div flex items-center gap-4 mb-5'>
      <FaCheck className='text-primary text-3xl about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Innovation</h4>
        <p className='text-gray-700'>To provide the highest level of service, we are always pushing the frontiers of the fintech business, adapting to evolving trends and using the latest technologies.</p>
      </div>
       </div>
       <div className='about-last-div flex items-center gap-4 mb-5'>
      <FaCheck className='text-primary text-xl about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Excellence</h4>
        <p className='text-gray-700'>We aim for perfection in our services to ensure that we stay a trade industry leader.</p>
      </div>
       </div>
       <div className='about-last-div flex items-center gap-4 mb-5'>
      <FaCheck className='text-primary text-xl about-last-icon about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Accountability</h4>
        <p className='text-gray-700'>We accept accountability for our actions and decisions, as well as following through on our pledges and commitments.</p>
      </div>
       </div>
       <div className='about-last-div flex items-center gap-4 mb-5'>
      <FaCheck className='text-primary text-xl about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Collaboration</h4>
        <p className='text-gray-700'>We believe in the power of teamwork, encouraging collaboration across departments to achieve unified goals.</p>
      </div>
       </div>
       <div className='about-last-div flex items-center gap-4 mb-5'>
      <FaCheck className='text-primary text-3xl about-last-icon'/>
      <div>
        <h4 className='font-bold mb-2'>Safety and Security</h4>
        <p className='text-gray-700'>Protecting our clients' investments and data is important. We implement firm security measures and stay updated with global standards.</p>
      </div>
       </div>
        </div>
        <div className='about-last-right w-[50%]'>
         <h2 className=' text-2xl font-bold text-[#2b61ac] mb-3'>Extending Our Horizons..!</h2>
         <p className='leading-[1.8] text-gray-600'>
         Highness Investment LLC's seasoned management team, with a history of successful trading, encountered challenges with traditional Forex brokers, such as trade delays and system failures.
         In return, Highness aims to lead with advanced technology, innovative solutions, competitive rates, and exceptional customer service.
         </p>
        </div>
       </div>
     
       <div>
      
       </div>
    </div>
  )
}

export default About
