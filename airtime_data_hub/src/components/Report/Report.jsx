import React from 'react'
import "./Report.css"
import report from '../../assets/report.jpg'
import ProgressBar from "@ramonak/react-progress-bar";

export default function Report() {
   const  data = [
        {
            exname:"User Experience",
            progress: 95
        },
        {
            exname:"User Inteface",
            progress: 95
        },
        {
            exname:"Security",
            progress: 85
        },
        {
            exname:"Automated Processes",
            progress: 85
        },
        {
            exname:"Campains",
            progress: 30
        },
        
    ]
  return (
    <div className='reportWrapper'>
        <div className='container'>
            <div className='reportCon'>
                <div className='repotText'>
                    <h1>Airtimedatahub App Overall Report</h1>
                    <p>Since we launched in 2019, we have always been working very hard to improve our service delivery, and overall performance.</p>
                    {
                        data.map((x,i)=>{

                            return(
                                <>
                                    <p>{x.exname}</p>
                                    <ProgressBar bgColor='var(--main)' completed={x.progress} key={i} />
                                </>
                     

                            )
                        })
                    }
                    


                </div>
                <div className='reportImage'>
                    
                    <img src={report} alt="" />

                </div>

            </div>

        </div>
     
    </div>
  )
}
