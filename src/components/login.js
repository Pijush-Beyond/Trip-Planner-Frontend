import React from 'react'
import '../style.css'
import Image from './assets/image'


const login = () => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto h-100 w-100">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <Image />
          <div className="col-lg-6">
            <div className="card2 card border-0  py-5">
              <div className="row mb-4 px-3">
                <h4 className="mb-0 mr-4 mt-2">Just take a step to unlock the world</h4>

              </div>

              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Email Address</h6>
                </label>
                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
              </div>

              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-sm">Password</h6>
                </label>
                <input type="password" name="password" placeholder="Enter password" />
              </div>

              <div className="row px-3 mb-4">
                
                <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
              </div>
              <div class="row mb-3 px-3">
                <button type="submit" className="btn btn-blue text-center">Let's Begin The Journey</button>
              </div>
              <div className="row mb-4 px-3">
                <small className="font-weight-bold">
                  Don't have an account?
                  <a className="text-danger " href='./register'>Register</a>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue p-4">
          <a>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default login;