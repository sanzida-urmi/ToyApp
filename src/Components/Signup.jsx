import React from 'react'
import { Link } from 'react-router'

function Signup() {
  return (
    <div className='flex justify-center items-center bg-gradient-to-br from-orange-400 via-red-500 to-orange-700 min-h-screen'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-orange-600">
        <fieldset className="fieldset">
          <label className="label text-orange-800">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label text-orange-800">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <Link to="/" className="btn bg-orange-500 mt-4 text-white">Register</Link>
          <p> Already have an account? please{" "}  
            <Link to='/login'>Login</Link>
          </p>
        </fieldset>
      </div>
    </div>
   </div>
  )
}

export default Signup
