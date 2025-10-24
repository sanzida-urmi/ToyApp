import React from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../Firebase/Firebase.config";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";
// import { AuthContext } from "../Context/AuthContext";
// import { FaEye } from "react-icons/fa";

import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

// import { IoEyeOff } from "react-icons/io5";


function Login() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // console.log(location.state);
  // const from = location.state?.from3 || '/'
  // console.log(from);
  //   const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const from = location.state;
  console.log(from);
  const [see, setSee] = useState(false);
  

  // const { updateProfileFunc, setLoading, signoutUserFunc, setUse,sendPassResetEmailFunc } =
  //     useContext(AuthContext);

  //     const emailRef = useRef(null);
  const {    user, setUser, signoutFunction, passResetFunction, updateProfileFunction, loading, setLoading
} = useContext(AuthContext);

const refEmail = useRef(null);

  // const handleGoogle=()=>{
  // const provider = new GoogleAuthProvider();

  // signInWithPopup(auth, provider)
  // .then((result) => {
   
  //   const user = result.user;
  //   console.log(user);

  //   const stored = location.state || localStorage.getItem("store") || "/";
  //     localStorage.removeItem("store");
  //     console.log(stored);
  //     navigate(stored);
    
  // }).catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorMessage);
   
  // });
  // }
  const googlehandle =()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider)
    .then(res=>{
      const user = res.user;
      console.log(user);
      const stored = location.state || localStorage.getItem("store") || "/";
      localStorage.removeItem("store");
      console.log(stored);
      navigate(stored);
    })
    .catch(err => {
      const errmsg = err.message;
      console.log(errmsg)
    })
  }

  // const handlesign =(e)=>{
const  signinhandle =(e) =>{
  e.preventDefault();
// e.preventDefault();
const email = e.target.email.value;
const password =  e.target.password.value;
console.log(email,password)
    // const form = e.target;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log( email, password);

  // signInWithEmailAndPassword(auth, email, password)
  // .then((res) => {
  //   // Signed in 
  //   const user = res.user;
  //   console.log(user)

  //   const stored = location.state || localStorage.getItem("store") || "/";
  //     localStorage.removeItem("store");
  //     navigate(stored);

  //   toast.success("successfully login")
  //   // navigate('/')
  //   // ...
  // })
  signInWithEmailAndPassword(auth,email, password)
  .then(res => {
    const user = res.user;
    console.log(user);

    const stored = location.state || localStorage.getItem("store") || "/";
      localStorage.removeItem("store");
      console.log(stored);
      navigate(stored);

      toast.success("successfully login")
  })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   toast(errorMessage)
  // }
  .catch(err => {
      const errmsg = err.message;
      toast(errmsg)
    })

}

// const handleForgetPassword = () => {
//     console.log("hi");
//     const email = emailRef.current.value;
//     sendPassResetEmailFunc(email)
//       .then((res) => {
//         setLoading(false);
//         toast.success("Check your email to reset password");
//       })
//       .catch((e) => {
//         toast.error(e.message);
//       });
//   };

const forgetPasshandle =()=>{
  const email = refEmail.current.value;
  passResetFunction(email)
  .then(res=>{
  setLoading(false);
  toast.success("check email box for reset email");
})
.catch(e=>{
toast.error(e.message);
})}



  return (
    // <div className="flex break-all justify-center items-center bg-gradient-to-br from-orange-400 via-pink-500 to-orange-700 min-h-screen">
    <div className="flex break-all justify-center items-center bg-gradient-to-bl from bg-orange-400 via-pink-500 to-orange-700 min-h-screen">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body text-orange-600">

          <form onSubmit={signinhandle}>
            <fieldset className="fieldset">


            <label className="label text-orange-800">Email</label>
            <input type="email" ref={refEmail} name="email" className="input" placeholder="Email" required/>

            {/* <label className="label text-orange-800">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/> */}

              <div className="relative">
                            <label className="block text-orange-800">
                              Password
                            </label>

                            {/* <input
                              type={show ? "text" : "password"}
                              name="password"
                              placeholder="Password"
                              required
                              className="input "
                            /> */}
                            <input type={see? "text" : "password"}
                            name="password"
                            placeholder="password"
                            required
                            className="input"/>

                            {/* <span
                              onClick={() => setShow(!show)}
                              className="absolute right-[30px] top-[36px] cursor-pointer z-50"
                            >
                              {show ? <FaEye /> : <IoEyeOff />}
                            </span> */}
                            <span onClick={()=>setSee(!see)}
                              className="absolute right-[30px] top-[36px] cursor-pointer z-2">
                                {see? <FaEye/> : <IoEyeOff/>}
                              </span>

                          </div>


            {/* <button
                className="hover:underline cursor-pointer"
                onClick={handleForgetPassword}
                type="button"
              >
                Forget password?
              </button> */}

              <button className="hover:underline cursor-pointer"
              onClick={forgetPasshandle} type="button">Forget password?</button>

            {/* <button type="submit" className="btn bg-orange-400 mt-4 text-white">
              Login
            </button> */}

            <button type="submit" className="btn bg-orange-400 mt-4 text-white">Login</button>


            <button  onClick={googlehandle} className="btn bg-white text-black border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

             
              
            {/* <p>
              {" "}
              First time in website? please 
              
              <Link state={from} to="/signup"><span className="text-blue-600">Register</span></Link>
            </p> */}

            <p>First time in website? please {" "}
              <Link state={from} to="/signup">
              <span className="text-blue-600">Register</span></Link>
            </p>
            
          </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
