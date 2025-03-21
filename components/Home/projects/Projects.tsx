import SectionHeading from '@/components/Heper/SectionHeading'
import { projectData } from '@/Data/data'
import React from 'react'
import Link from 'next/link'
import Image from "next/image";

const Projects = () => {
  return (
    <div className='pb-16 pt-16 bg-[#050709]'>
  <SectionHeading> Projects </SectionHeading>
  <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center'> 
{projectData.map((project)=>{
    return (
        <div key={project.id} className='hover:scale-105 duration-300 transition-all'> 
        <Link href={project.url} target='blank'>
        <Image src={project.image} alt= 'projects' width={300} height={300} className='mx-auto w-full'/> 
        </Link>
        </div> 
    )
})}


  </div>
    </div>
  )
}

export default Projects
