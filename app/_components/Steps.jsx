import React from 'react'
const Steps = () => {
  return (
    <div className='steps p-1 bg-[#e9e9e9]'>
      <div className="steps-content container">
      <h2 className='step-title text-center text-3xl font-bold '>Get Started In 3 Steps</h2>
      <div className="steps-flex items-center mt-[50px] flex justify-around">
        <div className='step-item text-center'>
        <div className='step-num'>1</div>
        <div>
            <h2 className='my-4 text-[28px] text-[#2b61ac] font-bold'>Provide your info</h2>
            <h3 className='text-[18px]'>
            Personal info and trading
           <span className='block'>experience.</span>
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>2</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Fund your account</h2>
            <h3 className='text-[18px]'>
            Through deposit, bank transfer, wire
            <span className='block'>transfer, or debit card</span>
            </h3>
        </div>
        </div>
        <div className='step-item text-center'>
        <div className='step-num'>3</div>
        <div>
            <h2 className='my-4  text-[28px] text-[#2b61ac] font-bold'>Start trading</h2>
            <h3 className='text-[18px]'>
            After the approval, the trading 
            <span className='block'>will be open</span>
            </h3>
        </div>
        </div>
      </div>
      <button className="bg-primary block mx-auto hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-[50px]">
        Open Account
        </button>
      </div>
    </div>
  )
}

export default Steps
