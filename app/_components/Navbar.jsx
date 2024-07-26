'use client';
import Image from 'next/image'
import logo from '../../assests/logo_white.png'
import { FaCaretDown  } from "react-icons/fa6";
import usa_flag from '../../assests/usa-flag.png';
import sudia from '../../assests/sudia-flag.webp';
import {  useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import Link from 'next/link';
import MobileNav from './MobileNav';

const Navbar = () => {

  let [aboutToggle, setAboutToggle] = useState(false);
  let [marketToggle, setMarketToggle] = useState(false);
  let [tradingToggle, setTradingToggle] = useState(false);
  let [partnerToggle, setPartnerToggle] = useState(false);
  let [knowledgeToggle, setknowledgeToggle] = useState(false);
  let [openMenu, setOpenMenu] = useState(false);

  const aboutPageToggle = () =>{
    setAboutToggle(!aboutToggle);
    setMarketToggle(false)
    setTradingToggle(false)
    setPartnerToggle(false)
    setknowledgeToggle(false);

  }
  const marketPageToggle = () =>{
    setMarketToggle(!marketToggle)
    setAboutToggle(false)
    setTradingToggle(false)
    setPartnerToggle(false)
    setknowledgeToggle(false);

  }
  const tradingPageToggle = () =>{
    setTradingToggle(!tradingToggle)
    setAboutToggle(false)
    setMarketToggle(false)
    setPartnerToggle(false)
    setknowledgeToggle(false);

  }
  const partnerPageToggle = () =>{
    setPartnerToggle(!partnerToggle)
    setTradingToggle(false)
    setAboutToggle(false)
    setMarketToggle(false)
    setknowledgeToggle(false);
  }

  const knowledgePageToggle = () =>{
    setknowledgeToggle(!knowledgeToggle);
    setPartnerToggle(false)
    setTradingToggle(false)
    setAboutToggle(false)
    setMarketToggle(false)
    setOpenMenu(false);
  }

  // useEffect(function(){
  //   document.querySelector('.menu-btn').onclick = function(){
  //     document.querySelector(".nav-menus").classList.toggle("open");
  //   }

  //   } , [])


  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Arabic'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  function aboutLinks(){
    setAboutToggle(false);
    setOpenMenu(false)
  }
   function marketLinks(){
    setMarketToggle(false);
    setOpenMenu(false)
  }
    function tradingLinks(){
    setTradingToggle(false);
    setOpenMenu(false)
  }
    function partnerShipLinks(){
    setPartnerToggle(false);
    setOpenMenu(false)
  }
     function knowLedgeLinks(){
    setknowledgeToggle(false);
    setOpenMenu(false)
  } 




  return (
    <nav className='bg-[#163d5f] flex items-center justify-between  p-3 sticky top-0 z-30'>
      <div className="nav-left  flex items-center gap-3">
      <Link href = '/' className="nav-logo">
        <Image src={logo} alt='logo-white' className='w-[200px] logo-img' />
      </Link>
      <ul className='text-gray-100  flex items-center gap-6 relative nav-menus'>
        <li className='relative' onClick={aboutPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          About <FaCaretDown className='text-[16px]'/></a>
          {aboutToggle &&
           <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Higness</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/about" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)}>About Higness</Link></li>
               <li><Link href="/news" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)} >Highness News</Link></li>
               <li><Link href="/why-highness" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)}>Why Highness</Link></li>
               <li><Link href="/careers" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)}>Careers</Link></li>
               <li><Link href="/vision" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)}>Vission</Link></li>
               <li><Link href="/mision" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={() =>setAboutToggle(false)}>Mission</Link></li>
             </ul>
           </div>
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Regulation</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/terms-agreement" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Terms and Agreement</Link></li>
               <li><Link href="/safety-of-your-funds" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Safety Of Your Funds</Link></li>
               <li><Link href="/legal-forms-documents" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Legal Forms & Documents</Link></li>
               <li><Link href="/cookies-policy" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Cookies Policy</Link></li>
             </ul>
           </div>
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Activity</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/awards" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Awards</Link></li>
               <li><Link href="/exhibitions" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Exhibitions</Link></li>
               <li><Link href="/highness-in-media" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setAboutToggle(false)}>Highness in Media</Link></li>
             </ul>
           </div>
           </div>
          }
         
          </li>
        <li className='relative' onClick={marketPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Markets <FaCaretDown className='text-[16px]'/></a>
          {marketToggle &&
           <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
           <ul  className='flex flex-col gap-1 '>
             <li><Link href="/forex" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Forex</Link></li>
             <li><Link href="/indices" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Indices</Link></li>
             <li><Link href="/commodities" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Commodities</Link></li>
             <li><Link href="/metals" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Metals</Link></li>
             <li><Link href="/energy-commodities" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Energy Commodities</Link></li>
             <li><Link href="/shares" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Shares</Link></li>
             <li><Link href="/cryptocurrencies" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)}>Cryptocurrencies</Link></li>
             <li><Link href="/etfs" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setMarketToggle(false)} rounded-sm>ETFs</Link></li>
           </ul>
          </div>
          }
          
          </li>
        <li onClick={tradingPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Trading <FaCaretDown className='text-[16px]'/></a>
          {tradingToggle
          &&
          <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Accounts Types</h3>
            <ul className='flex flex-col gap-2 '>
              <li><Link href="/standard-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Standard Account</Link></li>
              <li><Link href="/highness-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Highness Account</Link></li>
              <li><Link href="/professional-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Professional Account</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Trading Platforms</h3>
            <ul className='flex flex-col gap-2 '>
              <li><Link href="/meta-trader" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>MetaTrader 5</Link></li>
              <li><Link href="/highness-ios" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Highness iOS</Link></li>
              <li><Link href="/highness-android" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Highness Android</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Deposit And Withdrawal</h3>
            <ul className='flex flex-col gap-2 '>
              <li><Link href="/deposit-withdrawal-methods" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={() =>setTradingToggle(false)}>Deposit & Withdrawal Methods</Link></li>
            </ul>
          </div>
          </div>
          }
        
          </li>
        <li className='relative' onClick={partnerPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Partnership <FaCaretDown className='text-[16px]'/></a>
          {partnerToggle && 
          <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
          <ul  className='flex flex-col gap-1 '>
            <li><Link href="/Affilate-Program" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setPartnerToggle(false)}>Affiliate Program</Link></li>
            <li><Link href="/ib-commetion" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setPartnerToggle(false)}>IB Commission</Link></li>
            <li><Link href="/white-label" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={() =>setPartnerToggle(false)}>White Label</Link></li>
          </ul>
         </div>
          }
          
          </li>
        {/* <li onClick={knowledgePageToggle}><a href="#"  className='flex gap-2 items-center text-[20px]  main-links'>
          Knowledge Types <FaCaretDown className='text-[16px]'/></a>
          {knowledgeToggle &&
             <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Tools</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Fix Api</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>MAM/PAMM</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Expert & Advisor</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Free VPS Hosting</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Trading Central Web TV</a></li>
               </ul>
             </div>
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Trading</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Trading Hours and Holidays</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Economic Calendar</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Expiration Dates</a></li>
               </ul>
             </div>
          
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Education</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>How To Open Account</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>How To Start Trading</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>FAQs</a></li>
               </ul>
             </div>
          
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Market Research</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Educational articles</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Technical Analysis Articles</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Technical Analysis Videos</a></li>
               </ul>
             </div>
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Analytics</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={() =>setknowledgeToggle(false)}>Webinars</a></li>
               </ul>
             </div>
             </div>
        }
       
          </li> */}
        <li><Link href="/support"  className='flex gap-2 items-center text-[20px] main-links'>Support</Link></li>
      </ul> 

     {openMenu ? 
        <ul className='text-gray-100  flex  gap-6 relative mobile-menu'>
        <li className='relative' onClick={aboutPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          About <FaCaretDown className='text-[16px]'/></a>
          {aboutToggle &&
           <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Higness</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/about" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks}>About Higness</Link></li>
               <li><Link href="/news" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks} >Highness News</Link></li>
               <li><Link href="/why-highness" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks}>Why Highness</Link></li>
               <li><Link href="/careers" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks}>Careers</Link></li>
               <li><Link href="/vision" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks}>Vission</Link></li>
               <li><Link href="/mision" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link'onClick={aboutLinks}>Mission</Link></li>
             </ul>
           </div>
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Regulation</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/terms-agreement" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Terms and Agreement</Link></li>
               <li><Link href="/safety-of-your-funds" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Safety Of Your Funds</Link></li>
               <li><Link href="/legal-forms-documents" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Legal Forms & Documents</Link></li>
               <li><Link href="/cookies-policy" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Cookies Policy</Link></li>
             </ul>
           </div>
           <div>
             <h3 className='mb-3 text-[#398fdf]'>Activity</h3>
             <ul className='flex flex-col gap-2 '>
               <li><Link href="/awards" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Awards</Link></li>
               <li><Link href="/exhibitions" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Exhibitions</Link></li>
               <li><Link href="/highness-in-media" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={aboutLinks}>Highness in Media</Link></li>
             </ul>
           </div>
           </div>
          }
         
          </li>
        <li className='relative' onClick={marketPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Markets <FaCaretDown className='text-[16px]'/></a>
          {marketToggle &&
           <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
           <ul  className='flex flex-col gap-1 '>
             <li><Link href="/forex" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Forex</Link></li>
             <li><Link href="/indices" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Indices</Link></li>
             <li><Link href="/commodities" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Commodities</Link></li>
             <li><Link href="/metals" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Metals</Link></li>
             <li><Link href="/energy-commodities" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Energy Commodities</Link></li>
             <li><Link href="/shares" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Shares</Link></li>
             <li><Link href="/cryptocurrencies" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks}>Cryptocurrencies</Link></li>
             <li><Link href="/etfs" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={marketLinks} rounded-sm>ETFs</Link></li>
           </ul>
          </div>
          }
          
          </li>
        <li onClick={tradingPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Trading <FaCaretDown className='text-[16px]'/></a>
          {tradingToggle
          &&
          <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Accounts Types</h3>
            <ul className='flex flex-col gap-2 '>
              <li><a href="/standard-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Standard Account</a></li>
              <li><a href="/highness-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Highness Account</a></li>
              <li><a href="/professional-account" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Professional Account</a></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Trading Platforms</h3>
            <ul className='flex flex-col gap-2 '>
              <li><Link href="/meta-trader" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>MetaTrader 5</Link></li>
              <li><Link href="/highness-ios" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Highness iOS</Link></li>
              <li><Link href="/highness-android" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Highness Android</Link></li>
            </ul>
          </div>
          <div>
            <h3 className='mb-3 text-[#398fdf]'>Deposit And Withdrawal</h3>
            <ul className='flex flex-col gap-2 '>
              <li><Link href="/deposit-withdrawal-methods" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm nav-link' onClick={tradingLinks}>Deposit & Withdrawal Methods</Link></li>
            </ul>
          </div>
          </div>
          }
        
          </li>
        <li className='relative' onClick={partnerPageToggle}><a href="#"  className='flex gap-2 items-center text-[20px] main-links'>
          Partnership <FaCaretDown className='text-[16px]'/></a>
          {partnerToggle && 
          <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
          <ul  className='flex flex-col gap-1 '>
            <li><Link href="/Affilate-Program" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={partnerShipLinks}>Affiliate Program</Link></li>
            <li><Link href="/ib-commetion" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={partnerShipLinks}>IB Commission</Link></li>
            <li><Link href="/white-label" className='hover:bg-gray-300 transition duration-300 p-2 rounded-[5px] block  nav-link' onClick={partnerShipLinks}>White Label</Link></li>
          </ul>
         </div>
          }
          
          </li>
        {/* <li onClick={knowledgePageToggle}><a href="#"  className='flex gap-2 items-center text-[20px]  main-links'>
          Knowledge Types <FaCaretDown className='text-[16px]'/></a>
          {knowledgeToggle &&
             <div className="menu-page bg-gray-100 text-gray-700 p-5 rounded-lg flex gap-8 absolute top-8 left-0 w-max">
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Tools</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Fix Api</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>MAM/PAMM</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Expert & Advisor</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Free VPS Hosting</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Trading Central Web TV</a></li>
               </ul>
             </div>
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Trading</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Trading Hours and Holidays</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Economic Calendar</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Expiration Dates</a></li>
               </ul>
             </div>
          
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Education</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>How To Open Account</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>How To Start Trading</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>FAQs</a></li>
               </ul>
             </div>
          
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Market Research</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Educational articles</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Technical Analysis Articles</a></li>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Technical Analysis Videos</a></li>
               </ul>
             </div>
             <div>
               <h3 className='mb-3 text-[#398fdf]'>Analytics</h3>
               <ul className='flex flex-col gap-2 '>
                 <li><a href="#" className='hover:bg-gray-300 transition duration-300 py-2 pr-1 rounded-sm text-[14px] nav-link' onClick={knowLedgeLinks}>Webinars</a></li>
               </ul>
             </div>
             </div>
        }
       
          </li> */}
        <li><Link href="/support"  className='flex gap-2 items-center text-[20px] main-links'>Support</Link></li>
      </ul> : null 
    }



      </div>
      <div className="nav-right text-gray-100  flex items-center gap-2 relative">
      
    
 <div className="relative inline-block text-slate-900">
      {/* <button
        className="bg-gray-100 hover:bg-gray-300 text-slate-950 font-bold  py-2 px-4 rounded-md flex items-center gap-2 " 
        onClick={toggleDropdown}
      >
        {selectedLanguage == 'English' ?
               <Image src={usa_flag} alt='usa' className='w-[40px] lang-img'/>
                : <Image src={sudia} alt='usa' className='w-[35px] lang-img'/>
              }
        {selectedLanguage}
        <svg
          className={`w-5 h-5 ml-2 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
     <div>
     {isOpen && (
        
            <div className="lang-menu absolute right-[5px] z-10 mt-2 w-44 bg-white rounded-md shadow-lg">
          {/* <ul className="py-1 flex flex-col gap-2">
            {languages.map((language) => (
              
              <li
                key={language}
                className="px-4 py-2 hover:bg-gray-300 p-6 cursor-pointer text-center flex items-center gap-2 mx-auto"
                onClick={() => handleLanguageSelect(language)}
              >
                {language == 'English' ?
               <Image src={usa_flag} alt='usa' className='w-[40px]'/>
                : <Image src={sudia} alt='usa' className='w-[35px]'/>
              }
                {language}
              </li>
            ))}
          </ul> */}
        </div>
    
      )}
     </div>
    </div>
    <Link href='/login'>
     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Login
      </button>
    </Link>
      <Link href='/register'>
      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      Register
     </button>
      </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded p-10 menu-btn" onClick={() =>setOpenMenu(!openMenu)}><FiMenu/></button>

         
       
       
      </div>
   
    </nav>
  )
}

export default Navbar
