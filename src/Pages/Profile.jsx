import React, { use, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { Link } from 'react-router';

function Profile() {

  const { user, signoutUserFunc, setUser, loading, setLoading } =
    use(AuthContext);

const [name, setName] = useState(user?.displayName || "");
const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  console.log(user);

  const handleUpdate =async  (e) => {
  e.preventDefault();
  const Uname = e.target.name.value;
  const PhotoURL = e.target.photourl.value;
  if (!user) 
    return;

  console.log(Uname)
  setLoading(true);

  // updateProfile(user, {
  //   displayName: name,
  //   photoURL: photoURL
  // })
  //   .then(() => {
  //     // Update context user
  //     setUser({ ...user, displayName: name, photoURL: photoURL });
  //     toast.success("Profile updated successfully!");
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     toast.error(error.message);
  //     setLoading(false);
  //   });


   try {
      await updateProfile(auth.currentUser, {
        displayName: Uname,
        photoURL: PhotoURL,
      });
  console.log(Uname)

      // local state update
      setUser({ ...user, displayName: Uname, photoURL:PhotoURL });
      console.log(user);

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
};


  return (
<div className='flex justify-center gap-3 items-center border-2 border-amber-300'>
  <Helmet>
                    <title>Profile</title>
                  </Helmet>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-orange-500">
       <form onSubmit={handleUpdate}>
         <fieldset className="fieldset">
          <h1 className='text-center font-semibold text-2xl'>Update Profile</h1>
          <label className="label text-orange-500">Name</label>
          <input type="text" className="input" placeholder="Name" name='name' />

          <label className="label text-orange-500">PhotoURL</label>
          <input type="text" className="input" placeholder="PhotoURL" name='photourl'/>
          
          <button type='submit'  className="btn btn-neutral mt-4">Change</button>
        </fieldset>
       </form>
      </div>
    </div>

    <div className=' justify-center items-center flex h-[400px] border-2 border-red-500'>
      
      <div className="card card-side bg-base-100 shadow-sm text-orange-500 w-full mx-auto  border-2 border-orange-200">
  <figure>
    <img
      src={user.photoURL}
      alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.displayName}</h2>
    <p>{user.email}</p>
    {/* <p>{user.photoURL}</p> */}
    <Link to='/view' state={user.photoURL}>View Photo url</Link>

    {/* <a 
  href={user.photoURL} 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-blue-500 underline text-sm hover:text-blue-700"
>
  View Photo url
</a> */}

  </div>
</div>
    </div>

    </div>
  )
}

export default Profile
