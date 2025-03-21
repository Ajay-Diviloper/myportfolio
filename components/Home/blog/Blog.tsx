import SectionHeading from '@/components/Heper/SectionHeading'
import { blogs } from '@/Data/data'
import React from 'react'
import Blogcard from './Blogcard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-[#0f0715]'>
      <SectionHeading> Out Blog</SectionHeading>
      <div className='gap-12 items-center w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20'> 
   {blogs.map((blog)=>{
    return (
        <div key={blog.id}>
<Blogcard blog= {blog}/> 
        </div>
    )
   })}
    </div>
    </div> 
  )
}

export default Blog
