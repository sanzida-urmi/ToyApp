import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import Details from './Pages/Details.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import Profile from './Pages/Profile.jsx';
import Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';
import Error from './Pages/Error.jsx';
import AllToys from './Pages/AllToys.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Context/AuthProvider.jsx';
import PrivateRoute from './Private/PrivateRoute.jsx';
import { HelmetProvider } from 'react-helmet-async';
import View from './Pages/View.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        // hydrateFallbackElement: <span className="loading loading-spinner text-warning"></span>,
        hydrateFallbackElement: <span className='loading loading-spinner text-warning'></span>,
        loader: ()=>fetch('/Data.json'),
      },
      {
        path: "/details/:toyId",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-toys",
        // hydrateFallbackElement: <span className="loading loading-spinner text-warning"></span>,
                hydrateFallbackElement: <span className='loading loading-spinner text-warning'></span>,
        loader: ()=>fetch('/Data.json'),
        Component: AllToys,
      },
       {
    path: "/login",
    Component: Login
  },
  {
    path: "/signup",
    Component: Signup
  },
  {
    path: "/view",
    Component: View
  },
    ]
  },
 
  
  {
    path: "*",
    Component: Error,
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthProvider>
     <RouterProvider router={router} />
      <ToastContainer />
      </AuthProvider>
      </HelmetProvider>
  </StrictMode>,
)
