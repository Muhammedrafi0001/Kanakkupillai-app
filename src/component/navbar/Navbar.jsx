import React from 'react'

import "./Navbar.css"

const Navbar = () => {
    return (
        <div >
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_all">
                <div className="container-fluid" >
                    <a className="navbar-brand" href="/"><img className='logo_size' src='https://www.kanakkupillai.com/assets/admin/style/images/kanakkupillai.png'/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav nav_space" >
                            <li className="nav-item mr-l-4">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Startup 
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    GST
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Income Tax
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tax & Compliance
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Intellectual Property
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Partner with Us
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Contact Us
                                </a>
                            </li>
                            <li className="nav-item mr-l-3">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Service Status
                                </a>
                            </li>
                            <li className="nav-item mr-l-4">
                            connect with us
                            <h3 className="nav-link dropdown-toggle"   >
                            7305 345 345

                                </h3>
                            </li>



                            {/* <li className="nav-item dropdown">
                               
                                
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
