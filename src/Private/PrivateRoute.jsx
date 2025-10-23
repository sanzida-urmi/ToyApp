import React, { use } from 'react'
import { Navigate, useLocation } from 'react-router';
import { ClimbingBoxLoader } from 'react-spinners';
import { AuthContext } from '../Context/AuthContext';

function PrivateRoute({children}) {
  const { user, loading } = use(AuthContext);

  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClimbingBoxLoader color="#e74c3c" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" state={location.pathname} />;
  }

  return children;
}

export default PrivateRoute
