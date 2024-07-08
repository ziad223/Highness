'use client'
import React, { useEffect, useState } from 'react'
import Hero from './_components/Hero'
import Discover from './_components/Discover'
import Pircing from './_components/Pircing'
import Platforms from './_components/Platforms'
import Steps from './_components/Steps'
import Payment from './_components/Payment'
import BeatLoader from "react-spinners/BeatLoader";

const page = () => {
  const [loading , setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true);
    setTimeout(() => {
     setLoading(false)
    }, 3000);
   } , [])

   
 
  return (
    <>
    {loading ? 
      
<div  className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
  <BeatLoader
        color={'green'}
        loading={loading}
         size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
</div>

        :
      <div className='app'>
      <Hero/>
      <Discover/>
      <Pircing/>
      <Platforms/>
      <Steps/>
      <Payment/>
      </div>

     }
  
    </>
    
  )
}

export default page
