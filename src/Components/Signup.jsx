import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "../Context/AuthContext";

function Signup() {
  const [show, setShow] = useState(false);
  const { updateProfileFunc, setLoading, signoutUserFunc, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handlesubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }
    toast.success("Registration Successful");

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed up
        // navigate("/");
        // updateProfileFunc(displayName, photoURL)
        const user = res.user;

        const stored = localStorage.getItem("store") || "/";
      localStorage.removeItem("store");
      

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          
          setUser({ ...user, displayName: name, photoURL: photo });
          console.log(res);

          setLoading(false);
          navigate(stored);
          
})
            .catch((e) => {
              console.log(e);
              toast.error(e.message);
            });
        })

        // const user = res.user;
        // console.log(user)
      // })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-br from-orange-400 via-red-500 to-orange-700 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body text-orange-600">
          <form onSubmit={handlesubmit}>
            <fieldset className="fieldset">
              <label className="label text-orange-800">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                required
              />

              <label className="label text-orange-800">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input"
                placeholder="Photo URL"
                required
              />

              <label className="label text-orange-800 ">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* <label className="label text-orange-800">Password</label>
          <input type="password" className="input" placeholder="Password" required/> */}

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full bg-white/20 text-orange placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[8px] top-[36px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>

              <button
                type="submit"
                className="btn bg-orange-500 mt-4 text-white"
              >
                Register
              </button>

              <p>
                {" "}
                Already have an account? please{" "}
                <Link to="/login">
                  <span className="text-blue-600">Login</span>
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
