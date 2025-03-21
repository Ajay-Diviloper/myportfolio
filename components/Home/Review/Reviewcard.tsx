

import React from 'react'
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
type props = {
    review: {
      id : number,
         name: string;
         clientreview: string;
         rating: number;
         profession : string;
         image : string

     }
 }

const Reviewcard = ({review}:props) => {
    const {name, clientreview, rating, profession, image} = review
  return (
    <div className='bg-[#140c1e] m-4 '>
        <div className='p-6'>  
    
        <Image src='/images/q.png' width={50} height={50} alt='image' className=''/>
        <p className='text-white opacity-70 text-xl'> {clientreview}</p>
        <Image src='/images/q.png' width={50} height={50} alt='image' className='ml-auto'/>
   </div>
   <div className='font-bold space-x-3 mx-auto flex items-center text-white rounded-full px-6 py-3 w-fit bg-indigo-900 '> 
<span> {rating}/5</span> 
<FaStar className='text-yellow-500'/>
</div>
<div className='bg-gray-100 flex items-center space-x-6 mt-2'> 
<div className='p-6 '> 
<Image src={image} width={40} height={40} alt='image' className='rounded-full' />

</div>
<div> 
<h3 className='font-bold text-lg'> {name}</h3>
<p> {profession}</p>
    </div> 

</div>

   
    </div>
  ) 
}

export default Reviewcard
