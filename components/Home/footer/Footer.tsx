import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='pb-16 pt-16 bg-[#0f0715]'>
      <div> 
        <Image src= '/images/logo.png' alt="logo" width={180} height={180} className='mx-auto'/>
      </div>
<div className='flex items-center flex-wrap space-y-5 justify-center space-x-10 sapce-y-4 text-white font-bold '>
      <div >Home</div>
      <div >Services </div>
      <div >Projects</div>
      <div > Reviews</div>
      <div >Contact</div>
   
    </div>
    <p className='text-white opacity-60 mt-6 text-center'>2025 All Rights Reserved</p>
    </div>
  )
}

export default Footer
