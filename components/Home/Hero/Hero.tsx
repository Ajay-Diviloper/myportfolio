import { BaseInfo } from '@/Data/data'
import React from 'react'
import { FaDownLong } from 'react-icons/fa6'
import Image from 'next/image' // ✅ Corrected import for Next.js Image component

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] h-screen bg-[#0f0715] overflow-hidden relative'>
      {/* Container */}
      <div className='flex justify-center flex-col w-[90%] lg:w-[80%] h-full mx-auto'>
        {/* Grid Layout for Text and Image */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
          
          {/* Left Content Section */}
          <div> 
            <h2 data-aos = 'fade-left' data-aos-delay = '100' className='text-xl md:text-3xl lg:text-4xl text-gray-300 font-semibold capitalize'>
              next {BaseInfo?.name}
            </h2> 
            <h1  data-aos = 'fade-right' className=' text-bg mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold md:leading-[3rem] capitalize text-gray-400'>
              {BaseInfo.position}
            </h1>

            <p data-aos = 'fade-left' data-aos-delay = '200' className='mt-6 text-sm md:text-base text-gray-200 text-opacity-80 font-normal'>
              {BaseInfo.description}
            </p>

            {/* Download Button */}
            <button data-aos = 'zoom-in' data-aos-delay = '300' className='md:px-8 md:py-2.5 py-2 px-6 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900 flex items-center space-x-2'> 
              <span>Download</span>
              <FaDownLong />
            </button>
          </div>

          {/* Right Side - Profile Picture */}
          <div
          data-aos = 'zoom-in' data-aos-delay = '400'
          className='mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 '>
            <Image 
              src={BaseInfo.profilePic} 
              alt={BaseInfo.name} 
              width={500}
           height={500}
           className='rounded-[3rem]'
            />
          </div>

        </div>
      </div> 
    </div>
  )
}

export default Hero
