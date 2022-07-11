import React from 'react'
import './Section.css'
import { IoIosWallet, IoIosGlobe, IoMdLock, IoMdPerson } from 'react-icons/io';
import { RiArrowRightSLine} from 'react-icons/ri';



export default function SectionTwo() {

  const Contentbox =({icon,content, title })=>{
    return(

      <div className='sectionTwo_grid'>
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
      icon: <IoIosWallet fontSize={35}/>,
      title:"In App Wallet",
      text: "Fund your wallet and carry out all your request,which will be processed automatically, enjoy wallet to wallet transfer and much more by funding your wallet securely.",
    },
    {
      icon: <IoIosGlobe fontSize={35}/>,
      title:"Offline Mode",
      text: "Never run out of data, we got you covered, When you run out of data, switch to offline Mode and purchase data, your request will be processed instantly and securely.",
    },
    {
      icon: <IoMdLock fontSize={35}/>,
      title:"Security",
      text: "Your security is important to us, verify your account, setup your pin which will be used in every transaction, enable fingerprint login, manage your screen lock duration and more.",
    },
    {
      icon: <IoMdPerson fontSize={35}/>,
      title:"Become an Agent",
      text: "Do you want to be an gent on Airtimedatahub? Make money through reselling data and airtime, enjoy special prices when you upgrade your account to become an agent.",
    },
    

  ]

  return (
    <div className='section_con'>
      <div className='container'>
        <div className='sectionTwo_main'>

          <div className='sectionTwo_one'>
            <h1>Unique experience for you</h1>
            <span className='btn'>Know more <RiArrowRightSLine/> </span>
            

          </div>
          <div className='sectiotwo_con'>
            <div className='sectionTwo_two'>
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

    </div>
  )
}
