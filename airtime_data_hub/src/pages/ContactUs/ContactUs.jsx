import React , {useEffect} from 'react'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Contact.css'

export default function ContactUs() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
 
  }, [])
  return (
    <div>
      <Navbar/>
      <section className='contactCon'>
        <div>
          
           <Banner heading={"Contact us"}/>

         
          
          <div className='mapCon'>
            <div className='container'>
              <div className='conform'>

                <div className='MainOffice'>
                  <h1>Main Office Location</h1>
                  <ul className='addressbythe_side'>
                    <li>Givt mobile, Yomade shopping complex, by Awoyaya bus stop, lekki-epe Expressway, Awoyaya, Lagos</li>
                    <li>07062242007</li>
                    <li>support@airtimedatahub.com</li>
                  </ul>
                </div>
              
                <div className='mapnurenta'> 
                <form action="
                submit">
                  <div className='namefist'>
                    <input type="text" placeholder='firstname' />
                    <input type="text"  placeholder='lastname'/>
                  </div>
                  <div className='emailcon'>
                  <input type="email"  placeholder='email'/>
                  </div>
                  <div className='messageCOn' >
                    <textarea placeholder='message' name="message" id="" cols="30" rows="10"></textarea>
                  </div>
                  <span className='btn btn-main'  >  Submit</span>
                </form>

                </div>

                

              </div>
             
            </div>
        
          <div>
            
          </div>

          </div>
         
        </div>
      </section>
      <Footer/>

    </div>
  )
}
