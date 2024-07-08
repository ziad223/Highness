import React from 'react'
import chat from  '../../assests/main-chat.png';
import Image from 'next/image';
import Link from 'next/link';

const MainChat = () => {
  return (
    <Link href='/support'  className='main-chat fixed bottom-5 right-5 bg-gray-300 p-2 rounded-full cursor-pointer '>
      <Image src={chat} alt='main-chat' className='main-chat-img w-[55px]'/>
    </Link>
  )
}

export default MainChat
