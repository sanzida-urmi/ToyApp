import React from 'react'
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';

function Details() {
  const location = useLocation();
   const toy = location.state || {}; 
  const { toyName, pictureURL, rating, availableQuantity, sellerName,sellerEmail,description,subCategory } = toy;
  console.log(sellerName,sellerEmail,description,subCategory,toyName)

  if (!toyName) {
    return <p className="p-6 text-red-500">No toy data found. Please go back and select a toy.</p>
  }
  const showmsg=()=>{
toast.success("submit successfully")
  }
  return (
   <div className=''>
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left text-orange-400">
      <h1 className="text-5xl font-bold">{toyName}</h1>
      <p className="py-6 text-orange-400">
        {description}
      </p>
      <p>sellerEmail: <span className='font-bold'>{sellerEmail}</span></p>
      <p>sellerName: <span className='font-bold'>{sellerName}</span></p>
      <p>subCategory: <span className='font-bold'>{subCategory}</span></p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body ">
        <fieldset className="fieldset text-orange-400">
          <h1 className='text-orange-400 text-center font-semibold text-2xl py-3'>try now form</h1>
          {/* <label className="label">Name</label> */}
          <input type="text" className="input " placeholder="Name" />

          {/* <label className="label">Email</label> */}
          <input type="email" className="input" placeholder="Email" />
          <button onClick={showmsg} className="btn bg-orange-600 mt-4 text-white">Try Now</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
   </div>
  )
}

export default Details
