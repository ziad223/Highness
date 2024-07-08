import React from 'react'
import CookiesWriter from '../../typewriterC/CookiesWriter'

const  CookiesPolicy = (params) => {
  return (
    <div className='cookiesPolicy' >
      <div className="cookiesPolicy-page-hero">
     <CookiesWriter/>
      </div>
      <div className="container">
      <div className='mb-16'>
      <h2 className='font-bold text-2xl text-[#2b61ac] mb-3'>What are Cookies?</h2>
        <p className='text-gray-600'>
        Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are used to store information about your browsing activities and preferences. Cookies enable websites to remember your actions and settings, such as login details, language preferences, and personalized content, to enhance your browsing experience.
        </p>
      </div>
      <div className='mb-16'>
        <h2 className='font-bold text-2xl text-[#2b61ac] mb-3'>Our Cookies Policy</h2>
        <p className='text-gray-600'>
        At Highness Investment LLC, we use cookies to improve the functionality and performance of our website, as well as to provide personalized content and advertisements. By using our website, you consent to the use of cookies as outlined in this policy.
        </p>
      </div>
      <div className="table-div">
        <h2 className='font-bold text-2xl text-[#2b61ac] mb-5'>We use different types of cookies, including:</h2>
        <table className=' w-[100%]'>
            <thead>
                <tr>
                    <th className='border border-gray-400 p-5 bg-[#2b61ac] text-gray-100 text-xl part-hidden'>Type of cookie	</th>
                    <th className='border border-gray-400 p-5 w-[70%] bg-[#2b61ac] text-gray-100 text-xl'>Function	</th>
                </tr>
            </thead>
            <tbody>
               <tr>
               <td className='border border-gray-400 p-5 text-[18px] text-center part-hidden'>Strictly Necessary Cookies	</td>
                <td className='border border-gray-400 p-5 text-[18px] text-center'>
                    <h2 className='font-bold mb-3 text-[#2b61ac] table-title'>Strictly Necessary Cookies</h2>
                     These cookies are essential for the operation of our website. They enable basic functions such as page navigation, secure login, and access to certain areas of the site. Without these cookies, the website may not function properly.	</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
               <td className='border border-gray-400 p-5 text-[18px] text-center part-hidden'>Performance Cookies		</td>
                <td className='border border-gray-400 p-5 text-[18px] text-center'>
                <h2 className='font-bold mb-3 text-[#2b61ac] table-title'>Performance Cookies</h2>
                     These cookies collect anonymous information about how visitors use our website. They help us analyze website traffic, identify popular pages, and improve the overall user experience. The data collected is aggregated and does not personally identify individuals.</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
               <td className='border border-gray-400 p-5 text-[18px] text-center part-hidden'>  Functionality Cookies		</td>
                <td className='border border-gray-400 p-5 text-[18px] text-center'>
                    <h2 className='font-bold mb-3 text-[#2b61ac] table-title'>Functionality Cookies	</h2>
                    These cookies allow our website to remember your preferences and provide enhanced features. For example, they can remember your language preference or customization settings, making your browsing experience more convenient.</td>
               </tr>
            </tbody>
            <tbody>
               <tr>
               <td className='border border-gray-400 p-5 text-[18px] text-center part-hidden'>Advertising Cookies	</td>
                <td className='border border-gray-400 p-5 text-[18px] text-center'>
                <h2 className='font-bold mb-3 text-[#2b61ac] table-title'>Advertising Cookies	</h2>
                    We may use advertising cookies to deliver targeted advertisements based on your interests and browsing behavior. These cookies track your visits to our website and other websites, allowing us to display relevant ads. They are used by third-party advertisers and ad networks.
               </td>
               </tr>
            </tbody>
        </table>
      </div>
      <div className='mt-10 text-center text-gray-600 leading-[1.8]'>
        <p>
        You have the option to manage cookies through your browser settings. You can choose to accept or reject cookies, delete existing cookies, or receive a notification when cookies are being used. However, please note that disabling certain cookies may impact the functionality and performance of our website.

By continuing to use our website, you acknowledge that you have read and understood our Cookies Policy and consent to the use of cookies as described herein.
        </p>
      </div>
      </div>
    </div>
  )
}

export default CookiesPolicy
