import React from 'react'
import Image from 'next/image';


//define props type
type props = {
   skill: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}
const Skillcard = ({skill}:props) => {
    const{image, percent, title} = skill;
  return <div className='hover:bg-blue-900 mx-auto p-6 duration-300 cursor-pointer text-center bg-gray-900 rounded'>
     <Image src={image} alt='image ' className='object-contain mx-auto' width={80} height={80} />
<h1 className='text-[18px] mt-4 text-white font-[600]'> {title}</h1> 
<div className='mt-4 bg-black p-2 text-white  mx-auto opacity-50'> {percent}</div> 
    </div>
  
}

export default Skillcard
