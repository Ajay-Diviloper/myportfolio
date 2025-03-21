'use client'

import React, { useEffect } from 'react'

import Hero from './Hero/Hero'
import About from './about/About'
import Services from './services/Services'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import Review from './Review/Review'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos"); // Dynamically import AOS
      AOS.default.init({
        duration: 1000, // Animation duration in ms
        once: true, // Whether animation happens only once
        easing: "ease-in-out", // Animation easing type
        offset: 100, // Offset from the original trigger point
      });
    };

    initAOS();
  }, []);
  return (
    <div className='overflow-hidden'>
<Hero/>
<About/>
<Services/> 
<Projects/>
<Skills/>
   <Review/>
   <Blog/>
   <Contact/>
    </div>
  )
}

export default Home
