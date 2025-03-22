import SectionHeading from '@/components/Heper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image'
const About = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
   {/*sectionheading*/}
   <SectionHeading> About Company</SectionHeading>

   <div className=' w-[90%] lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 items-center mt-20'>
<div data-aos = 'fade-left' data-aos-anchor-placement ='top-center'>
    <h2 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold'> {aboutInfo.title}</h2>
<p className='mt-6 text-base text-[15px] text-gray-500'> {aboutInfo.description}</p>
<div className='mt-8'>
  <div className='flex gap-3 items-center space-x-2 mb-6'> 
    <div className='bg-blue-800 w-7 h-7 flex items-center justify-center flex-col' > 
      <FaCheck className='text-white'/>
     
        </div>
        <p className='text-gray-300 text-sm sm:text-base md:text-lg font-bold '>Frontend Developement </p>
    </div> 
    <div className='flex gap-3 items-center space-x-2 mb-6'> 
    <div className='bg-blue-800 w-7 h-7 flex items-center justify-center flex-col' > 
      <FaCheck className='text-white'/>
     
        </div>
        <p className='text-gray-300 text-sm sm:text-base md:text-lg font-bold '>Backend Developement </p>
    </div> 
    <div className='flex gap-3 items-center space-x-2 mb-6'> 
    <div className='bg-blue-800 w-7 h-7 flex items-center justify-center flex-col' > 
      <FaCheck className='text-white'/>
     
        </div>
        <p className='text-gray-300 text-sm sm:text-base md:text-lg font-bold '>FullStack Developement </p>
    </div> 
   </div>
   
</div>

{/* {stats content} */}

<div 
data-aos = 'zoom-in' data-aos-delay ="5000"
className='grid grid-cols-2 items-center gap-16'>
  <div className='text-center'> 
    <Image src='/images/customer.png' 
    width={50}
    height={50}
    alt='iamge'
    className='mx-auto'
    />  
    
    <p className='mt-3 font-bold text-center text-white '> {aboutInfo.client}</p>
    <p className='text-gray-400'> Satisfied Customers</p>
  </div>

  {/* second stats */}

  <div className='text-center'> 
    <Image src='/images/experience.png' 
    width={50}
    height={50}
    alt = 'image'
    className='mx-auto'
    />  
    
    <p className='mt-3 font-bold text-center text-white '> {aboutInfo.experience}</p>
    <p className='text-gray-400'> Year experinece</p>
  </div>

  {/* third stats */}
  <div className='text-center'> 
    <Image src='/images/completed.png' 
    width={50}
    height={50}
    alt = 'image'
    className='mx-auto'
    />  
    
    <p className='mt-3 font-bold text-center text-white '> {aboutInfo.website}</p>
    <p className='text-gray-400'> Completed Projects</p>
  </div>
  <div className='text-center'> 
    <Image src='/images/rocket.png' 
    width={50}
    height={50}
    alt = 'image'
    className='mx-auto'
    />  
    
    <p className='mt-3 font-bold text-center text-white '> {aboutInfo.website}</p>
    <p className='text-gray-400'> Website Launched </p>
  </div>
   </div> 

<div> 

</div>
   </div>

    </div>
  )
}

export default About
