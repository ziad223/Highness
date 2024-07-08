import React from 'react'
import img1 from '../../assests/FOREX.png';
import img2 from '../../assests/INDICES.png';
import img3 from '../../assests/COMMODITIES.png';
import img4 from '../../assests/SHARES.png';
import img5 from '../../assests/ENERGIES.png';
import img6 from '../../assests/CRYPTOCURRENCIES.png';
import img7 from '../../assests/TREASURIES.png';
import img8  from '../../assests/METALS.png';
import Image from 'next/image';
const Discover = () => {
  return (
    <div className='discover container flex flex-wrap justify-around '>
      <div  className='dicover-div md:w-[24%] text-center'>
         <Image src={img1} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Forex</h2>
         <p>
         Forex is the foreign currency exchange market, where traders can buy and sell global currencies. This market is characterized by its high liquidity and availability around the clock during weekdays, making it a significant hub for investors looking to profit from exchange rate fluctuations.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center'>
         <Image src={img2} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Indices</h2>
         <p >
         Are measures that reflect the performance of a group of stocks in a specific market. They are used to assess the overall performance of the market and help investors understand market trends. Famous indices include the Dow Jones, NASDAQ, and FTSE.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center'>
         <Image src={img3} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Commodities</h2>
         <p>
         Discover various commodities like precious metals (gold, silver), energy (oil, natural gas), and agriculture (wheat, corn).
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center'>
         <Image src={img4} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Stocks</h2>
         <p>
         Considered ownership stakes in companies, they are a means of investment and profit-making through the appreciation of the company's value and dividend distributions. Investors can buy and sell shares in the stock market, and it is a common way to diversify investments.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center  mt-[40px]'>
         <Image src={img5} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Energies</h2>
         <p>
         Including oil and natural gas, play a vital role in the global economy. The prices of these commodities are influenced by multiple factors such as global politics, environmental laws, and technological changes.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center  mt-[40px]'>
         <Image src={img6} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Cryptocurrencies</h2>
         <p>
         Popular examples include Bitcoin and Ethereum, which are digital currencies that use encryption for securing transactions. They are characterized by being decentralized and offer new opportunities in the world of digital investment, but come with high levels of instability and risk.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center  mt-[40px]'>
         <Image src={img7} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Treasures</h2>
         <p>
         These are investment funds that track the performance of a certain group of assets, such as stocks, commodities, or bonds. They provide an effective way to diversify and reduce risk in an investment portfolio, with the ease of buying and selling like stocks.
         </p>
      </div>
      <div  className='dicover-div md:w-[24%] text-center  mt-[40px]'>
         <Image src={img8} alt='Forex-img' className='w-[80px] mx-auto'/>
         <h2 className='my-5 font-bold text-[22px]'>Metals</h2>
         <p>
         Include gold, silver, and platinum, which are important commodities in financial markets. Investors turn to them as a safe haven during times of economic and political instability, and they are seen as a means to preserve wealth value.
         </p>
      </div>
    </div>
  )
}

export default Discover

