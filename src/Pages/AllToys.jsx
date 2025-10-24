import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router'
import SingleData from '../Components/SingleData';
// import { useLoaderData } from 'react-router'
// import SingleData from '../Components/SingleData';
// import { Helmet } from 'react-helmet-async';


function AllToys() {
    // const data = useLoaderData();

const data = useLoaderData();
    // console.log(data)
  return (
    <div>
    {/* <Helmet>
              <title>All toys</title>
            </Helmet> */}
            <Helmet>
              <title>All toys</title>
            </Helmet>
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-10'>
      
        {
            data.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description} toyId={singledata.toyId}/>)
            )
        }
      
    </div>
    </div>
  )
}

export default AllToys
