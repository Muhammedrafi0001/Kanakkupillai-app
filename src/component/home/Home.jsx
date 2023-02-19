import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Ragistration from '../registration/Ragistration'

import './Home.css'



const Home = () => {
    return (

        <div className='home_first'>

            <h1 className='home_first_h1'>
                The Simplest Way To Incorporate<br />
                Your Company In India.
            </h1>
            <p className='home_first_p'>Begin your journey as a business owner with us</p>
            <div>
                <input className='home_first_input' placeholder='Enter you Name' />
                <button className='home_firt_button'>Next</button>
            </div>
            <div className='home_threebutton'>
                <Link to={'/registration'}>
                    <button className='home_gst_Registration'>
                        GST Registration<br />
                        ₹ 999 / Excl GST


                    </button>
                </Link>
                <button className='home_gst_Registration'>
                    Company Registration
                    <br />
                    ₹ 6141 / Excl GST
                </button>
                <button className='home_gst_Registration'>
                    Trademark Registration
                    <br />
                    ₹ 1999 / + Govt Fees
                </button>
            </div>
            <p className='home_rated'>
                Rated 4.8 out of 5 based on Google 1376 reviews
            </p>
            <div className='row'>

                <div className='home_threeCard'>
                    <div className='home_card col-sm-3'>
                        <button className='home_icon_three'><img className='home_tree_icon' src='https://cdn.onlinewebfonts.com/svg/img_203001.png' /></button>
                        <h3>Reasonable</h3>
                        Lowest price with professional service delivery</div>
                    <div className='home_card col-sm-3'>
                        <button className='home_icon_three'><img className='home_tree_icon' src='https://cdn-icons-png.flaticon.com/128/860/860735.png' /></button>
                        <h3>Support</h3>

                        Turn Around Time 99% of services will be delivered within timeline</div>
                    <div className='home_card col-sm-3'>
                        <button className="home_icon_three"><img className='home_tree_icon' src='https://cdn-icons-png.flaticon.com/128/8198/8198469.png' /></button>
                        <h3>4.8/5 on Google rating</h3>
                        99% of Customers rated us 5* in Google</div>

                </div>
            </div>
            <div className='home_provide_div'>
                <h1 className='home_quality_h1' >We Provide<br />
                    <span className='home_under_span'> Best</span> <span className='home_quality_span'>Quality</span>  Services</h1>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-01.png' /></div>
                            <h5 className='home_eight_cart'>GST Registration</h5>
                            <h3 className='home_price'>₹ 999<span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Apply for New GST by online Registration with Kanakkupillai! Without Visiting the Govt. office, get your GST Registered in India in just seven days.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-02.png' /></div>

                            <h5 className='home_eight_cart'>Pvt Ltd Company</h5>
                            <h3 className='home_price'>₹ 6141<span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Register your Company with Kanakkupillai in 7 days at the lowest price with free compliance software + DIN & DSC for 2 Directors + MOA & AOA + ROC Fees, PAN & TAN.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-03.png' /></div>

                            <h5 className='home_eight_cart'>One Person Company</h5>
                            <h3 className='home_price'>₹ 6104<span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                OPC is a business having one owner. Before the Companies Act 2013, a company could only be founded with a minimum of two directors and members.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-04.png' /></div>

                            <h5 className='home_eight_cart'>LLP Registration</h5>
                            <h3 className='home_price'>₹ 6525<span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Get started for LLP registration right away for your partnership business through Kanakkupillai! Limit your liability and face lesser compliance issues than a PLC registration.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-05.png' /></div>

                            <h5 className='home_eight_cart'>FSSAI / Food License</h5>
                            <h3 className='home_price'>₹ 1999 <span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Get FSSAI license Now! All manufacturers, traders, and restaurants operating any food business that may include manufacturing or processing are given food license or FSSAI license.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-06.png' /></div>

                            <h5 className='home_eight_cart'>Trademark</h5>
                            <h3 className='home_price'>₹ 1999 <span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Get trademark for your brand name or logo with unique identity and secure legal protection within a week! Get trademark registration for any sign you use to identify your business.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://www.kanakkupillai.com/assets/img/icon-07.png' /></div>

                            <h5 className='home_eight_cart'>Import & Export code</h5>
                            <h3 className='home_price'>₹ 1999 <span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Apply for IEC registration online Now! And get the 10-digit IEC code. Without IEC, primarily importers merchants cannot import products, and primarily exporters merchants cannot receive benefits from DGFT.
                            </p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>                    </div>
                    </div>
                    <div className='col-sm-3'>
                        <div className='home_allIcone container'>
                            <div><img className='home_eight_icon' src='https://cdn-icons-png.flaticon.com/128/8198/8198469.png' /></div>

                            <h5 className='home_eight_cart'>MSME Registration</h5>
                            <h3 className='home_price'>₹ 999 <span className='home_span_excl'>/Excl GST</span></h3>
                            <p className='home_eight_cart_text'>
                                Registrations for manufacturing or service lines can be obtained through the MSME act. This registration provides many benefits regarding taxation, setting up the business, credit facilities, loans, etc.</p>
                            <div className='home_readmore'>
                                <button className='home_readmore_but'>READ MORE</button>
                                <span>* T & C Apply</span>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <h2 className='home_choose'>Choose Our Best Plan</h2>
            <div className='home_choose_1'></div>
            <div className="container clor">

                <div className='clor'>
                    <div className='row'>
                        <div className="col-sm-4 ">
                            <div className="card cartone">
                                <h5 className="card-header home_h5_txt">Proprietorship <br></br>Registration</h5>
                                <h2 className="card-header">₹1999<span className='home_span_excl'>/Excl GST<br />* T&C Apply</span></h2>
                                <div className="card-header home_h5_txt1">
                                    <ul className='home_ul_first'>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            GST Registration
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            MSME Registration
                                        </li>
                                        <li>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Current Account Opening - ICICI Bank
                                        </li>
                                    </ul>
                                    <button className='home_buyNow'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card cartone">
                                <h5 className="card-header home_h5_txt">Incorporation of Private <br></br>Limited Company</h5>
                                <h2 className="card-header">₹1999<span className='home_span_excl'>/Excl GST<br />* T&C Apply</span></h2>
                                <div className="card-header home_h5_txt1">
                                    <ul className='home_ul_first'>
                                        <li className='home_li_first' >
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            DSC - 2 Nos. (2yrs validity)
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Director Identification Number - 2 Nos.
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Name Approval for Company
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Incorporation of Pvt Ltd Company
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            PAN & TAN for the Company
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Current Account Opening - ICICI Bank
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Compliance Software
                                        </li>
                                    </ul>
                                    <button className='home_buyNow'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card cartone">
                                <h5 className="card-header home_h5_txt">Proprietorship <br></br>Registration</h5>
                                <h2 className="card-header">₹1999<span className='home_span_excl'>/Excl GST<br />* T&C Apply</span></h2>
                                <div className="card-header home_h5_txt1">
                                    <ul className='home_ul_first'>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />
                                            DSC - 2 Nos. (2yrs validity)
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            DPIN - 2 Nos.
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Name Approval for LLP
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Preparation of LLP Agreement
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Incorporation of LLP
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Form-3 Filing
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Current Account Opening - ICICI Bank
                                        </li>
                                        <li className='home_li_first'>
                                            <img className='home_tick' src='https://tse3.mm.bing.net/th?id=OIP.3_lXbDNT9rEVyn6mBuESpAHaHa&pid=Api&P=0' />

                                            Compliance Software
                                        </li>
                                    </ul>
                                    <button className='home_buyNow'>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home_what'>
                <h2>What Makes Us <span className='home_different'>Different</span></h2>
            </div>
            <div className='home_choose_1'></div>

            <div className="container home_star">
                <div className="home_star1">
                    <img className='home_icon_star' src='https://www.kanakkupillai.com/assets/img/service-005.png' />
                    <h5>Google Reviews</h5>
                    <span>99% of Customers rated us<br />5* in Google.</span>
                    <div className="home_two_star">
                        <img className='home_icon_star' src='https://www.kanakkupillai.com/assets/img/service-002.png' />
                        <h5>Reasonable</h5>
                        <span>Low price with professional service delivery</span>
                    </div>
                </div>
                <div className="home_star2">
                    <img className='home_icon_man' src='https://www.kanakkupillai.com/assets/img/service-center.png' />
                </div>
                <div className="home_star3">
                    <img className='home_icon_star' src='https://www.kanakkupillai.com/assets/img/service-004.png' />
                    <h5>Turn Around Time</h5>
                    <span>99% of services will be delivered within timeline</span>
                    <div className="home_two_star">
                        <img className='home_icon_star' src='https://www.kanakkupillai.com/assets/img/service-003.png' />
                        <h5>300+ Services</h5>
                        <span>Relax at home, we take care of Tax/Compliance</span>
                    </div>
                </div>
            </div>
            <div className="home_star_three">
                <img className='home_icon_star' src='https://www.kanakkupillai.com/assets/img/service-001.png' />
                <h5>Compliance</h5>
                <span>We manage 99.9% of compliance
                    <br /> within due date</span>
            </div>

            <hr />
            <div className='home_client '>
                <h1>What Our <span className="home_quality_span">Client Says</span></h1>
            </div>

            <div className='home_choose_1'></div>

            <div className="container home_client_three">
                <div className="home_client_one container">
                    <img className='home_client_img ' src="https://www.kanakkupillai.com/assets/img/services/1.svg" />
                    <h5>Alfred Arun</h5>
                    <img src='https://www.kanakkupillai.com/assets/img/star-rating.png' />
                    <span >
                        <br />  Good experience with the people at kanakkupillai.com. They have made our job easy and we got follow up calls and status updates regularly. Thanks a lot for your team work and keep up the good work.
                    </span>
                </div>
                <div className="home_client_two container">
                    <img className='home_client_img' src="https://www.kanakkupillai.com/assets/img/services/2.svg" />
                    <h5>Bince George</h5>
                    <img src='https://www.kanakkupillai.com/assets/img/star-rating.png' />
                    <span>
                        <br />  I was looking for a good partner to incorporate my company. Fortunately I could find Kanakkupillai.com and you guys are up to the mark. They guided well with respect to all the process of
                    </span>
                </div>
                <div className="home_client_two container">
                    <img className='home_client_img' src="https://www.kanakkupillai.com/assets/img/services/3.svg" />
                    <h5>Bince George</h5>
                    <img src='https://www.kanakkupillai.com/assets/img/star-rating.png' />
                    <span>
                        <br /> I was looking for a good partner to incorporate my company. Fortunately I could find Kanakkupillai.com and you guys are up to the mark. They guided well with respect to all the process of
                    </span>
                </div>
            </div>
            <div className='home_articles_main'>
                <h1>Our Latest <span className='home_different'>Articles</span> </h1>

                <div className='home_choose_1'></div>
                <div className='home_articles container'>
                    <div className='home_article '>
                        <img className='home_article_img' src='https://www.kanakkupillai.com/assets/img/services/kyc.svg' />
                        <h5 className='home_article_h5' >KYC is mandatory from 01 November for insurance policies</h5>
                        <span  >The Fotolia/Raw Pixel Value Added Tax (VAT) was implemented in the UAE on January 1, 2018, with a 5% rate.<br /></span>
                        <button className='articl_readmore'>Read More</button>
                    </div>
                    <div className='home_article'>
                        <img className='home_article_img' src='https://www.kanakkupillai.com/assets/img/services/how-to-calculate-revenue-for-a-startup.svg' />
                        <h5 className='home_article_h5'>New Goods and Services Tax (GST) Rate List 2022</h5>
                        <span>Rate hikes were approved while exemptions for many items consumed on a large scale were withdrawn. The meeting in this regard was chaired by the Finance Minister <br /></span>
                        <button className='articl_readmore'>Read More</button>

                    </div>
                    <div className='home_article'>
                        <img className='home_article_img' src='https://www.kanakkupillai.com/assets/img/services/GST-for-Renting-of-Residential-Properties.svg' />
                        <h5 className='home_article_h5'>KYC is mandatory from 01 November for insurance policies</h5>
                        <span>The Fotolia/Raw Pixel Value Added Tax (VAT) was implemented in the UAE on January 1, 2018, with a 5% rate.<br /></span>
                        <button className='articl_readmore'>Read More</button>

                    </div>

                </div>
            </div>
            <div className='container'>
                <hr />
                <h1>Our Banking <span className="home_quality_span">Partners</span></h1>
                <div className='home_choose_1'></div>
                <div className="home_banks">
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/indusindbank.jpg' />
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/axisbank.jpg' />
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/kodak.jpg' />
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/hdfc.jpg' />
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/icici.jpg' />
                    <img className='home_banks_img' src='https://www.kanakkupillai.com/assets/img/clients/federalbank.jpg' />

                </div>
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home
