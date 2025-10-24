import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from "swiper/react";

function Error() {
  return (
    
    <div className='flex justify-center items-center text-3xl font-semibold min-h-screen'>
      <Helmet>
      <title>Error</title>
    </Helmet>
      Error 404
      page not found
      </div>
    
    
  )
}

export default Error
