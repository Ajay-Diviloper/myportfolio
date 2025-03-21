import SectionHeading from '@/components/Heper/SectionHeading'
import { skillsData } from '@/Data/data'
import React from 'react'
import Skillcard from './skillcard'

const Skills = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading> Skills</SectionHeading>
      <div className='mt-20 w-[80%] mx-auto grid grid-cols-1 gap-10 items-center md:grid-cols-2 lg:grid-cols-4'>
      {skillsData.map((skill)=>{
        return (
          <div key ={skill.id}> 
          {/* */}
          <Skillcard skill ={skill}/>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Skills
