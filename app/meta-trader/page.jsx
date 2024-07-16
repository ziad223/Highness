import Image from 'next/image';
import img1 from '../../assests/meta1.png';
import img2 from '../../assests/meta2.png';
import img3 from '../../assests/meta3.png';
import img4 from '../../assests/meta4.png';
import img5 from '../../assests/meta5.png';
import img6 from '../../assests/meta6.png';
import MetaWriter from '@/typewriterC/MetaWriter';

const Page = () => {

  
  return (
    <div className='meta'>
      <div className="meta-hero">
        <MetaWriter />
          <button className="bg-blue-600 hover:bg-blue-700 mx-auto mb-6 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download</span>
          </button>
      </div>
      <div className='lg:w-[60%] w-[90%] my-20 mx-auto'>
        <h2 className='text-[#2b61ac] text-2xl text-center font-bold'>How to install Windows MT5</h2>
        <table className='meta-table w-full mt-10'>
          <tbody>
            <tr>
              <td className='border p-3 text-center'>Step 01</td>
              <td className='border flex items-center gap-4 justify-center p-3'>
                Download the MT5 installation file
                  <button className="bg-blue-600 mt-5 hover:bg-blue-700 mx-auto mb-6 text-gray-100 font-bold py-2 px-4 rounded flex items-center">
                    <span>Download</span>
                  </button>
              </td>
            </tr>
            <tr>
              <td className='border p-3 text-center'>Step 02</td>
              <td className='border flex items-center gap-4 justify-center p-3'>
                Run the installation file and follow the prompts to install.
              </td>
            </tr>
            <tr>
              <td className='border p-3 text-center'>Step 03</td>
              <td className='border flex items-center gap-4 justify-center p-3'>
                Launch the MT5 platform and log in using your account details.
              </td>
            </tr>
            <tr>
              <td className='border p-3 text-center'>Step 04</td>
              <td className='border flex items-center gap-4 justify-center p-3'>
                Start trading on Windows MT5.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='my-20'>
        <h2 className='text-[#2b61ac] text-2xl text-center font-bold my-20'>MetaTrader 5 benefits</h2>
        <div className='meta-flex flex justify-center gap-4 flex-wrap px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
          <div className='meta-div w-[31%] text-center'>
            <Image src={img1} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Advanced analytics</h1>
            <p>MetaTrader 5 provides advanced analytical tools for traders to analyze the markets and achieve accurate trading decisions. This platform provides a variety of technical indicators and charting tools, as well as the ability to form strong trading strategies.</p>
          </div>
          <div className='meta-div w-[31%] text-center'>
            <Image src={img2} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Automated trading capabilities</h1>
            <p>MetaTrader 5 allows traders to automate their trading strategies using Expert Advisors (EAs). This can help save time and reduce tension when making trading decisions.</p>
          </div>
          <div className='meta-div w-[31%] text-center'>
            <Image src={img3} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Multi-asset class trading</h1>
            <p>MetaTrader 5 supports trading in multiple asset classes, including Forex, stocks, futures, and derivatives. This provides traders with a range of investment opportunities and diversification options.</p>
          </div>
          <div className='meta-div w-[31%] text-center mt-10'>
            <Image src={img4} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Real-time market data</h1>
            <p>MetaTrader 5 provides real-time market data and news feeds, enabling traders to stay up-to-date with market events and take prompt trading decisions.</p>
          </div>
          <div className='meta-div w-[31%] text-center mt-10'>
            <Image src={img5} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Customizable trading preferences</h1>
            <p>MetaTrader 5 allows traders to customize their trading preferences, including chart settings, indicators, and order types, to suit their individual needs.</p>
          </div>
          <div className='meta-div w-[31%] text-center mt-10'>
            <Image src={img6} alt='meta-img' className='mx-auto w-20' />
            <h1 className='my-[10px] text-xl text-blue-500 font-bold'>Community of traders</h1>
            <p>MetaTrader 5 has a large community of traders who share ideas and strategies through forums and social networks. This can be a valuable resource for both novice and experienced traders who seek to improve their trading skills.</p>
          </div>
        </div>
      </div>
      <div className='py-20 bg-gray-200 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
        <h2 className='text-[#2b61ac] text-2xl text-center font-bold'>How to Uninstall MT5 for PC?</h2>
        <ul className='meta-steps mt-10 flex flex-col gap-3'>
          <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 1:</span>Open the Control Panel on your Windows device.</li>
          <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 2:</span>Select 'Programs and Features' or 'Add or Remove Programs.'</li>
          <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 3:</span>Find 'MetaTrader 5' in the list of installed programs.</li>
          <li className='meta-step text-lg font-bold'><span className='text-[#74b22b] mr-2'>Step 4:</span>Click 'Uninstall' and follow the prompts to remove MT5.</li>
        </ul>
      </div>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 my-20'>
        <div className='text-center'>
          <h2 className='font-bold text-2xl text-[#2b61ac]'>Frequently Asked Questions</h2>
          <h4 className='text-gray-500 text-lg mt-2'>Here are our most frequently asked questions about MetaTrader 5.</h4>
        </div>
        <div className='indices-questions mt-10'>
          <div className="indices-question bg-primary text-gray-100">
            <h2 className='text-xl bg-[#2b61ac] p-5'>How do I access the MT5 platform for trading with Highness Investment LLC?</h2>
            <h3 className='mt-3 p-5'>To start trading on the MT5 platform with Highness Investment LLC, you have to open a MT5 trading account. You cannot trade on the MT5 platform using your existing MT4 account. To open an MT5 account, simply click on the provided link.</h3>
          </div>
          <div className="forex-question bg-primary text-gray-100">
            <h2 className='text-xl bg-[#2b61ac] p-5'>Can I use the ID of my MT4 account to access MT5 account with Highness Investment LLC?</h2>
            <h3 className='mt-3 p-5'>No, you can’t. You need to have a separate MT5 trading account. To open an MT5 account, click on the provided link.</h3>
          </div>
          <div className="forex-question bg-primary text-gray-100">
            <h2 className='text-xl bg-[#2b61ac] p-5'>How can I verify my MT5 account with Highness Investment LLC?</h2>
            <h3 className='mt-3 p-5'>If you are an existing client with Highness Investment LLC using a MT4 account, you may open additional MT5 accounts from the dashboard of your account without needing to re-submit your verification documents. However, if you are a new client, you will need to provide all the required verification documents, including proof of identity and proof of residency.</h3>
          </div>
          <div className="forex-question bg-primary text-gray-100">
            <h2 className='text-xl bg-[#2b61ac] p-5'>Can I trade on stock CFDs using my existing MT4 trading account at Highness Investment LLC?</h2>
            <h3 className='mt-3 p-5'>No, you can't. You need to have an MT5 trading account to trade in stock CFDs with Highness Investment LLC. To open an MT5 account, click on the provided link.</h3>
          </div>
          <div className="forex-question bg-primary text-gray-100">
            <h2 className='text-xl bg-[#2b61ac] p-5'>What are the types of instruments used for trading on MT5 at Highness Investment LLC?</h2>
            <h3 className='mt-3 p-5'>You may trade in all instruments used at Highness Investment LLC on the MT5 platform, including stock CFDs, stock indices CFDs, Forex, CFDs on cryptocurrencies, CFDs on precious metals, and CFDs on energies.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
