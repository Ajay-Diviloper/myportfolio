"use client"

import { clientReviews } from '@/Data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Reviewcard from './Reviewcard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
};

const Slider = () => {
  return (
    <Carousel infinite arrows autoPlay autoPlaySpeed={5000} responsive={responsive}>
    {clientReviews.map((review) => (
      <div key={review.id}>

        <Reviewcard review ={review}/>

      </div>
    ))}
  </Carousel>
);
  
}

export default Slider;
