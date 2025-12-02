import React, { useState } from 'react'
import { toast } from 'react-toastify';
export default function Contact(){
  const [formData, setFormData]= useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast("Thank you. we will be back to you soon");
    setFormData({name: "", email: "", message: ""})
  };

  return (
    <div className='px-5 md:px-20 py-10'>
      <h1 className='text-4xl font-bold text-center mb-5 text-orange-500'>Contact Us</h1>
<p className='text-center text-gray-600 max-w-2xl mx-auto'>
  Have questions or feedback? we would love to hear from you.
  Fill out the form below or reach us directly via email or phone.
</p>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-12'>
{/* contact  */}
<div className='space-y-6'>
<div>
  <h2 className='text-2xl font-semibold text-orange-400'>Email</h2>
  <p className='text-gray-700 '>Contact@toysruslocal.com</p>
</div>
<div>
  <h2 className='text-2xl font-semibold text-orange-400'>Phone</h2>
  <p className='text-gray-700 '>+880 12345 678936</p>
</div>
<div>
  <h2 className='text-2xl font-semibold text-orange-400'>Address</h2>
  <p className='text-gray-700 '>123 Toy street, Dhaka</p>
</div>

</div>

<form className='space-y-5 text-orange-400' onSubmit={handleSubmit}>
  <div>
    <label className='block text-gray-700 font-medium mb-2'>Name</label>
    <input 
    type='text'
    name='name'
    value={formData.name}
    onChange={handleChange}
    required
    className='w-full border-2 border-amber-400 rounded-lg px- py-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
    />
  </div>

  <div>
    <label className='block text-gray-700 font-medium mb-2'>Email</label>
    <input 
    type='email'
    name='email'
    value={formData.email}
    onChange={handleChange}
    required
    className='w-full border-2 border-amber-400 rounded-lg px- py-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
    />
  </div>
  <div>
    <label className='block text-gray-700 font-medium mb-2'>Message</label>
    <textarea 
    name='message'
    value={formData.message}
    onChange={handleChange}
    required
    rows="5"
    className='w-full border-2 border-amber-400 rounded-lg px- py-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
    > </textarea>
  </div>
<button type='submit' className='btn bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition'>
  Send message
</button>
</form>

</div>
    </div>
  )

}
