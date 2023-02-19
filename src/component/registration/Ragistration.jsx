import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

import './Registration.css'

const Ragistration = () => {

    const [toggle, setToggle] = useState(1)

    const toggleTab = (e) => {
        console.log(e);
        setToggle(e)
    }



    return (
        <div >
            <div className="container">
                <div className="ragistration_first ">
                    <div className="ragistration_first_one container">
                        <h4>GST Registration Online</h4>
                        <span>GST Registration Online
                            Apply GST Registration Online in India with Kanakkupillai! As per GST legal process, any business operations or any entity with an annual turnover exceeding Rs 40 lakhs must undergo GST process/procedure in India as a separate taxable provision.<br />

                            As per GST jurisdiction, any business operations whose annual turnover exceeds Rs 40 lakhs must register as a separate taxable provision. This procedure is called GST registration. It takes around 2-6 working days to obtain the GST registration online in India.</span>
                    </div>
                    <div className="ragistration_first_tow container">
                        <h4>Online GST Registration in just 7 Days</h4>
                        <span>4.8 5836 Customers Reviews</span>
                        <div className='div_three_button'>
                            <button className={toggle === 1 ? 'move_button' : "tabs"}

                                onClick={() => toggleTab(1)}
                            >
                                Basic
                            </button >
                            <button
                                className={toggle === 2 ? 'move_button' : "tabs"}
                                onClick={() => toggleTab(2)}
                            >
                                Essential
                            </button>
                            <button
                                className={toggle === 3 ? 'move_button' : "tabs"}
                                onClick={() => toggleTab(3)}
                            >
                                Advance
                            </button>
                        </div>
                        <div className='move_content'>
                        <div className="">
                                {
                                    toggle === 1 ? (
                                        <div className='market_all'>
                                            <span >Market Price : <span className="market_Price">₹2000</span></span><br />
                                            <span className="out_Price">Our Price : <span className='price_color'>₹999</span><br />₹1179 Incl GST</span><br />
                                            <span className="you_save">You Save :  ₹1001 (50%)</span><br />
                                            <span className='regisrtation_spans'>* GST Registration + Compliance Software * T & C</span>
                                        </div>
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                            <div className="">
                                {
                                    toggle === 2 ? (
                                        <div className='market_all'>
                                             <span >Market Price : <span className="market_Price">₹5000</span></span><br />
                                            <span className="out_Price">Our Price : <span className='price_color'>₹2287</span><br />₹2699 Incl GST</span><br />
                                            <span className="you_save">You Save :  ₹2713 (54%)</span><br />
                                            <span className='regisrtation_spans'>* GST Registration + Compliance Software * T & C</span>
                                        </div>
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                            <div className="">
                                {
                                    toggle === 3 ? (
                                        <div className='market_all'>
                                             <span >Market Price : <span className="market_Price">₹1200</span></span><br />
                                            <span className="out_Price">Our Price : <span className='price_color'>₹6525</span><br />₹7700 Incl GST</span><br />
                                            <span className="you_save">You Save :  ₹5475 (46%)</span><br />
                                            <span className='regisrtation_spans'>* GST Registration + Compliance Software * T & C</span>
                                        </div>
                                    ) : (
                                        ""
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="ragistration_first_three container">
                        <div className="GETSTARTE-D"><br/>
                            <h5>GET STARTED</h5>
                          <form action="">
                            <input className='get_input' type="text"  placeholder='Name' required/><br/><br/>
                            <input className='get_input' type="email" placeholder='Email' required/><br/><br/>
                            <input className='get_input' type="Phone" placeholder='Mobile' required /><br/><br/>
                            <Link to='/thank-you'><button className='get_button'>Get Started</button><br/></Link>
                          </form><br/>
                          99.9% customers satisfaction<br/> guaranteed. No hidden charges
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Ragistration
