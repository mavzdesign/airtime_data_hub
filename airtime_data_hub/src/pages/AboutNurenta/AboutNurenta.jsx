import React, {useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import blob1 from '../../assets/blob2.svg'
import girlImage from '../../assets/girlImage.png'
import callText from '../../assets/callText.gif'
import msg from '../../assets/msg.gif'
import './AboutNurenta.css'
import Footer from '../../components/Footer/Footer'
import { GiTakeMyMoney } from 'react-icons/gi';
import { BsClipboardData } from 'react-icons/bs';
import { MdOutlinePhonelink } from 'react-icons/md';


export default function AboutNurenta() {
    useEffect(() => {
    
        window.scrollTo(0, 0);
      
     
      }, [])
    const Flow = ({ headerText, mainText }) => {
        return (
            <div className='theflow' >
                <h1>{headerText}</h1>
                <p>{mainText}</p>

            </div>

        )
    }
    const FlowRight = ({ headerText, mainText }) => {
        return (
            <div className='theflowRight' >
                <h1>{headerText}</h1>
                <p>{mainText}</p>

            </div>

        )
    }
    const NumberCircle = ({ number }) => {
        return (
            <div className='numberCircle'>
                <span>{number}</span>
            </div>
        )
    }
  return (
    <div>
        <Navbar/>
        <section className='AboutNurenta'>
            <div className='container' >
                <div className='AboutNurenta_main'>
                    <div className='top_section' >
                        <div className='about_nu' >

                            <h1>About Nurenta</h1>
                            <p>AirtimeDataHub is the most reliable airtime to cash app in Nigeria. AirtimeDataHub is a one-stop shop that allows users to convert airtime to instant cash and more. With our newly upgraded app, you can now easily purchase your data at a surprisingly affordable price, recharge airtime at a discounted rate and also pay bills at no extra charge!
                                Our ultimate aim is building a “All-in-one” mobile app where people could easily fulfil part of their daily needs as we see Internet as a tool to make everyone's life simpler. The great attention to detail and interactivity also reflect the company's years of experience.
                                You can effortlessly do all the following via our app: Instant airtime to cash, Instant data bundles and airtime recharge at cheaper prices, Bill payment at no extra cost, Transfer funds, Instant wallet funding, Automated and instant fund withdrawal, My prices for users to have a full glance of all product prices, Referral commission, Improved
                                security through fingerprint/PIN authentication for sign in, PIN authorization for all transactions, Buy data and airtime from your contact list, 24/7 support through our whatsapp channel for all enquiries, complaints and suggestions, Instant and detailed in-app notifications and receipts for all transactions, Full automation of all products, And much more.</p>
                            
                        </div>

                         <div className='image_style_con' style={{color:"white", backgroundImage:`url("${blob1}")` , backgroundRepeat:"no-repeat", backgroundSize:"100%" }}>
                        <img src={girlImage} alt="girl_image" style={{width:"100%", display:"block"}} />
                        <img className='call' src={callText} alt="" style={{width:"100px"}} />
                        <img className='msg' src={msg} alt="" style={{width:"100px"}} />


                    </div> 


                      

                    </div>
                    

                </div>

            </div>
            <div className='second_section'>
                <div className='container'>
                <div className='flow'>

                    <Flow headerText={"AIRTIME TO CASH"} mainText={"Fastest way to convert airtime to instant cash, which will be delivered to you instantly."} />
                    <NumberCircle number={<GiTakeMyMoney fontSize={50}/>} />

                    </div>

                    <div className='flow'>
                    <div></div>
                    <div className='flowRight' >
                        <div><NumberCircle number={<BsClipboardData fontSize={30}/>}/> </div> 
                        <FlowRight headerText={"DATA & AIRTIME"} mainText={"Instant airtime topup and data instantly delivered, enjoy various data packages."} />

                    </div>





                    </div>

                    <div className='flow'>
                    <Flow headerText={"BILLS PAYMENT"} mainText={"Pay for all your bills at no extra cost, when you use our platform, we got you covered."} />

                    <NumberCircle number={<MdOutlinePhonelink fontSize={40}/>} />

                    </div>

                </div>
                      

                    </div>
        </section>
        <Footer/>
    </div>
  )
}
