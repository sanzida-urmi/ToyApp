import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

function View() {
    const location = useLocation();
  const photoURL = location.state;
  
  console.log(photoURL)
  return (
    <div className='text-orange-500 wrap-anywhere'>
        <Helmet>
                            <title>PhotoURL</title>
                          </Helmet>
      {photoURL}
    </div>
  )
}

export default View
