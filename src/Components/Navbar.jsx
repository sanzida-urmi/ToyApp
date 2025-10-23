import React, { use } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import {AuthContext} from "../Context/AuthContext";
import { ClockLoader } from "react-spinners";
import { toast } from "react-toastify";
function Navbar() {

  const { user, signoutUserFunc, setUser, loading, setLoading } =
    use(AuthContext);
  console.log(user);
  const navigate = useNavigate(); 

   const location = useLocation();
  console.log(location.pathname);

  const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        navigate('/')
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  return (
    <div className="navbar bg-orange-600 shadow-sm">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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

            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? " border-b-2 border-white" : ""
                }
                to="/profile"
              >
                Profile
              </NavLink>
            </li> */}

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
        <a className="btn btn-ghost text-xl">ToyTopia </a>
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

          {/* <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b-2 border-white" : ""
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </li> */}

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
          <ClockLoader color="#e74c3c" />
        ) : user ? (
          <div className="text-center space-y-3 border-2 border-amber-400 gap-2 justify-center items-center flex">
          
            <button>
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                className="h-[40px] w-[40px] rounded-full mx-auto border-2 border-amber-400 mt-3"
                alt=""
              />
            </button>

            <div
              className="dropdown menu rounded-box bg-base-100 shadow-sm border-2 border-amber-400">
              <button onClick={handleSignout} className="text-orange-600 px-4 py-2 rounded-md font-semibold cursor-pointer">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button className=" text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
        <Link to="/login" state={location.pathname} className="btn">Login</Link>
          </button>
         
        )}
        </div>

    </div>
  );
}

export default Navbar;
