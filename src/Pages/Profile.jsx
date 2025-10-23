import React, { use } from 'react'
import { AuthContext } from '../Context/AuthContext';

function Profile() {

  const { user, signoutUserFunc, setUser, loading, setLoading } =
    use(AuthContext);
  console.log(user);

  return (
    <div className='border-2 border-gray-700 justify-center items-center flex h-[400px]'>
      <div className="card card-side bg-base-100 shadow-sm text-orange-500 w-1/3 mx-auto  border-2 border-orange-200">
  <figure>
    <img
      src={user.photoURL}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
  </div>
</div>
    </div>
  )
}

export default Profile
