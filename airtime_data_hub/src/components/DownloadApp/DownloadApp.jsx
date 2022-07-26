import React from 'react'
import './DownloadApp.css'
import girlImage from '../../assets/girlImage.png'
// import call from '../../assets/call.gif'
import callText from '../../assets/callText.gif'
import msg from '../../assets/msg.gif'
import blob1 from '../../assets/blob2.svg'
import landing from '../../assets/landing.svg'
import mockUp from '../../assets/mk.svg'

import playstore from '../../assets/playstore.svg'
import { FaApple } from 'react-icons/fa';


export default function DownloadApp() {
  return (
    <div className='downloadapp_con'>
        <div className='container'>
            <div className='downloadappMain_con'>
                <div className='left_text'>
                    <h1>Buy Data and Convert Airtime to Cash</h1>
                    <p>Get your automated data and airtime delivery, instant airtime to cash, and also pay all your bills at no extra cost.</p>
                    <div className='download'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='btn '> <FaApple style={{marginRight:"5px"}}/>Get on iPhone</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"> <span className='btn'><img src={playstore}  style={{width:"15px"}} alt="andriod logo" /> Get on Andriod</span></a>

                    </div>


                </div>

                <div className='right_image_main_con'>
                    <div className='image_style_con' >
                        <img src={mockUp} alt="" />

                    </div>
                    {/* <div className='image_style_con' style={{color:"white", backgroundImage:`url("${blob1}")` , backgroundRepeat:"no-repeat", backgroundSize:"100%" }}>
                        <img src={girlImage} alt="girl_image" style={{width:"100%", display:"block"}} />
                        <img className='call' src={callText} alt="" style={{width:"100px"}} />
                        <img className='msg' src={msg} alt="" style={{width:"100px"}} />


                    </div>  */}
                
                </div>
                                     {/* <img  className='blops' src={blob1} alt="blop"style={{width:"100%"}} /> */}
                        {/* <img  className='call'src={call} alt="" style={{width:"100px"}} /> */}

            </div>
          

        </div>
    </div>
   
  )
}
