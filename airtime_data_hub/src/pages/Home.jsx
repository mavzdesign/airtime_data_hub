import React , {useEffect} from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import BtmDownloadApp from '../components/BottomDownloadApp/BtmDownloadApp'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import Footer from '../components/Footer/Footer'
import InspireUs from '../components/InspireUs/InspireUs'
import Navbar from '../components/Navbar/Navbar'
import Report from '../components/Report/Report'
import Section from '../components/Sections/Section'
import SectionTwo from '../components/Sections/SectionTwo'
import './Home.css'

export default function Home() {
  useEffect(() => {
    
    window.scrollTo(0, 0);
  
 
  }, [])
  
  return (
    
    <div>
        <Navbar/>
        <DownloadApp/>
        <AboutUs/>
        <Section/>
        <InspireUs/>
        <SectionTwo/>
        <Report/>
        <BtmDownloadApp/>
        <Footer/>
       
    </div>
  )
}
