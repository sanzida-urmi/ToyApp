import React from 'react'
import { useLoaderData } from 'react-router';
import {Helmet} from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Pagination, Autoplay,Navigation} from "swiper";
import SingleData from '../Components/SingleData';

function Home() {
  const data = useLoaderData()
  console.log(data);
  const toys = data;
  const firstsix = toys.slice(6,12);
  const best = toys.slice(0,3);
  const newtoy = toys.slice(3,6);

  return (
      <div className='pt-5'>
         <Helmet>
        <title>Home</title>
      </Helmet>

 <h2 className='text-3xl font-bold text-orange-600 text-center pb-10'>A local kids toy store platform</h2>

      <div className=' '>
        <Swiper
  modules={[Pagination, Navigation,Autoplay]}
  spaceBetween={50}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  className="h-96 w-2/3"  // Slide height fix
>
  <SwiperSlide className="flex justify-center items-center h-full">
    <img
      className="h-full object-contain w-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWBrNjoLApwDAa-C0R-2M8JZGHiVD8m1eYdA&s"
      alt="Slide 1"
    />
  </SwiperSlide>

  <SwiperSlide className="flex justify-center items-center h-full">
    <img
      className="h-full object-contain w-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgb8be6Aw5BQdujwFKf--vjmCmaUL7hCc7w&s"
      alt="Slide 2"
    />
  </SwiperSlide>

  <SwiperSlide className="flex justify-center items-center h-full">
    <img
      className="h-full object-contain w-full"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTfZC6e4-6J5pds7SHHW-usGESzbdc6SCC6NxIA9yzQHhFhS7Rg_HdA2E&s"
      alt="Slide 3"
    />
  </SwiperSlide>
</Swiper>
      </div>

<h2 className='text-3xl font-bold text-orange-600 mb-4 text-center'>Popular Toys</h2>
<p className='text-orange-600 mb-6 text-center'>This toys are loved by kids</p>

<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-10 '>
        {
            firstsix.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description} toyId={singledata.toyId}/>)
            )
        }
      
    </div>

<h2 className='text-3xl font-bold text-orange-600 mb-4 text-center'>Best Deals</h2>
<p className='text-orange-600 mb-6 text-center'>Grab the hottest toys at unbeatable prices</p>

<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-10'>
        {
            best.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description} toyId={singledata.toyId}/>)
            )
        }
      
    </div>

<h2 className='text-3xl font-bold text-orange-600 mb-4 text-center'>New Arrivals</h2>
<p className='text-orange-600 mb-6 text-center'>Cheackout the leatest toys just added to our store</p>

<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-10'>
        {
            newtoy.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description} toyId={singledata.toyId}/>)
            )
        }
      
    </div>

    </div>
  )
}

export default Home
