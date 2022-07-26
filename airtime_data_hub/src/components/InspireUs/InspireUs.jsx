import React from 'react'
import "./InspireUs.css"
import inspire from '../../assets/convert.svg'

export default function InspireUs() {

    const data = [
        {
            bigtext:"10K+",
            lowertext:"Downloads"
        },
        {
            bigtext:"10K+",
            lowertext:"Active Install"
        },
     

    ]

    const Lowerbox=({bigtext,lowertext})=>{
        return(
            
                        <div className='lowerboxeX'>
                            <span className='bigtext'>{bigtext}</span>
                            <span>{lowertext}</span>
                        </div>
         

        )
    }
  return (
    <div className='inpireCON'>
        <div className='container'>
            <div className='inpireUsCon'>
                <div className='inspire'>
                    <h3>Explore More</h3>
                    <h1>Numbers Inspire Us</h1>
                    <p>At Airtimedatahub, we believe in our growth process,and we greatly inspired by our numbers as they grow.</p>

                    <div className='lowerbox' > 

                    {
                        data.map((x,i)=>{
                            return(
                                
                                    <Lowerbox  bigtext={x.bigtext}  lowertext={x.lowertext} key={i}/>
                               

                            )
                        })
                    }
                    <div className='lowerboxeX2'>
                            <span className='bigtext'>10K+</span>
                            <span>Total Users</span>
                        </div>
                    </div>

                   
                    

                </div>
                <div className='inspireImage'>
                    <img src={inspire} alt="inspire"  />

                </div>


            </div>
           

        </div>
        
        
        
    </div>
  )
}
