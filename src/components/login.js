import React from 'react'
//import ReactDOM from 'react-dom'
import '../style.css'
import Svg from './assets/svg1.svg'
import Svg2 from './assets/svg2.svg'

const login = () => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6 border-line">
            <div className='row'>
              <img src={Svg2} className="logo col-lg-3" />
              <h6 className='col-lg-3 px-1 mx-5 my-5 logoText'>Been There</h6>
            </div>

            <img src={Svg} className='image' />

          </div>
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
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input id="chk1" type="checkbox" name="chk" class="custom-control-input" />
                  <label for="chk1" className="custom-control-label text-sm">Remember me</label>
                </div>
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
        <div className="bg-blue py-4">
          <div className="row px-3">
            <a class="ml-4 ml-sm-5 mb-2">Contact Us</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default login;