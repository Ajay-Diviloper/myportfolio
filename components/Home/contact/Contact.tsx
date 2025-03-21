import React from 'react'
import Contactform from './Contactform'
import Contactinfo from './Contactinfo'

const Contact = () => {
  return (
    <div className='pt-16 pb-16 bg-[#050709]'>
   <div className=' w-[90%] sm:w-[80%] mx-auto gap-10 items-center mt-10 grid grid-cols-1 xl:grid-cols-2'> 
{/*contact forms*/}
<div> 
<Contactform/>
</div>

{/*contact infor*/}
<div className='xl:mx-auto'> 
<Contactinfo/>
</div>
   </div>
    </div>
  )
}

export default Contact
