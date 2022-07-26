import React from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './HowItWorks.css'
import { GiTakeMyMoney } from 'react-icons/gi';
import { FaPercent } from 'react-icons/fa';
import { MdOutlinePhonelink } from 'react-icons/md';
import BtmDownloadApp from '../../components/BottomDownloadApp/BtmDownloadApp'



export default function HowItWorks() {
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
    // const NumberCircleRight = ({ number }) => {
    //     return (
    //         <div className='NumberCircleRight'>
    //             <span>{number}</span>
    //         </div>
    //     )
    // }
    return (
        <>
            <Navbar />
            
            <section className='how_it_works'>
            {/* <Banner  heading={"How does it work? "}/> */}
                <div className='container'>
                    <div className='how_it_works_main'>


                        <div className='how_it_works_con'>
                            <div className='how'>
                                <h1>How does it work? </h1>
                            </div>

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

                </div>
            </section>
            <BtmDownloadApp/>
            {/* <BtmDownloadApp/> */}
            <Footer />


        </>

    )
}
