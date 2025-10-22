import React from 'react'
import { useLoaderData } from 'react-router'
import SingleData from '../Components/SingleData';


function AllToys() {
    const data = useLoaderData();
  
    // console.log(data)
  return (
    <div className='grid grid-cols-3 gap-5 p-10'>
        {
            data.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description}/>)
            )
        }
      
    </div>
  )
}

export default AllToys
