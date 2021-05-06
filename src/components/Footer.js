import React from "react";
import { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import '../Footer.css'
import Facebook_logo from './assets/Facebook_logo.svg'
import Instagram_logo from './assets/Instagram_logo.svg'
import YouTube_logo from './assets/YouTube_logo.svg'
import logo from './assets/logoNav.png'



class Footer extends Component{
    render(){
        return(
            <Router>

                    <div className="container-fluid bg-dark text-light">
                        <br/>
                        
                            <div className="row">
  
                                <div className="col-xs-6 col-sm-6 col-md-6">
                                    <div>
                                    <span style={{marginLeft: 4}} id='nav_logo_text'> <h2>Been There</h2></span>
                                    <span><img src={logo} alt="" width="40" height="35" class="d-inline-block align-text-top" id="nav_logo_img"/> </span>
                                        
                                    </div>
                                </div>
                                <div className="col-xs-6 col-sm-6 col-md-6">

                                    <div>
                                        <br/>
                                        <h5>Contact Us:<span></span></h5>
                                            <Link style={{color:"white"}} to="#">
                                               beenThere@customerCare.com
                                            </Link>
                                            
                                            <ul id="foot">
                                            <li id='foot'>
                                                <Link>
                                                <img alt="YouTube" width="40" height="40" src={YouTube_logo}></img>
                                                </Link>
                                            </li>
                                            &nbsp;
                                            <li id='foot'>
                                                <Link>
                                                <img alt="Facebook" width="30" height="30" src={Facebook_logo}></img>
                                                </Link>
                                            </li>
                                            &nbsp;&nbsp;&nbsp;
                                            <li id='foot'>
                                                <Link>
                                                <img alt="Instagram" width="30" height="30" src={Instagram_logo}></img>
                                                </Link>
                                            </li>
                                            </ul>
                                    </div>
                                </div>

                            
                        </div>
                        <br/>
                    </div>
                    <div className="container-fluid text-light" style={{backgroundColor:"black"}}>
                    <div className="row">
                    <div className="col-md-12 text-center">
                    <p>Copyright Been There © 2021. All rights reserved.</p>
                    </div>
                    </div>
                    </div>
                    
            </Router>
        )
    }
}

export default Footer