import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import './ThankYou.css'

const ThankYou = () => {
  return (
    <div>
    <div className='all_img'>
        <img className='tick_thankYou' src='https://www.kanakkupillai.com/assets/img/email.png'/>
     <h1 className='thankYou'>Thank you we have received your Request</h1>
     <h3>Our Sales team will reach out to you soon and schedule a call at your convenient time.</h3>
     <h5 className='thankYou_h5'>
     Have a nice day and stay safe.
     </h5>
     <Link to="/"><button className='back_to'>Back To Home</button></Link>

    </div>
    <Footer/>
    </div>
  )
}

export default ThankYou
