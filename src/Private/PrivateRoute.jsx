// import React, { use } from 'react'
// import { Navigate, useLocation } from 'react-router';
// import { ClimbingBoxLoader } from 'react-spinners';
// import { AuthContext } from '../Context/AuthContext';

import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";

function PrivateRoute({children}) {
  // const { user, loading } = use(AuthContext);

  // const location = useLocation();
  // console.log(location);

  const {user, loading} =use(AuthContext);
  const location = useLocation();
  console.log(location);

  // if (loading) {
  //   return (
  //     <div className="h-[97vh] flex items-center justify-center">
  //       <ClimbingBoxLoader color="#e74c3c" />
  //     </div>
  //   );
  // }

  if(loading){
    return(
      <div className="h-[97vh] flex justify-center items-center">
        <ClimbingBoxLoader color="#e74c3c"/>
      </div>
    )
  }

  // if (!user) {
  //       localStorage.setItem("store", location.pathname);
  //   return <Navigate to="/" state={location.pathname} />;
  // }

  if(!user){
    localStorage.setItem("store",location.pathname);
    return <Navigate to="/" state={location.pathname}/>
  }

  return children;
}

export default PrivateRoute
