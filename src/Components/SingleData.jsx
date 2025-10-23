import React, { use } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Context/AuthContext';

function SingleData({toyName,pictureURL,rating,availableQuantity,price,sellerName,sellerEmail
,description,subCategory}) {
    console.log(price,rating,sellerName)

      const navigate = useNavigate();

      const location = useLocation();
      console.log(location);

    const { user, setUser, loading, setLoading } =
        use(AuthContext);
      console.log(user);

    const canGo=()=>{
      if(!user){
navigate('/login');
      }
console.log(user);

    }
  return (
    <div className="card bg-base-100 w-96 shadow-sm text-orange-400 border-2 border-orange-100">
  <div >
    <figure className='h-48'>
    <img
      src={pictureURL}
      alt="Shoes" />
  </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title ">{toyName}</h2>
    {/* <p className='pb-4'>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
    <div className="card-actions justify-start pt-5">
      <div className="badge badge-outline">Price: {price}tk</div>
      <div className="badge badge-outline">Rating: {rating}</div>
    </div>

    <div className="card-actions justify-start pt-1">
      <div className="badge badge-outline">availableQuantity: {availableQuantity}</div>
    </div>
    <div className="card-actions justify-end">
      <button onClick={canGo}>
        <Link   state={{ toyName, pictureURL, rating, availableQuantity, price,sellerName,sellerEmail,description,subCategory }}
 to="/details" className="btn bg-orange-600">View More</Link>
      </button>
    </div>
  </div>
</div>
  )
}

export default SingleData
