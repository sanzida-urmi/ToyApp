import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
        <div className='text-white'>
      <Navbar></Navbar>
      {/* <div className='min-h-[calc(100vh-285px)]'>
       */}
       <div className='min-h-[calc(100vh-285px)]'>
        <Outlet></Outlet>
    </div>
    <div className='text-white'>
        <Footer></Footer>
    </div>
    </div>
    
  )
}

export default MainLayout
