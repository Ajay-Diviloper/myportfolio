'use client'

import React,{useEffect, useState} from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const Scrolltotop = () => {
const [isavailabe, setisavailabe] = useState(false)


useEffect(()=>{
const togglevisibilty = ()=>{
    if(window.scrollY > 300){
setisavailabe(true)
    }else {
        setisavailabe(false)
    }
}

window.addEventListener('scroll', togglevisibilty)

return ()=>{
    window.removeEventListener('scroll', togglevisibilty)
}
},[])

const Scrolltotop =()=>{
    window.scrollTo({
        top : 0,
        behavior: 'smooth'
    })
}

  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {isavailabe &&
       <button onClick = {Scrolltotop} className=' flex items-center justify-center bg-blue-900 text-white rounded-full w-12 h-12'>

        <FaArrowUp/>

        </button>}
    </div>
  )
}

export default Scrolltotop
