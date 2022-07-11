import React from 'react'
import './Section.css'
import {    IoMdCash, IoIosCall } from 'react-icons/io';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaDatabase } from 'react-icons/fa';



export default function Section() {

  const Contentbox =({icon,content, title })=>{
    return(

      <div className='section_grid'>
      <div className='icon'>
        <span> {icon}</span>
      </div>
      <div className='title'>
      <h3>{title}</h3>

      </div>
      <div className='content'>
        <p>{content}</p>
      </div>
      

      </div>

    )
  }
  const data =[
    {
      icon: <IoMdCash fontSize={35}/>,
      title:"Airtime to cash",
      text: "Fastest way to convert airtime to instant cash, which will be delivered to you instantly.",
    },
    {
      icon: <IoIosCall fontSize={35}/>,
      title:"Airtime Purchase",
      text: "Instant airtime topup for MTN and GLO customers, ensuring you never run out of airtime.",
    },
    {
      icon: <BsCreditCardFill fontSize={35}/>,
      title:"Bills Payment",
      text: "Pay for all your bills at no extra cost, when you use our platform, we got you covered.",
    },
    {
      icon: <FaDatabase fontSize={35}/>,
      title:"Data Topup",
      text: "Get your data instantly delivered, enjoy various data packages at affordable prices.",
    },
    

  ]

  return (
    <div className='section_con'>
      <div className='container'>
        <div className='section_main'>

          <div className='section_one'>
            <h1>Our unique features</h1>
            <p> AirtimeDataHub has all the important features you need to transact with airtime and data. And we’re not stopping here, We’ll keep adding more to make your day to day activities easier.</p>
            

          </div>

          <div className='section_two'>
          {

            data.map((x,i)=>{
              return(
                <Contentbox icon= {x.icon} content={x.text} title={x.title}  key={i} />

              )

             

            })

          }

            
           
         

          </div>
          

        </div>

      </div>

    </div>
  )
}
