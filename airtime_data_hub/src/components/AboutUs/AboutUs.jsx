import React from 'react'
import './AboutUs.css'
import aboutImage from '../../assets/landing.svg'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


export default function AboutUs() {
  return (
    <div className='about_us_main'>
      <div className='container'> 
        <div className='image_about'>
          <div className='about_image'>
            <img src={aboutImage} alt="" />
          </div>
          <div className='about_text'>
            <span className='who'>Who we are</span>
            <h1>About us</h1>
            <p>AirtimeDataHub is the most reliable airtime to cash app in Nigeria. AirtimeDataHub is a one-stop
               shop that allows users to convert airtime to instant cash and more. With our newly upgraded app,
                you can now easily purchase your data at a surprisingly affordable price, recharge airtime at a discounted rate and also pay bills at no extra charge!</p>
               <NavLink to="/about_nurenta"><span style={{fontSize:"18px", color:"var(--main)"}}>Read more <MdKeyboardArrowRight fontSize={12}/></span></NavLink> 
          </div>

        </div>

      </div>
    </div>
  )
}
