'use client';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Support = () => {
    return (
        <div className='support bg-[#e7e7e7] '>
            <div className="support-page-hero">
            <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Contact us'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Welcome to the Support & Contact page at Highness Investment LLC - where we promise you a smooth and effective communication experience that matches the quality of the services we provide.
        </p>
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        At Highness, we take pride in offering personalized and specialized support for every client, with an emphasis on speed and accuracy in responding to all your inquiries and requirements.
        </p>
        <p className='text-gray-100 w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
        Our support team is here to assist you at every step of the way, 24/7, in multiple languages.
        </p>
       </div> 
            </div>
            <div className="text-ceenter p-5 text-center mx-auto">
                <h2 className='text-2xl my-3 text-[#2b61ac] font-bold'>GET IN TOUCH</h2>
                <p className='text-xl'>
                Contact us with any questions or if you'd like more information about Highness Group's products and services.
                </p>
                <form className='mt-10 bg-[#fff] md:p-10 p-4 md:w-[800px] mx-auto rounded-lg'>
                    <label htmlFor='firstName'>FirstName<sup className='text-[red]'>*</sup></label>
                     <input type='text' id='firstName' placeholder='Please Enter Your First Name' className='block mx-auto p-3 my-4 w-[100%] outline-0 border-2 border-gray-300' />
                     <label htmlFor='lastName'>LastName<sup className='text-[red]'>*</sup></label>
                     <input type='text' id='lastName' placeholder='Please Enter Your Last Name' className='block mx-auto p-3 my-4 w-[100%] outline-0 border-2 border-gray-300' />
                     <label htmlFor='email'>Email<sup className='text-[red]'>*</sup></label>
                     <input type='email' id='email' placeholder='Please Enter Your Email Address' className='block mx-auto p-3 my-4 w-[100%] outline-0 border-2 border-gray-300' />
                     <label htmlFor='phone'>Phone Number<sup className='text-[red]'>*</sup></label>
                     <input type='number' id='phone' placeholder='Please Enter Your Phone Number' className='block mx-auto p-3 my-4 w-[100%] outline-0 border-2 border-gray-300' />
                     <label htmlFor='textarea'>Message<sup className='text-[red]'>*</sup></label>
                     <textarea  id='textarea' placeholder='Please Enter Your Phone Number' className='flex items-start flex-wrap justify-start  mx-auto p-3 my-4 w-[100%] outline-0 border-2 border-gray-300 h-[300px]'></textarea>
                     <button id="button" type="submit" class="bg-primary shadow-xl hover:bg-green-500 transition duration-300 text-white font-bold p-4 w-full rounded-lg mt-6">Submit</button>
                </form>

            </div>  
        </div>
    )
}

export default Support
