import React from 'react'
import './Navbar.css'
import nurenta from "../../assets/nurenta.png"

export default function Navbar() {
  return (
    <div className='navbarcon'>
        <div className='container'>
            <div className='logo_sign_con'>
                <div className='logocon'>
                    <img src={nurenta} alt="logo"  style={{width:"150px"}}/>
                </div>
                <div className='signup-signin'>
                    <span className=' btn btn-main'> Sign in</span>
                    <span className='btn'> Sign up</span>
                
                </div>

            </div>
          


        </div>

    </div>
  )
}
