import React from 'react'
import img1 from '../../assests/footer-img1.png';
import img2 from '../../assests/footer-img2.png';
import img3 from '../../assests/footer-img3.png';
import img4 from '../../assests/footer-img4.png';
import img5 from '../../assests/footer-img5.png';
import Image from 'next/image';
import logo from '../../assests/logo_white.png';

const Footer = () => {
  return (
    <footer className=''>
      <div className="footer-content">
      <div className="footer-one bg-slate-950 flex items-center justify-between ">
     <div className="footer-left flex gap-6 m-10">
     <Image src={img1} alt='icon-site' className='footer-left-img' />
     <Image src={img2} alt='trustpilot' className='footer-left-img' />
     </div>
     <div className="footer-right flex items-center gap-6 m-10">
        <Image src={img3} alt='img3-footer' className='w-[80px]'/>
        <Image src={img4} alt='img4-footer' className='w-[80px]'/>
        <Image src={img5} alt='img5-footer' className='w-[80px]'/>
     </div>
      </div>
      <div className="footer-two bg-[#222] text-gray-100 flex justify-around mx-auto p-10 pl-[40px] ">
        <div className='text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Higness</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>About Highness</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Highness News</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Why Highness</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Careers</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Vision</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Mission</a></li>
            </ul>
        </div>
        <div className='text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Markets</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Forex</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Indices</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Commodities</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Metals</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Crypto</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Share</a></li>
            </ul>
        </div>
        <div className=' text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Accounts Types</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Demo Account</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Standard Account</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Highness Account</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Professional Account</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Client Portal</a></li>
            </ul>
        </div>
        <div className='text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Partnership</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Affiliate Program</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>IB Commission</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>White Label</a></li>
            </ul>
        </div>
        <div className=' text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Market Research</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Educational Articles</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Analysis Articles</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Analysis Videos</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Webinars</a></li>
            </ul>
        </div>
        <div className=' text-center'>
            <h2 className='text-primary font-bold text-[20px] mb-3'>Education</h2>
            <ul className='flex flex-col gap-3'>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Open Account</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Start Trading</a></li>
                <li><a href="#" className = 'text-[16px] text-gray-400 hover:text-gray-100 duration-300 transition'>Highness FAQ</a></li>
            </ul>
        </div>
      </div>
      <div className="footer-three bg-slate-950">
        <div className='footer-three-content p-10 text-gray-100'>
        <h3>Incumbency Certificate</h3>
        <p className='text-gray-300 my-4'>
        We, Highness Investment LLC, Credentia International Management, The Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebène, Republic of Mauritius hereby confirm that as at the date of this Certificate:
        </p>
        <ul className='list-disc flex flex-col gap-3 ml-10'>
            <li className='text-gray-400 text-[16px]'>The Company is in good legal standing.</li>
            <li className='text-gray-400 text-[16px] leading-[1.5]'>We hold a global business license under section 72 of the Financial Services Act 2007 and an Investment Dealer (Full Service Dealer, excluding underwriting) License under section 29 of Securities Act 2003. License No: GB23201935</li>
            <li className='text-gray-400 text-[16px] leading-[1.5]'>The Registered and Physical Office address of the Company is: Credentia International Management, The Cyberati Lounge, Ground Floor, The Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebène, Republic of Mauritius.</li>
            <li className='text-gray-400 text-[16px]'>Email: info@highnessinv.com</li>
        </ul>
        <h2 className='mt-5'>Risk Warning :</h2>
        <p className='mt-3 leading-[1.5] text-gray-400'>
        Trading derivatives carries significant risks. It is not suitable for all investors and if you are a professional client, you could lose substantially more than your initial investment. When acquiring our derivative products, you have no entitlement, right or obligation to the underlying financial assets. Past performance is no indication of future performance and tax laws are subject to change. The information on this website is general in nature and doesn't take into account your personal objectives, financial circumstances, or needs. Accordingly, before acting on the advice, you should consider whether the advice is suitable for you having regard to your objectives, financial situation and needs. We encourage you to seek independent advice if necessary. Please read our legal documents and ensure that you fully understand the risks before you make any trading decisions.
        </p>
        <h2 className='mt-5'>Disclaimer :</h2>
        <p className='mt-3 leading-[1.5] text-gray-400'>
        This site contains external links to websites controlled or offered by third parties. the information contained on this site is intended for information purposes only and it should not be regarded as advice nor as a recommendation to buy, sell or otherwise deal with any particular currency or precious metal trade. Highness Investment LLC hereby disclaims responsibility for any information or materials posted at any of the sites linked to this site. Highness Investment LLC does not endorse or recommend any products or services offered on that website. Clients carry the sole responsibility for all transactions or investments carried out at Highness Investment LLC.
Regional Restrictions: We do not offer our services to residents of certain jurisdictions such as the United States and to jurisdictions on the FATF and EU/UN sanctions lists.
        </p>
        </div>
        <hr className='opacity-[0.5] w-[90%] mx-auto' />
      </div>
      <div className="footer-four  bg-slate-950 ">
        <div className="p-10 footer-four-content flex items-center justify-between" >
       <Image src={logo} alt='logo' className='w-[200px]'/>
       <ul className=' flex items-center gap-5 footer-four-right'>
        <li><a href="#" className='text-gray-400 hover:text-gray-100 duration-300 transition '>Legal Forms & Documents</a></li>
        <li><a href="#" className='text-gray-400 hover:text-gray-100 duration-300 transition '>Risk Warnings</a></li>
        <li><a href="#" className='text-gray-400 hover:text-gray-100 duration-300 transition '>Cookies Policy </a></li>
        <li><a href="#" className='text-gray-400 hover:text-gray-100 duration-300 transition '>PRIVACY POLICY</a></li>
       </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
