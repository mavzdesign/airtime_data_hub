import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import blob1 from '../../assets/blob2.svg'
import girlImage from '../../assets/girlImage.png'
import callText from '../../assets/callText.gif'
import msg from '../../assets/msg.gif'
import './AboutNurenta.css'
import Footer from '../../components/Footer/Footer'
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaPercent } from 'react-icons/fa';
import { MdOutlinePhonelink } from 'react-icons/md';


export default function AboutNurenta() {
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

                    <Flow headerText={"Airtime to instant cash?"} mainText={"You over-recharged in error? you have got accumulated airtime or you are accepting airtime as payment from customers? Airtimedatahub has got you covered! You can now seamlessly convert all airtime to instant cash.Airtimedatahub allows you to convert airtime of all networks to cash within a few minutes using our user-friendly converter.Typically, we credit our customer's bank account within 3 to 5 minutes of request submission.A push notification would be sent once the transaction is completed.It is simple, fast and easy."} />
                    <NumberCircle number={<GiTakeMyMoney fontSize={50}/>} />

                    </div>

                    <div className='flow'>
                    <div></div>
                    <div className='flowRight' >
                        <div><NumberCircle number={<FaPercent fontSize={30}/>}/> </div> 
                        <FlowRight headerText={"Our Airtime Charges?"} mainText={"We charge 20% on Mtn and Airtel airtime, 25% on 9mobile and 35% on Glo, kindly note that these rates are not fixed."} />

                    </div>





                    </div>

                    <div className='flow'>
                    <Flow headerText={"Data purchase and Bills payment?"} mainText={"You can easily topup your data using the app. We sell all networks at a surprisingly affordable rate to make Internet access cheaper for all our customers.Select the network and the volume of data, type or select the beneficiary from your contact list, select your preferred bank account from our bank list to pay in, then submit your request immediately you make payment.Your data request would be processed instantly and automated once your payment is received.A push notification would be sent once the data is sent."} />

                    <NumberCircle number={<MdOutlinePhonelink fontSize={40}/>} />

                    </div>

                </div>
                      

                    </div>
        </section>
        <Footer/>
    </div>
  )
}
