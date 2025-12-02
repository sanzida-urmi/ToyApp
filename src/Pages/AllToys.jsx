import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router'
import SingleData from '../Components/SingleData';

function AllToys() {


  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  const [selectedBrands, setSelectedBrands] = useState([]);
  // const [selectedBrands, setSelectedBrands] = useState([]);


  const handleAscending =()=>{
    const sorted = [...data].sort((a,b)=>a.price - b.price);
    setData(sorted)
  }

   const handleDescending =()=>{
    const sorted = [...data].sort((a,b)=>b.price - a.price);
    setData(sorted)
  }

  // filter 
  const handleBrandFilter =(brand)=>{
    let updated;

    if(selectedBrands.includes(brand)){
      updated = selectedBrands.filter(b=> b!==brand);
    }
    else {
      updated = [...selectedBrands, brand];
    }
    setSelectedBrands(updated);
  

  if (updated.length === 0){
    setData(loadedData);
  } else {
    const filtered = loadedData.filter(item => updated.includes(item.brand))
    setData(filtered);
  }}



  return (
    <div >
              <Helmet>
              <title>All toys</title>
            </Helmet>

           <div className='flex justify-between gap-2 flex-col sm:flex-row'>
             <div className=' sm:w-1/5 sm:h-screen sm:sticky sm:top-16  sm:mx-0 mx-auto '>

              <button className='btn bg-orange-500 sm:block ' onClick={handleAscending}>Ascending by Price</button>
              <button className='btn bg-orange-500 my-5' onClick={handleDescending}>Descending  by Price</button>
              <div>
                <button className='text-orange-500 font-semibold text-2xl'>Filter By</button>
                <div className='filter-section text-orange-400 mt-5'>
                  

            {["Lego","Blockify","Barbie","SnuggleBear","DinoWorld","MiniDoc","Plastic","Marvel"].map(brand => (

          <label key={brand}>
            <input 
            className='ml-3'
            type='checkbox'

            checked={selectedBrands.includes(brand)}
            onChange={()=> handleBrandFilter(brand)}
            />
            {brand}
          </label>
         ))}
      </div>

              </div>
            </div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-0 pt-10 pb-10 overflow-y-auto h-screen w-full'>
      
        {
            data.map(singledata => (<SingleData key={singledata.toyId} pictureURL={singledata.pictureURL} toyName={singledata.toyName} rating={singledata.rating} availableQuantity={singledata.availableQuantity} price={singledata.price} sellerEmail={singledata.sellerEmail} subCategory={singledata.subCategory} sellerName={singledata.sellerName} description={singledata.description} toyId={singledata.toyId}/>)
            )
        }
      
    </div>
           </div>

    </div>
  )
}

export default AllToys
