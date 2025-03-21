import React from 'react'
import Image from 'next/image';
type props = {
  blog: {
        id: number;
        title: string;
        summary: string;
        date: string;
        image: string;
    }
}
const Blogcard = ({blog}:props) => {
     const {title,summary,date,image} = blog;
  return (
    <div className='bg-indigo-950 rounded-md overflow-hidden '>
        <Image src={image} width={300} height={300} className="w-full object-cover"/>
         
         <div className='p-6'> 
<p className='rounded-sm px-6 py-1.5 text-white w-fit bg-rose-500'> News</p>
         <h1 className='font-bold duration-200 text-base cursor-pointer text-gray-200 mb-2 mt-6 hover:text-gray-100 hover:underline'> {title}</h1> 
         <p className='text-xm font-semibold text-opacity-70 text-gray-400 '> {summary}</p>
         <div className='mt-4 mb-4 w-full h-[1.5px] bg-gray-400 opacity-45'> </div> 
         <div className='flex justify-between items-center'>
          <h3 className='text-gray-300 font-bold text-sm'> {date}</h3>
          <button className='text-base hover:text-rose-500 text-gray-200 underline font-bold'> Read More</button>
           </div>
         </div>
         
         </div> 



      

  )
}

export default Blogcard
