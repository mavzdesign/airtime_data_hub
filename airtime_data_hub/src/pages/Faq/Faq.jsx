import React from 'react'
import Banner from '../../components/Banner/Banner'
import faqImage from "../../assets/faq.jpg"
import Navbar from '../../components/Navbar/Navbar'
import './Faq.css'
import Footer from '../../components/Footer/Footer'

export default function Faq() {
  return (
    <div className='faq_wrap'>
      <Navbar/>
       
      <div className='faq_con'>
        <Banner heading={"Frequently Asked Questions(FAQs)"} bannerimg={faqImage}/>
        <div>
          
          <div className='container'>
          <div className='faq_sections'>
            <h1>FREQUENTLY ASKED QUESTIONS ABOUT NURENTA</h1>
         
          <section>
            <h3>What is AirtimeDataHub?</h3>
            <p>AirtimeDataHub is a 24/7 online resource that allows users to convert airtime to money, buy data bundles and recharge airtime at affordable prices, and also pay bills at ease.</p>
            <p>AirtimeDataHub keeps your wallet funds safe and secure by using the latest technology.</p>

          </section>

          <section>
            <h3>Where is AirtimeDataHub located?</h3>
            <p>AirtimeDataHub has an office in GT25, Lekki Gardens Phase One, Ajah, Lagos. We are currently available in Nigeria and are expanding to other markets soon.</p>
         

          </section>

          <section>
            <h3>How do I register?</h3>
            <p>Register quickly and easily via the app or website or through referral link.</p>
            <p>Once your registration is completed, you can start initiating your transactions. All transactions are secured by your PIN or Fingerprint ID (if available).</p>
           

          </section>

          <section>
            <h3>Which banks are available for fund withdrawal?</h3>
            <p>Via your BVN, AirtimeDataHub is able to link to any banks in Nigeria.</p>
         

          </section>


          <section>
            <h3>What card types are supported for ATM card funding?</h3>
            <p>AirtimeDataHub supports payments from Mastercard, Verve and Visa cards. All card details are fully encrypted and secured.</p>
        

          </section>

          <section>
            <h3>Brain behind AirtimeDataHub?</h3>
            <p>The service is developed by Nurenta Global Concept Ltd, a well-known reputable organization with vast experience in telecommunications.</p>
            

          </section>

          <h1>GENERAL INFORMATION</h1>

          <section>
            <h3>What should I do if I need help?</h3>
            <p>The easiest and quickest way to reach us 24/7 is to tap WhatsApp Chat under Contact Us or tap Support. You can also send an email to support@airtimedatahub.com or Call +2347062242007 or send us a DM via our Social Media channels. We guarantee a quick and comprehensive response to your complaints, suggestions and observations.</p>
          

          </section>
          <section>
            <h3>What is a BVN?</h3>
            <p>BVN stands for Bank Verification Number.This is a unique number which was provided when you opened your bank account. It is used to identify the owner of the bank account and adds an extra layer of security.</p>
           

          </section>

          <section>

            <h3>Why is my BVN required?</h3>
            <p>BVN is only required at the point of fund withdrawal. Only users that convert their airtime to cash are required to provide their BVN before fund withdrawal to their bank accounts can be successful.</p>
            <p>When the money is moved from your wallet to your bank account, the BVN is used to ensure that the money will reach you successfully.</p>
           
          </section>

          <section>
            <h3>I don't know my BVN. What do I do?</h3>
            <p>To find out your BVN you can dial *565*0#. Please note that this will only work if you are making the request from the same mobile number that is currently linked to your bank account</p>
        

          </section>

          <section>
            <h3>Why do you need my ATM card details?</h3>
            <p>AirtimeDataHub only needs card details when you are using the ATM card funding option to fund your wallet. We fully understand that your bank card details are very sensitive and we have taken all available precautions to secure our platform and protect your data.</p>
          

          </section>

          <h1>AIRTIME TO CASH FEATURE</h1>

          <section>
            <h3>What airtime can be used?</h3>
            <p>AirtimeDataHub accepts all networks, which includes MTN, Airtel, Glo, and 9Mobile.</p>
        

          </section>

          <section>

            <h3>What airtime can be used?</h3>
            <p>AirtimeDataHub accepts all networks, which includes MTN, Airtel, Glo, and 9Mobile.</p>
      
          </section>

          <section>

            <h3>How do I convert airtime to cash?</h3>
            <p>Using our 24/7 online airtime to cash converter, kindly follow these rules carefully to convert your airtime to cash successfully. Failure to adhere to them may lead to some setbacks.</p>
        

          </section>
          
          <h1>CREATE REQUEST</h1>

          <section>
            <p>On the Airtime to Cash page, choose the network you want to convert, type the airtime amount and the phone number you are transferring from, then click on review request. Now, you will see a phone number you should transfer the airtime to. Make sure you send the airtime manually by yourself first, then tap submit request. </p>
            <p>NOTE: AirtimeDataHub airtime recipient numbers change from time to time due to the volume of offers we receive daily, to ensure you send your airtime to the right number we are currently using, only use Airtime to Cash feature when you are instantly ready to send your airtime.</p>
            <p>Meanwhile, if you are not ready to send the airtime yet, simply exit, then try again when fully ready. Kindly make sure that the your phone number you entered as the sender is the same as the one that sends the airtime. The airtime amount you provided must correspond with the amount you send to the AirtimeDataHub number. Failure to follow these instructions makes the system invalidates your request and tenders it null and void. </p>
            <p> For MTN you are only allowed to convert maximum of 100,000 per transaction; 9MOBILE 20,000, Airtel 20,000 and Glo 6000. Once you have successfully transferred the airtime to the AirtimeDataHub phone number, your wallet will be funded within 3-5 minutes, then you can now click on  withdrawal to get the money deposited into your local bank account.</p>
            <p>However, if you have bulk airtime for sale(more than the maximum threshold on each network), kindly reach us via our customer service/WhatsApp chat to demand for more numbers to send your airtime to.</p>
        

          </section>
          <h1>WALLET FUNDING</h1>

          <section>
            <h3>How do I fund my wallet?</h3>
            <p>You can fund your wallet using Airtime to Cash, bank deposit, bank transfer, USSD code transfer or ATM card (Paystack). Using debit card (Paystack), your wallet will be automatically and instantly funded. Other means of funding takes 5-10 minutes.</p>
            <p>Kindly note that payment via bank deposit, USSD transfer and mobile bank transfer may take longer time to reflect, due to the occasional inter bank transfer delays.</p>
            <p>Contact us via our support/Whatsapp chat if you have waited for a maximum of 30 minutes after payment but hasn't reflected in your wallet balance.Sometimes, you may need to refresh your wallet balance for your funds to reflect in your Wallet.</p>
        

          </section>
          <h1>ACCOUNT UPGRADE</h1>

          <section>
            <h3>How do I upgrade my account?</h3>
            <p>You can upgrade your AirtimeDataHub acvount to become our agent/reseller with a one-off maintenance fee of N5000. Once you fund your wallet and initiate account upgrade, your account will be upgraded automatically. This will enable your app interface offer you discounted/cheaper prices for both data and airtime recharge.</p>
            <p>In addition, you are entitled to 20% commission on every client you share your referral code with once they successfully pay and upgrade their accounts to an agent too.</p>
        

          </section>

          <section>
            <p>Meanwhile, you can also upgrade to a merchant to use our data and airtime recharge API if you have an existing app or website(contact us via email for more details).</p>
      
          </section>

          <section>
            <p>We immensely appreciate your business relationship.</p>
          </section>


          <section>
            <p>Thank you for choosing AirtimeDataHub.</p>
          </section>

     
    



         

          </div>
   
          </div>
        </div>
    

      </div>
      <Footer/>


    </div>
  )
}
