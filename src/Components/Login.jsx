import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
   <div className='flex justify-center items-center bg-gradient-to-br from-orange-400 via-pink-500 to-orange-700 min-h-screen'>
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body text-orange-600">
        <fieldset className="fieldset">
          <label className="label text-orange-800">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label text-orange-800">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <Link to="/" className="btn bg-orange-400 mt-4 text-white">Login</Link>
          <p> First time in website? please {" "} 
            <Link to='/signup'>Register</Link>
          </p>
        </fieldset>
      </div>
    </div>
   </div>
  )
}

export default Login
