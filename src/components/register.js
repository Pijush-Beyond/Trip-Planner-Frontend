import React from 'react'
//import ReactDOM from 'react-dom'
import '../style.css'
import Svg from './svg1.svg'
import Svg2 from './svg2.svg'

const register=()=>{
    return(
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-2 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">                    
                    <div className="col-lg-6 border-line" >                     
                            <div className='row'>
                                <img src={Svg2} className="logo col-lg-3"/>
                                <h6 className='col-lg-3 px-1 mx-5 my-5 logoText'>
                                    Been There
                                </h6>
                                </div>   
                            
                            <img src={Svg} className='imageRegister'/> 
                    </div>  
                    <div className="col-lg-6">
                        <div className="card2 card border-0  py-5">
                            <div className="row mb-4 px-3">
                                <h4 className="mb-0 mr-4 mt-2">
                                  Take Your First Step
                                </h4>                                
                            </div>
                            <div className="row px-3">
                            <label className="mb-1">
                            <h6 className="mb-0 text-sm">
                                First Name
                            </h6>
                            </label>
                            <input className="mb-2" type="text" name="firstname" placeholder="Your First Name Here"/>
                        </div>
                        <div className="row px-3">
                            <label className="mb-1">
                            <h6 className="mb-0 text-sm">
                                Last Name
                            </h6>
                            </label>
                            <input className="mb-2" type="text" name="lastName" placeholder="Your Last Name Here"/>
                        </div>

                        

                        <div className="row px-3">
                            <label className="mb-1">
                            <h6 className="mb-0 text-sm">
                                Email Address
                            </h6>
                            </label>
                            <input className="mb-2" type="text" name="email" placeholder="Enter a valid email address"/>
                        </div>

                        

                        <div className="row px-3">
                            <label className="mb-1">
                            <h6 className="mb-0 text-sm">
                                Password
                            </h6>
                            </label>
                            <input className='mb-2' type="password" name="password" placeholder="Enter your password"/>
                        </div>

                        <div className="row px-3">
                            <label className="mb-1">
                            <h6 className="mb-0 text-sm">
                                Confirm Password
                            </h6>
                            </label>
                            <input className='mb-4' type="password" name="password" placeholder="Re-enter your password"/>
                        </div>

                        
                        <div class="row mb-3 px-3">
                            <button type="submit" className="btn btn-blue text-center">
                               Register
                            </button>
                        </div>
                        <div className="row mb-4 px-3">
                            <small className="font-weight-bold">
                               Already have an account?
                            <a className="text-primary " href='./'>
                                Sign In
                            </a>
                            </small>
                        </div>
                </div>
            </div>
        </div>
        <div className="bg-blue py-4">
            <div className="row px-3">
                <a class="ml-4 ml-sm-5 mb-2">
                  Contact Us
                </a>
                
            </div>
        </div>
    </div>
</div>
        
    )
}

export default register;