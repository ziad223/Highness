import React from 'react';
import Image from 'next/image';
import img1 from '../../assests/aff1.png';
import img2 from '../../assests/aff2.png';
import img3 from '../../assests/aff3.png';
import img4 from '../../assests/aff4.png';
import img5 from '../../assests/aff5.png';
import img6 from '../../assests/aff6.svg';
import img7 from '../../assests/aff7.svg';
import img8 from '../../assests/aff8.svg';
import img9 from '../../assests/aff9.svg';
import img10 from '../../assests/aff10.svg';
import AffilateWriter from '@/typewriterC/AffilateWriter';
import Steps from '../_components/Steps';
const page = () => {
  return (
    <div className='indices'>
       <div className="indices-hero">
        <AffilateWriter/>
        <button class="bg-blue-500 mx-auto block hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Open Account
       </button>
       </div>
     <div className='bg-gray-200 p-5 pb-20'>
        <div className="text-center my-5">
            <h1 className='text-2xl font-bold text-blue-500'>Benefitting your business</h1>
            <p className='text-lg font-bold-text-gray-400 mt-2'>Maximize your earning potential and grow your online business</p>
        </div>
        <div className='aff-one flex justify-center gap-3 mt-20 w-[95%] mx-auto '>
         <div className='aff-div text-center w-[19%]'>
            <Image src={img1} alt = 'aff-img' className='block mx-auto w-[80px]'/>
            <h2 className='my-2 font-bold text-lg text-blue-700'>Earn up to $1200 CPA</h2>
            <p>For qualified active traders</p>
         </div>
          <div className='aff-div text-center w-[19%]'>
            <Image src={img2} alt = 'aff-img' className='block mx-auto w-[80px]'/>
            <h2 className='my-2 font-bold text-lg text-blue-700'>Guaranteed payment</h2>
            <p>Unlimited earning potential paid monthly</p>
         </div>
          <div className='aff-div text-center w-[19%]'>
            <Image src={img3} alt = 'aff-img' className='block mx-auto w-[80px]'/>
            <h2 className='my-2 font-bold text-lg text-blue-700'>Next-gen affiliate software</h2>
            <p>First class technology from Highness</p>
         </div>
          <div className='aff-div text-center w-[19%]'>
            <Image src={img4} alt = 'aff-img' className='block mx-auto w-[80px]'/>
            <h2 className='my-2 font-bold text-lg text-blue-700'>Real-time reporting</h2>
            <p>With our advanced and user-friendly dashboard</p>
         </div>
          <div className='aff-div text-center w-[19%]'>
            <Image src={img5} alt = 'aff-img' className='block mx-auto w-[80px]'/>
            <h2 className='my-2 font-bold text-md text-blue-700'>Outstanding conversion rates</h2>
            <p>Using compelling marketing material</p>
         </div>
        </div>
       </div>
       <div className = 'bg-gray-300 p-5 md:pl-20'>
        <div className=''>
            <h2 className='text-blue-800 font-bold text-xl'>Introducing Broker</h2>
            <p className='mt-3'>Highness IB Program is to help its partners earn money through referrals. Every active client brought by you to join Highness will increase your revenue.</p>
        </div>
        <div className='mt-10'>
        <h2 className='text-blue-800 font-bold text-xl mb-6'>Benefits Of IB Partnership</h2>
        <div className='flex items-center gap-4 mb-7'>
       <Image src={img6} alt='aff-icon' width={25} height={25}/>
       <span>Flexible pay-outs monitoring and reporting customer accounts with attractive real-time rebate compensations</span>
        </div>
        <div className='flex items-center gap-4 mb-7'>
       <Image src={img7} alt='aff-icon' width={25} height={25}/>
       <span>No upfront investment and straightforward revenue generation</span>
        </div>
        <div className='flex items-center gap-4 mb-7'>
       <Image src={img8} alt='aff-icon' width={25} height={25}/>
       <span>Easy-to-use and efficient account setup</span>
        </div>
        <div className='flex items-center gap-4 mb-7'>
       <Image src={img9} alt='aff-icon' width={25} height={25}/>
       <span>Dedicated managers for all traders</span>
        </div>
        <div className='flex items-center gap-4 mb-7'>
       <Image src={img10} alt='aff-icon' width={25} height={25}/>
       <span>24/7 support from the Highness team to handle your queries and feedback</span>
        </div>
        </div>
       </div>
          <div className='steps p-1 bg-[#e9e9e9]'>
      <div className="steps-content container">
      <h2 className='step-title text-center text-3xl font-bold text-[#2b61ac]  '>GET STARTED NOW</h2>
      <p className='mt-3 text-center text-xl'>Grow your business with Highness Partners' Affiliate Program</p>
      <div className="steps-flex items-center mt-[50px] flex justify-around">
        <div className='step-item text-center'>
        <div className='step-num'>1</div>
        <div>
            <h2 className='my-4 text-[28px] text-[#2b61ac] font-bold'>Apply Online</h2>
            <h3 className='text-[18px]'>
           Fill out our affiliate application form today
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>2</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Fund your account</h2>
            <h3 className='text-[18px]'>
            Head over to the Marketing Tools section and get 
            <span className='block'>your banners, links, and widgets.</span>
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>3</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Get Paid</h2>
            <h3 className='text-[18px]'>
          Earn high CPAs from your clients' 
            <span className='block'>trading</span>
            </h3>
        </div>
        </div>
      </div>
      <button className="bg-[#2b61ac] block mx-auto hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-[50px]">
        Become an Affiliate today
        </button>
      </div>
    </div>
     <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-300 pb-10 '>
      <div className='text-center'>
      <h2 className='font-bold text-2xl text-[#2b61ac] pt-10'>Frequently Asked Questions</h2>
      <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about trading forex with Highness..</h4>
      </div>
            <div className='indices-questions mt-10'>
         <div className="indices-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>How does the Highness Investment LLC Affiliate Program work ?</h2>
           <h3 className='mt-3 p-5'>
The Highness Investment LLC Affiliate Program allows individuals or businesses to earn commissions by referring new clients to Highness Investment LLC. Affiliates receive a unique tracking link and promotional materials to share with their audience. When someone clicks on the affiliate link and becomes a Highness Investment LLC client, the affiliate earns a commission.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What are the benefits of joining the Highness Investment LLC Affiliate Program ?</h2>
           <h3 className='mt-3 p-5'>
            By joining the Highness Investment LLC Affiliate Program, you can earn competitive commissions for every referred client who engages in trading activities. Additionally, you'll have access to marketing materials, reporting tools, and dedicated support to help you maximize your affiliate earnings.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>How can I become an affiliate for Highness Investment LLC ?</h2>
           <h3 className='mt-3 p-5'>
            To become an affiliate for Highness Investment LLC, you need to sign up through the affiliate registration process. After submitting your application, it will be reviewed by the Highness Investment LLC team. Once approved, you will receive your affiliate account details and access to the affiliate dashboard.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>How are affiliate commissions calculated and paid ?</h2>
           <h3 className='mt-3 p-5'>
Affiliate commissions are typically calculated based on the trading activity of the referred clients. The specific commission structure may vary depending on the terms of the affiliate program. Commissions are usually paid out on a regular basis, such as monthly or weekly, and can be withdrawn via various payment methods supported by Highness Investment LLC.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>Can I promote Highness Investment LLC through multiple marketing channels ?</h2>
           <h3 className='mt-3 p-5'>
Yes, as an affiliate, you can promote Highness Investment LLC through multiple marketing channels such as websites, blogs, social media, email marketing, and more. However, it's important to adhere to the guidelines and policies outlined in the affiliate agreement to ensure ethical and compliant promotional activities.
            </h3>
         </div>

    </div>
     </div>
    </div>
  );
}

export default page;
