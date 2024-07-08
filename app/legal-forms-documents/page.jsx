
import React from 'react'
import legal_icon from '../../assests/legal-icon.svg';
import Image from 'next/image';
import LegalWriter from '../../typewriterC/LegalWriter';


const LegalForms = () => {
  return (
    <div className='legalForms'>
      <div className="legalForms-page-hero">
     <LegalWriter/>
      </div>
      <div className="container">
        <h2 className='safety-title text-center font-bold text-3xl text-[#2b61ac]'>Highness Investment LLC Agreement</h2>
        <div className="legalForms-content mt-16 gap-16 flex flex-wrap ">
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>Complaints Management Policy</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Complaints Management Policy pledges swift and effective resolution of concerns and grievances, emphasizing open communication and client feedback, each complaint is treated with professionalism and confidentiality, aiming for fair and satisfactory resolutions.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>Conflicts of Interest Policy</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Conflicts of Interest Policy highlights our dedication to integrity and transparency, detailing procedures to identify, manage, and disclose conflicts within our organization, Adherence ensures fair treatment of stakeholders, upholding trust and credibility.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon ' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>Dynamic Leverage</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Dynamic leverage dynamically adjusts trading leverage based on market conditions and risk, aiming to optimize performance while managing risk effectively, this approach enhances potential returns while mitigating excessive risk exposure, adapting to market changes for greater portfolio flexibility and control.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>IB Agreement</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            The Interactive Brokers (IB) Agreement outlines terms governing client relationships, emphasizing understanding before trading, it clarifies account setup, trading procedures, fees, and other key brokerage aspects. Reviewing and accepting fosters a transparent, mutually beneficial partnership.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>Order Execution Policy</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Order Execution Policy prioritizes efficient and fair execution, aiming for optimal outcomes by considering factors like price and speed. Transparent practices uphold regulatory standards and market integrity, fostering trust, understanding and adhering to this policy is vital for clients to ensure transparency and trust in our execution practices.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>Payments Policy</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Payments Policy details payment processes, including accepted methods, billing cycles, and associated fees. Understanding it ensures smooth transactions and reflects our commitment to transparency and efficiency, familiarizing yourself with this policy guarantees a seamless payment experience.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>PRIVACY POLICY</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Privacy Policy safeguards your personal information, detailing data collection, use, and protection measures. We prioritize transparency, empowering you to understand and control your privacy, adhering to this policy builds trust and ensures a secure environment for users and customers.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>RISK DISCLOSURE POLICY</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Risk Disclosure Policy elucidates trading and investment risks, covering market factors like volatility and liquidity, understanding it empowers informed decisions and effective risk management. We prioritize transparency, providing necessary information for confident market navigation.
            </p>
           </div>
            </div>
            <div className='legendForm-div flex gap-12 w-[47%]'>
           <Image src={legal_icon} alt='legal-icon' className='w-[70px] legendForm-icon' />
           <div>
            <h2 className=' text-xl text-[#2b61ac] font-bold'>WEBSITE TERMS AND CONDITIONS</h2>
            <p className='mt-3 text-gray-600 leading-[1.6]'>
            Our Website Terms and Conditions establish the legal framework for platform usage, outlining user rights, responsibilities, and service limitations, agreement with these terms upon accessing or using our website is imperative, covering areas such as intellectual property and dispute resolution, Reviewing and understanding them ensures compliance and a positive engagement experience.
            </p>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LegalForms
