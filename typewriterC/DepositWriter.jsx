'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
const DepositWriter = () => {
  return (
     <div className='text-center pt-[50px]'>
                <Typewriter
                className = 'Typewriter'
              options={{
                strings: ['Deposit and Withdrawal Methods'],
                autoStart: true,
                loop: true,
                
                }}
                />
        <p className='text-gray-100 w-[90%] md:w-[60%] my-5 mx-auto text-xl leading-[1.7]'>
Highness Investment LLC offers various deposit methods, including wire transfer, credit/debit cards, and online payment systems. Withdrawals are processed through the same methods and are subject to certain conditions and fees. Clients can choose the most convenient method for their transactions.
        </p>
       </div> 
  );
}

export default DepositWriter;
