import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router'
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

function Forget() {

const {    user, setUser, signoutFunction, passResetFunction, updateProfileFunction, loading, setLoading
} = useContext(AuthContext);

    const location = useLocation();
    const email = location.state?.email || "";

    const forgetPasshandle =()=>{
//   const email = refEmail.current.value;
  passResetFunction(email)
  .then(res=>{
  setLoading(false);
  toast.success("check email box for reset email");
})
.catch(e=>{
toast.error(e.message);
})}

  return (
    <div className=''> 
      <Helmet>
        <title>Forget</title>
      </Helmet>

      <div className='flex flex-col gap-5   justify-center items-center pt-20'>
        <button className='p-2 text-orange-500 bg-gray-200 shadow-xl rounded-lg min-w-1/3 text-center '>{email}</button>
      <button onClick={forgetPasshandle} className='p-2 text-white-500 bg-orange-500 hover:bg-orange-600 rounded-lg shadow-xl min-w-1/3 text-center'>Reset Password</button>
      </div>
    </div>
  )
}

export default Forget
