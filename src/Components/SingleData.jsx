import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";

function SingleData({
  toyName,
  pictureURL,
  rating,
  availableQuantity,
  price,
  sellerName,
  sellerEmail,
  description,
  subCategory,
  toyId,
}) {
  console.log(price, rating, sellerName);

  const navigate = useNavigate();
  const location = useLocation();
  const from2 = location.pathname;
  const { user, setUser, signoutFunction, loading, setLoading } =
      use(AuthContext);
    console.log(user);

  const canGo = () => {
   
    console.log(location);
    if (!user){
      localStorage.setItem("store", `/details/${toyId}`);
      navigate("/login");
      return;
    }

    else{
      navigate(`/details/${toyId}`)
    }
    console.log(user);
  };

  return (
    <div className="card bg-base-100 w-10/12 sm:w-96 shadow-sm text-orange-400 border-2 mx-auto border-orange-100 break-all">
      <div>
        <figure className="h-48">
          <img src={pictureURL} alt="Shoes" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title ">{toyName}</h2>
        <div className="card-actions justify-start pt-5">
          <div className="badge badge-outline">Price: {price}tk</div>
          <div className="badge badge-outline">Rating: {rating}</div>
        </div>

        <div className="card-actions justify-start pt-1">
          <div className="badge badge-outline">
            availableQuantity: {availableQuantity}
          </div>
        </div>
        <div className="card-actions justify-end">
         
          <button onClick={canGo}>
            <Link className="btn bg-orange-500"
             state={{
              toyName, 
              pictureURL,rating,availableQuantity,price,sellerEmail,sellerName,description,subCategory
            }} to={`/details/${toyId}`
            }>View more</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export default SingleData;
