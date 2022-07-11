import React from 'react'
import "./BtmDownloadApp.css"
import { FaApple } from 'react-icons/fa';
import playstore from '../../assets/playstore.svg'

export default function BtmDownloadApp() {
  return (
    <div className='BtmDownloadApp_wrap'>
        <div className='container'>
            <div className='btmdownload_con'>
                <div className='btmdownload'>
                    <h2>Download Nurenta App</h2>
                    <p>With our mobile app, you can instantly convert your airtime to cash, buy cheap data and airtime, pay your bills at zero extra cost, fund your wallet, become and agent and make more money, and finally have full control over your account.</p>
                    <div className='dowloadbtn'>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><span className='btn '> <FaApple style={{marginRight:"5px"}}/>Get on iPhone</span></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"> <span className='btn'><img src={playstore}  style={{width:"15px"}} alt="andriod logo" /> Get on Andriod</span></a>
                    </div>
                </div>



            </div>

        </div>
        
    </div>
  )
}
