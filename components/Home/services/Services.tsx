import SectionHeading from '@/components/Heper/SectionHeading'
import { servicesData } from '@/Data/data'
import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading> Services</SectionHeading>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[80%] mx-auto items-center gap-18 mt-5'> 
    {servicesData.map((service)=>{
        return <div key= {service.id}> 
<ServiceCard service={service}/>
        </div>
    })}
    </div>
    </div> 
  )
}

export default Services
