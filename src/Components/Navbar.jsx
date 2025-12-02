import React, { use } from "react";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../Context/AuthContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

function Navbar() {
  
  const { user, setUser, signoutFunction, loading, setLoading } =
    use(AuthContext);
    
  console.log(user);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.pathname);

  const signouthandle = () => {
    signoutFunction()
      .then(() => {
        toast.success("successfully signout");
        setUser(null);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="navbar bg-orange-600 shadow-sm break-all py-0 rounded-sm">
      <div className="navbar-start break-all wrap-anywhere">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu text-orange-500 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white" : ""
                }
                to="/all-toys"
              >
                All Toys
              </NavLink>
            </li>

            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " border-b-2 border-white" : ""
                  }
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>

       <div className="flex flex-col sm:flex-row justify-center items-center">
         <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current h-5 sm:h-7">
      <path
        d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
    </svg>
        <a className="sm:font-bold text-xl sm:text-sm break-all wrap-anywhere break-all">
          ToyTopia{" "}
        </a>
       </div>

      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " border-b-2 border-white" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " border-b-2 border-white" : ""
              }
              to="/all-toys"
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " border-b-2 border-white" : ""
              }
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? " border-b-2 border-white" : ""
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>

          {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white" : ""
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {loading ? (
          <HashLoader color="#FFFFFF" />
        ) : user ? 
        
        (
          <div className="text-center gap-2 space-y-3.5 justify-center flex items-center">
          
                      <button className="tooltip tooltip-bottom"
            data-tip ={user?.displayName || "unknown user"}>


              <img src={user.photoURL?user.photoURL : "https://via.placeholder.com/88"}
              className="h-[40px] w-[40px] rounded-full mx-auto border-1 border-amber-500 mt-3"
              alt="" />

            </button>

            <button onClick={signouthandle} className="text-orange-600 bg-white px-4 py-2.5 rounded-md font-semibold cursor-pointer">
              Signout
            </button>

          </div>
        ) : (
         
          <button className="px-3 py-2 text-white rounded-md font-semibold cursor-pointer">
            <Link to="/login" state={location.pathname} className="btn">
              Login
            </Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
