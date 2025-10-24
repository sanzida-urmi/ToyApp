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
  console.log(location.pathname);

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
    <div className="navbar bg-orange-600 shadow-sm break-all">
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
        <a className="btn btn-ghost   text-xl break-all wrap-anywhere break-all">
          ToyTopia{" "}
        </a>
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
