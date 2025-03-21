import React from 'react'

const Contactform = () => {
  return (
    <div className='bg-[#140c1c] rounded-lg p-4 sm:p-10'>
      <h1 className='text-bg text-2xl md:text-3xl lg:text-[2.5rem]'>
         Lets work together </h1>
         <p className='text-gray-200 mt-3 lg:text-base text-xs'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repudiandae, iste vero quaerat maxime fuga?</p>
    <form className='mt-8 block w-full overflow-hidden'> 
    <div className='  flex flex-col md:flex-row items-center justify-between gap-4'>
       
       
        <input  
        type ='text'
        placeholder='First Name'
        className='flex-1 bg-black text-white px-6 py-3 rounded outline-none'

        />
        <input 
        type ='text'
        placeholder='Last Name'
        className='flex-1 bg-black text-white px-6 py-3 rounded outline-none'
        />
         </div>
         <div className=' mt-5  flex flex-col md:flex-row items-center justify-between gap-4'>
        <input 
        type ='text'
        placeholder='Email'
        className='flex-1 bg-black text-white px-6 py-3 rounded outline-none'
        />
        <input 
        type ='text'
        placeholder='Phone Number'
        className='flex-1 bg-black text-white px-6 py-3 rounded outline-none'
        />
         </div>
         <div className=' mt-5  flex flex-col md:flex-row items-center justify-between gap-4 outline-none'>
            <select className='bg-black w-full py-3 px-6 rounded outline-none text-gray-200'> 
            <option className=' outline-none'> Select an option </option>
<option value='frontned' className=' outline-none'> Frontend</option>
<option value= 'backend' className=' outline-none'> Backend</option>
<option value='full-stack ' className=' outline-none'> Full stack</option>


            </select>
             </div> 

             <textarea className=' rounded w-full mt-5 bg-black placeholder:text-gray-600 px-4 outline-none py-3.5'
        
             placeholder='Message'
             > 

             </textarea>
             <div className='mt-4'> 

                <button className='px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full'> Send Message </button>
             </div>
    </form>
    </div>
  )
}

export default Contactform
