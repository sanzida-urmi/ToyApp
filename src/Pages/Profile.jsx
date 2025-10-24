import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

function Profile() {

  const {
      user,
      setUser,
      signoutFunction,
      passResetFunction,
      updateProfileFunction,
      loading,
      setLoading,
    } = useContext(AuthContext);

const [name,setName] = useState(user?.displayName || "");
const [photoURL, setPhotoURL]=useState(user?.photoURL || "");
console.log(user);

const updatehandle= async(e)=>{
  e.preventDefault();
  const Uname = e.target.name.value;
  const PhotoURL = e.target.photourl.value;
  if(!user)
    return;
  console.log(Uname);
  setLoading(true);

  try{
    await updateProfile(auth.currentUser,{
      displayName: Uname,
      photoURL: PhotoURL,
    });
  
      setUser({ ...user,displayName: Uname, photoURL: PhotoURL});
      console.log(user);
      toast.success("successfully updated");
  } catch(err){
    console.log(err);
    toast.error("Failed to update profile");
  } finally {
    setLoading(false);
  }
    
};


  return (
<div className='flex flex-col lg:flex-row break-all justify-center gap-3 items-center border-2 border-amber-300'>
  <Helmet>
    <title>Profile</title>
  </Helmet>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-orange-500">
       <form onSubmit={updatehandle}>
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
      
      <div className="card card-side bg-base-100 shadow-sm text-orange-500 w-full mx-auto  border-2 border-orange-200 flex flex-col">
  <div>
    <figure className="border-2  w-7/12 mx-auto h-7/12  border-amber-400 ">
    <img
      src={user.photoURL}
      
      alt="" />
  </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title mx-auto">Name: {user.displayName}</h2>
    <p className="card-title mx-auto">Email:{user.email}</p>
    <Link className="underline text-end mb-2" to='/view' state={user.photoURL}>View Photo url</Link>


  </div>
</div>
    </div>

    </div>
  )
}

export default Profile
