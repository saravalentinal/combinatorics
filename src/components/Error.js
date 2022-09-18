import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div>
        <body className="body-loader">
          <div className="div-loader">
              <h1 className='error-h1'>La página a la que intentas acceder no existe</h1>
              <div className='div-button-error'>
                <Link to='/'><button className='error-button'>Home</button></Link>
              </div>
          </div>
        </body>
    </div>
  )
}

export default Error