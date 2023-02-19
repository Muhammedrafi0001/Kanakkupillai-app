import React from 'react'

import './Footer.css'

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div>
            <div className='conrainer home_footer'>
                <img src='https://www.kanakkupillai.com/assets/img/logo_logo.png' />
                <span className='footer_about'>About UsBlogPrivacy PolicyTerms & ConditionsRefund Policy</span>
                <div className="footre_list">
                    <ul className='footer_ul'>
                        STARTUP
                        <li>
                            Private Limited Company
                        </li>
                        <li>
                            Limited Liability Partnership
                        </li>
                        <li>
                            Partnership Firm Registration
                        </li> <li>
                            Sole Proprietorship Registration
                        </li> <li>
                            Nidhi Company Registration
                        </li> <li>
                            Company Registration in Bangalore
                        </li>
                    </ul>
                    <ul className='footer_ul'>
                        TAXATION
                        <li>
                            GST Registration
                        </li>
                        <li>
                            GST Return Filing
                        </li>
                        <li>
                            TDS Return Filing
                        </li> <li>
                            Income Tax Return Filing
                        </li> <li>
                            Company Registration in Chennai
                        </li>
                    </ul>
                    <ul className='footer_ul'>
                        INTELLECTUAL PROPERTY

                        <li>
                            Patent Registration
                        </li>
                        <li>
                            80G and 12A Registration
                        </li> <li>
                            Section 8 Company Registration
                        </li>
                    </ul>
                    <ul className='footer_ul'>
                        COMPLIANCE

                        <li>
                            Annual Compliance for Pvt Ltd
                        </li>
                        <li>
                            Annual Filing for LLP
                        </li> <li>
                            Change in Object Clause
                        </li>
                        <li>
                            Appointment of Directors
                        </li>
                        <li>
                            Change in Name Clause
                        </li>

                    </ul>

                </div>
                <div className='footer_tools'>
                    <h4 className='footer_tool_h4'>Tools</h4>
                    <span className='footer_tool_span'>
                        GST Calculator
                        <span className='footer_tool_span'>
                            HRA Calculator
                        </span>
                    </span>
                </div>
                <div className="conrainer">
                    <div className="footer_left_icon">
                        <span >
                          <LocalPhoneIcon/>  +91 7305 345 .
                        </span>
                        <span>
                           <EmailIcon/> support@kanakkupillai.com 
                        </span>
                        <span className='footer_select'>
                        Select Country
                    </span>
                               <span><FacebookIcon/> <LinkedInIcon/> <YouTubeIcon/> <InstagramIcon/> </span>
                    <hr/>
                    </div>
                    
                    <div className='footer_right_icon'></div>
                </div>
                   <hr/>
                   <div className='footer_last'>
                     <span>By Clicking this page, you agree to our   Terms & Conditions   and Privacy Policy   |   © Copyright 2023 All Rights Reserved © Govche India Private Limited</span>
                   </div>
            </div>

        </div>
    )
}

export default Footer
