import React from 'react'
import './Banner.css'


export default function Banner({heading, bannerimg}) {
  return (
    <div className='Banner_wrap' >
      
        <div className='banner_text'>
         <h1>{heading}</h1> 

        </div>
        {/* <div className='Banner_image'>
        <img src={bannerimg} alt=" banner_image"  />

        </div> */}

    
    </div>
  )
}
