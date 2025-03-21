import { contactData } from '@/Data/data'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa6'

const Contactinfo = () => {
  return (
    <>
    <div className='flex items-center space-x-8 md:mx-auto'>
    <div className=' w-10 h-10 md:w-16 md:h-16 flex-col rounded-full justify-center  flex items-center space-x-8 bg-gradient-to-r from-emerald-300 to-emerald-950'>
   
    <FaPhone  className='text-white w-4 h-4 md:w-7 md:h-7'/>

     </div> 
     <div> 
        <h1 className='text-lg sm:text-xl text-white font-bold'> Phone</h1> 
        <h1 className='text-base sm:text-lg text-white text-opacity-78'> {contactData.phone}</h1>
     </div>
     
    </div>

<div className='flex items-center space-x-8 md:mx-auto mt-8 mb-8'>
<div className=' w-10 h-10 md:w-16 md:h-16 flex-col rounded-full justify-center  flex items-center space-x-8 bg-gradient-to-r from-emerald-300 to-emerald-950'>

<FaEnvelope  className='text-white w-4 h-4 md:w-7 md:h-7'/>

 </div> 
 <div> 
    <h1 className='text-lg sm:text-xl text-white font-bold'> Email</h1> 
    <h4 className='text-base sm:text-lg text-opacity-50 text-amber-50'> {contactData.email} </h4>
 </div>
 
</div>
<div className='flex items-center space-x-8 md:mx-auto'>
<div className=' w-10 h-10 md:w-16 md:h-16 flex-col rounded-full justify-center  flex items-center space-x-8 bg-gradient-to-r from-emerald-300 to-emerald-950'>

<FaMap  className='text-white w-4 h-4 md:w-7 md:h-7'/>

 </div> 
 <div> 
    <h1 className='text-lg sm:text-xl text-white font-bold'>Adress</h1> 
    <h1 className='text-base sm:text-lg text-white text-opacity-78'> {contactData.address}</h1>
 </div>
 
</div>
</>
  )
}

export default Contactinfo
