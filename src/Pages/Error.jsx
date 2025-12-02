import React from 'react'
import { Helmet } from 'react-helmet-async';

function Error() {
  return (
    
    <div className='flex justify-center items-center text-3xl font-semibold min-h-screen text-orange-500'>
        <Helmet>
      <title>Error</title>
    </Helmet>
      Error 404
      page not found
      </div>
    
    
  )
}

export default Error
