'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '../../assests/deposit-table-1.svg';
import img2 from '../../assests/deposit-table-2.svg';
import img3 from '../../assests/deposit-table-3.svg';
import img4 from '../../assests/deposit-table-4.svg';
import img5 from '../../assests/deposit-table-5.svg';
import img6 from '../../assests/deposit-table-6.svg';
import DepositWriter from '@/typewriterC/DepositWriter';
import { FaTimes } from 'react-icons/fa';
import logo from '../../assests/logo_white.png';

const Page = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const togglePayment = () => {
    setOpenPaymentModal(!openPaymentModal);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <div className='deposit'>
      <div className="deposit-hero">
        <DepositWriter />
      </div>
      <div className='text-center my-10 relative'>
        <h2 className='font-bold text-2xl text-[#2b61ac]'>We accept deposits by :</h2>
        <div className='flex justify-center gap-3 mt-5'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Deposits</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Withdrawals</button>
        </div>
        <div className='w-[80%] mx-auto mt-10'>
          <table className='p-5 overflow-x-scroll deposit-table'>
            <thead>
              <tr>
                <th className='border p-5 text-sm'>Funding Options</th>
                <th className='border p-5'>Min Deposit</th>
                <th className='border p-5'>Max Deposit</th>
                <th className='border p-5'>Fees</th>
                <th className='border p-5'>Processing time</th>
                <th className='border p-5'>Accepted Currencies</th>
                <th className='border p-5'></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-gray-100'>
                <td className='border p-3 text-sm '>
                  <Image src={img1} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Bank Transfer</span>
                </td>
                <td className='border p-3 text-sm '>From $50</td>
                <td className='border p-3 text-sm '>Up to $10,000</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Up to One Working Day</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border p-3 text-sm '>
                  <Image src={img2} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Visa & Master </span>
                </td>
                <td className='border p-3 text-sm '>$50</td>
                <td className='border p-3 text-sm '>$5,000</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Instant</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='border p-3 text-sm '>
                  <Image src={img3} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Skrill</span>
                </td>
                <td className='border p-3 text-sm '>$50</td>
                <td className='border p-3 text-sm '>$50,000 or equivalent</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Instant</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border p-3 text-sm '>
                  <Image src={img4} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Neteller </span>
                </td>
                <td className='border p-3 text-sm '>$50</td>
                <td className='border p-3 text-sm '>$50,000 or equivalent</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Instant</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
              <tr className='bg-gray-100'>
                <td className='border p-3 text-sm '>
                  <Image src={img5} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Crypto</span>
                </td>
                <td className='border p-3 text-sm '>From $50</td>
                <td className='border p-3 text-sm '>Unlimited</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Instant</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
              <tr>
                <td className='border p-3 text-sm '>
                  <Image src={img6} alt='deposit-img' width={30} height={30} className='inline-block' />
                  <span className='ml-2'>Sticpay</span>
                </td>
                <td className='border p-3 text-sm '>From $50</td>
                <td className='border p-3 text-sm '>Unlimited</td>
                <td className='border p-3 text-sm '>No fees</td>
                <td className='border p-3 text-sm '>Instant</td>
                <td className='border p-3 text-sm '>EUR, USD, GBP, AUD, AED, Other</td>
                <td className='border p-3 text-sm '>
                  <button onClick={togglePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Fund
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          {openPaymentModal &&
            <div className="deposit-payment md:w-[50%] p-4 rounded-md mx-auto bg-gray-300 absolute top-0 md:left-[400px] z-10">
              <div className='flex items-center justify-between md:mx-7 my-5 '>
                <h1 className='font-bold text-xl'>Deposit</h1>
                <FaTimes className='text-2xl cursor-pointer text-gray-600' onClick={() => setOpenPaymentModal(false)} />
              </div>
              <div className='flex justify-center my-3'>
                <Image src={logo} alt='logo-img' />
              </div>
              <div className='flex justify-center gap-3 my-3'>
                <Image src={img1} alt='deposit-img' width={30} height={30} className='inline-block' />
                <span>Bank Transfer</span>
              </div>
              <form className='my-4'>
                <div className='flex flex-col flex-start gap-2 ml-10 mb-4 '>
                  <label htmlFor="account_number" className='block text-start text-lg font-bold'>Account Number</label>
                  <input type="text" placeholder='Account Number' className='w-[90%] border-2 border-slate-400 p-2 outline-none' id='account_number' />
                </div>
                <div className='flex flex-col flex-start gap-2 ml-10 mb-4 '>
                  <label htmlFor="name" className='block text-start text-lg font-bold'>Name</label>
                  <input type="text" placeholder='Name' className='w-[90%] border-2 border-slate-400 p-2 outline-none' id='name' />
                </div>
                <div className='flex flex-col flex-start gap-2 ml-10 mb-4 '>
                  <label htmlFor="email" className='block text-start text-lg font-bold'>Email</label>
                  <input type="text" placeholder='Email' className='w-[90%] border-2 border-slate-400 p-2 outline-none' id='email' />
                </div>
                <div className='flex flex-col flex-start gap-2 ml-10 mb-4 '>
                  <label htmlFor="deposit_amount" className='block text-start text-lg font-bold'>Deposit Amount</label>
                  <input type="number" placeholder='0.00 USD' className='w-[90%] border-2 border-slate-400 p-2 outline-none' id='deposit_amount' />
                </div>
                <div className='flex justify-end mt-10 mr-5'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Deposit Now</button>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;
