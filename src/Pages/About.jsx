import React from 'react'
import { Link } from 'react-router';

export default function About() {
  return (
    <div className='px-5 md:px-20 py-10'>
      <h1 className='text-4xl font-bold text-center mb-5 text-orange-500'>
        ABout Us
      </h1>
      <p className='text-center text-gray-600 max-w-2xl mx-auto'>
        We are passionate about creating high-quality toys that bring joy,
        creativity, and imagination to children all over the world
      </p>

      {/* img  */}
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-center'>
        <img src="https://i.ibb.co.com/S46H6Drr/stock-vector-toy-shop-window-display-exterior-building-kids-toys-vector-illustration-397567921.jpg" className='rounded-2xl shadow-lg' alt="" />
        <div>
          <h2 className='text-2xl font-semibold text-orange-400 mb-3'>Who We Are</h2>
          <p className='text-gray-700 leading-7'>
            We are a dedicated team focused on providing innovative, safe, and affordable toys. Our mission is to make learning fun and to help children grow mentally and creatively
          </p>
          <h2 className='text-2xl font-semibold text-orange-400 mt-6 mb-3'>Our mission</h2>
           <p className='text-gray-700 leading-7'>
           To design toys that inspire imagination and build confidence in every child, while maintaining the highest standards of safety and quality
          </p>
        </div>

    </div>

    {/* why  */}
    <div className='mt-16'>
      <h2 className='text-3xl font-bold text-center mb-5 text-orange-500'>
        Why Choose Us?
      </h2>
<div className='grid grid-cols-1 md:grid-cols-3 gap-8  mt-10'>
<div className='p-6 shadow-lg rounded-xl border hover:shadow-2xl transition'>
  <h2 className='text-xl font-semibold  text-orange-400'>Quality</h2>
   <p className='mt-2 text-gray-600'>
       We use premium ,safe materials for every product
      </p>
</div>

<div className='p-6 shadow-lg rounded-xl border hover:shadow-2xl transition'>
  <h2 className='text-xl font-semibold  text-orange-400'>Innovation</h2>
   <p className='mt-2 text-gray-600'>
       Our toys are designed to spark creativity and imagination.
      </p>
</div>

<div className='p-6 shadow-lg rounded-xl border hover:shadow-2xl transition'>
  <h2 className='text-xl font-semibold  text-orange-400'>Trust</h2>
   <p className='mt-2 text-gray-600'>
       Thousands of parents trust us to deliver the best.
      </p>
</div>

</div>
    </div>

    {/* cta  */}
    <div className='text-center mt-16'>
      <button className='btn hover:bg-orange-600 bg-orange-500 text-white px-6 rounded-xl'>
        <Link to='/contact'>Contact Us</Link>
      </button>
    </div>
    </div>
  );
}
