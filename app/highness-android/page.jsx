import React from 'react';
import Image from 'next/image';
import img1 from '../../assests/meta1.png';
import img2 from '../../assests/meta2.png';
import img3 from '../../assests/meta3.png';
import img4 from '../../assests/meta4.png';
import img5 from '../../assests/meta5.png';
import img6 from '../../assests/meta6.png';
import AndroidWriter from '@/typewriterC/AndroidWriter';
const page = () => {
  return (
    <div className='meta'>
       <div className="meta-hero">
        <AndroidWriter/>
       </div>
        <div className='lg:w-[60%] w-[90%]  my-20 mx-auto'>
      <h2 className='text-[#2b61ac] text-2xl text-center font-bold'>How to install Highness Android ?</h2>
        <table className='meta-table w-full mt-10'>
            <tr className=''>
                <td className='border p-3 text-center'>Step 01  </td>
                <td className='border  flex items-center gap-4 justify-center p-3'>Download Highness Android installation file 
                    <button class="bg-blue-600 mt-5 hover:bg-blue-700 mx-auto mb-6 text-gray-100 font-bold py-2 px-4 rounded flex  items-center">
                  <span>Download</span>
                   </button> 
                 </td>
            </tr>
            <tr>
                <td className='border p-3 text-center'>Step 02  </td>
                <td className='border  flex items-center gap-4 justify-center p-3'>
                    Run the installation file and follow the prompts to install.
                 </td>
            </tr>
            <tr>
                <td className='border p-3 text-center'>Step 03  </td>
                <td className='border  flex items-center gap-4 justify-center p-3'>
                    Launch the app and log in using your account details.
                 </td>
            </tr>
            <tr>
                <td className='border p-3 text-center'>Step 04  </td>
                <td className='border  flex items-center gap-4 justify-center p-3'>
                    Start trading on Highness Android.
                 </td>
            </tr>
        </table>
        </div>
        <div className='my-20'>
      <h2 className='text-[#2b61ac] text-2xl text-center font-bold my-20'>Highness Android benefits</h2>
      <div className='meta-flex flex justify-center gap-4 flex-wrap px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
     <div className='meta-div w-[31%] text-center'>
        <Image src={img1} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Flexibility</h1>
        <p>
Highness Android provides flexibility to its clients in terms of where and when they can access the markets, as it can be used on a wide range of Android devices.
        </p>
     </div>
        <div className='meta-div w-[31%] text-center'>
        <Image src={img2} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Real-time market data</h1>
        <p>
Highness Android provides real-time market data, including price quotes, charts, and news feeds, to help traders make successful trading decisions.
        </p>
     </div>
        <div className='meta-div w-[31%] text-center'>
        <Image src={img3} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Customizable trading preferences</h1>
        <p>
Highness Android allows traders to customize their trading preferences, including chart settings, indicators, and order types, to suit their individual needs.
        </p>
     </div>
        <div className='meta-div w-[31%] text-center mt-10'>
        <Image src={img4} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Convenient trading</h1>
        <p>
Highness Android enables traders to access the markets from anywhere and at any time, making it an ideal option for busy traders.
        </p>
     </div>
        <div className='meta-div w-[31%] text-center mt-10'>
        <Image src={img5} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Push notifications</h1>
        <p>
Highness Android provides push notifications for important market events, helping traders stay informed and up-to-date.
        </p>
     </div>
        <div className='meta-div w-[31%] text-center mt-10'>
        <Image src={img6} alt='meta-img' className='mx-auto w-20'/>
        <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Security</h1>
        <p>
Highness Android employs advanced security protocols to protect traders' data and transactions, providing a safe and secure trading environment.
        </p>
     </div>
      </div>
        </div>
        <div className='py-20 bg-gray-200 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
              <h2 className='text-[#2b61ac] text-2xl font-bold'>How to Uninstall Highness android ?</h2>
              <ul className='meta-steps mt-5 flex flex-col gap-3'>
                <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 1 :</span> Go to 'Settings' on your Android device.</li>
                <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 2 :</span>Select 'Apps' or 'Applications.'</li>
                <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 3 :</span>Find the Highness Investment LLC app.</li>
                <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 4 :</span>Tap 'Uninstall' and confirm to remove the app.</li>
              </ul>
        </div>
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64  my-20'>
      <div className='text-center'>
      <h2 className='font-bold text-2xl text-[#2b61ac]'>Frequently Asked Questions</h2>
      <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about highness ios.
</h4>
      </div>
            <div className='indices-questions mt-10'>
         <div className="indices-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>How can I access Highness App ?</h2>
           <h3 className='mt-3 p-5'>
            To access Highness App, you can download it from the Google Play Store by searching for 'Highness Investment LLC'. Once you complete downloading, follow the account opening procedures, make your initial deposit and start trading immediately. You can also open a demo account to try the practice.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>What devices are compatible with Highness App for Android ?</h2>
           <h3 className='mt-3 p-5'>
            Highness App for Android is compatible with smartphones and tablets devices running Android 6.0 or later versions.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>Can I access the same features of Highness App for Android as on the desktop version ?</h2>
           <h3 className='mt-3 p-5'>
            Yes, you can access the same features of Highness App for Android as on the desktop version, including trading Forex, Indices, Commodities, Metals, Energy Commodities, Shares, Cryptocurrencies, and ETFs.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>Is Highness App for Android secure ?</h2>
           <h3 className='mt-3 p-5'>Yes, Highness App for Android is secure. It uses 128-bit SSL encryption to ensure the highest security level of your personal and financial information.
            </h3>
         </div>
         <div className="forex-question bg-primary text-gray-100 ">
           <h2 className='text-xl bg-[#2b61ac] p-5'>Can I use Highness App for Android to deposit and withdraw funds ?</h2>
           <h3 className='mt-3 p-5'>Yes, you can use Highness App for Android to deposit and withdraw funds, as well as manage your trading accounts and view your transaction history.
            </h3>
         </div>

    </div>
     </div>
    </div>
  );
}

export default page;
