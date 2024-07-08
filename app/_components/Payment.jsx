import React from 'react'
import payment1 from '../../assests/payment1.png';
import payment2 from '../../assests/payment2.png';
import payment3 from '../../assests/payment3.png';
import payment4 from '../../assests/payment4.png';
import payment5 from '../../assests/payment5.png';
import payment6 from '../../assests/payment6.png';
import payment7 from '../../assests/payment7.png';
import Image from 'next/image';

const Payment = () => {
  return (
    <div className='payment container gap-5 flex justify-around'>
      <Image src={payment1} alt='Wire transfer' className='w-[120px] object-contain a'/>
      <Image src={payment2} alt='Visa' className='w-[120px] object-contain a'/>
      <Image src={payment3} alt='Master Card' className='w-[120px] object-contain a'/>
      <Image src={payment4} alt='tether' className='w-[120px] object-contain a'/>
      <Image src={payment5} alt='Neteller' className='w-[120px] object-contain a'/>
      <Image src={payment6} alt='Binance' className='w-[120px] object-contain a'/>
      <Image src={payment7} alt='Skrill' className='w-[120px] object-contain a'/>
    </div>
  )
}

export default Payment
