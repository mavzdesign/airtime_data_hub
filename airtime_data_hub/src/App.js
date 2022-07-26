import * as React from "react";
import './App.css';
import Home from './pages/Home';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs/ContactUs";
import Faq from "./pages/Faq/Faq";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Privacy from "./pages/Privacy/Privacy";
import AboutNurenta from "./pages/AboutNurenta/AboutNurenta";
import TermsCondition from "./pages/TermsCondition/TermsCondition";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact_us" element={<ContactUs/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/how_it_works" element={<HowItWorks/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/about_nurenta" element={<AboutNurenta/>}/>
        <Route path="/terms_condition" element={<TermsCondition/>}/>
          
          

       
      </Routes>
      
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
