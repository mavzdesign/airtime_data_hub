import React from 'react'
import "./Footer.css"
import nurenta from "../../assets/nurenta.png"
import { FaFacebookSquare, FaTwitter, FaInstagramSquare } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className='footerWrap'>
        
        <div className='container'>
            <div className='footer_con'>

                <div className='footer_top'>

                    <div className='buttom_logo'>
                    <NavLink to="/"><img src={nurenta} alt="logo"  style={{width:"150px"}}/></NavLink> 
                       
                    </div>

                    <div className='middle_content'>
                        <ul>
                            <li> <h4>About Us</h4></li>
                            <li> <NavLink to="/about_nurenta"> About AirtimeDataHub</NavLink> </li>
                          <li> <NavLink to="/terms_condition"> Terms and Condition  </NavLink> </li>
                           <li> <NavLink to="/privacy">Privacy Policy  </NavLink> </li>
                            <li> <NavLink to="/how_it_works ">How It Works </NavLink> </li>
                           
                        </ul>
                        <ul>
                            <li><h4>Our Services</h4></li>
                            <li> Airtime Purchase  </li>
                            <li>  Airtime to cash  </li>
                            <li>  Bills Payment</li>
                            <li>  Data Topup </li>
                            
                        </ul>

                    </div>
                    <div className='social_contact'>
                        <div className='social_'>
                            <span>
                                <FaFacebookSquare />
                                <FaTwitter/>
                                <FaInstagramSquare/>
                                

                            </span>
                        </div>
                        <div className='contact'>
                            <p>Givt mobile, Yomade shopping complex, by Awoyaya bus stop, lekki-epe Expressway, Awoyaya, Lagos</p>
                            <p> support@airtimedatahub.com</p>
                            <p> 07062242007</p>
                           

                        </div>
                        


                    </div>

                </div>

                <div className='footer_bottom'>
                <p>Airtimedatahub is a one-stop shop that enables users to convert airtime to instant cash, buy affordable data bundles with a broader focus on making users day to day activities seamless.</p>
                <p>Copyright © 2022. Nurenta Global Concept Ltd. All Rights Reserved.</p>
                <p>AirtimeDataHub Powered by Codefixbug Limited.</p>
                {/* <a href='https://www.freepik.com/vectors/data-report'>Data report vector created by katemangostar - www.freepik.com</a> */}

                </div>

            </div>

        </div>

    </div>
  )
}
