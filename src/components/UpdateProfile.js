import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loading, notloading } from '../utilities/ReduxStore/reducers/loading';
import { urls } from "../config.json";
import axios from 'axios';
import { setprofile } from '../utilities/ReduxStore/reducers/user';
import toObject from '../utilities/toObject';
import { Redirect } from "react-router-dom";

export default function UpdateProfile() {
  const user = useSelector(state => state.user.data);
  const [error, setError] = useState({ dp: false, error: '', firstName: false});
  const [submitFlag, setSubmitFlag] = useState(false);
  const [dp, setDp] = useState('');
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false)
  
  const handleImageLoad = async (e) => {
    URL.revokeObjectURL(dp);
    if (e.currentTarget.files[0]) setDp(URL.createObjectURL(new Blob([new Uint8Array(await e.currentTarget.files[0].arrayBuffer())])));
    else setDp('');
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = [...e.currentTarget].slice(0,7);
    dispatch(loading());
    for (let iTag of form) {
      if (!iTag.validity.valid) {
        setError({ ...error, [iTag.name]: true });
        setSubmitFlag(true);
        dispatch(notloading());
        return;
      } else if (iTag.name === 'dp' && iTag.files.length !== 1){
        setError({ ...error, 'dp': true });
        setSubmitFlag(true);
        dispatch(notloading());
        return;
      }
    }
    try {
      await axios.post(urls.update, new FormData(e.currentTarget), {
        "withCredentials": true,
      })
      dispatch(setprofile({...toObject(form),dp: document.querySelector("img#dp").href}));
      setRedirect(true);
    } catch (e) {
      console.log(e)
      if (e.response) setError({ ...error, ...e.response.data.error });
      else alert("Something went wrong!!");
    }
    dispatch(notloading());
    setSubmitFlag(true);
  }

  const onChange = (e) => {
    const iTag = e.currentTarget;
    setError({ ...error, [iTag]: false, error: '' });
  }

  if (!user) return <Redirect to="/login" />
  else if(redirect) return <Redirect to="/home"/>
  else return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <form method="post" encType="multipart/form-data" className={`flex-column w-50 `} onSubmit={onSubmit}>
        <div className="d-flex justify-content-center align-items-center" >
          {((user.profile && user.profile.dp) || dp) ?
            <img id="dp" onClick={(e) => e.currentTarget.parentElement.nextElementSibling.click()} src={(user.profile && user.profile.dp) || dp} alt="prfile" className="border-dark rounded-circle border mb-2" style={{ objectFit: 'cover', width: '15vw', height: '15vw'}}/> :
            <i onClick={(e) => e.currentTarget.parentElement.nextElementSibling.click()} className="fas fa-user-alt border-dark rounded-circle border mb-2" style={{ fontSize: "7vw", padding: '4vw', cursor:'pointer' }}></i>
          }
        </div>
        <input type="file" name="dp" id="dp" hidden onChange={(e) => { onChange(e); handleImageLoad(e); }} className={submitFlag && error.dp ?'is-invalid':''}/>
        <div class="invalid-feedback text-center mb-2">Please provide your photo.</div>

        <div className="mb-2">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input defaultValue={(user.profile && user.profile.firstName) || ''} required onChange={onChange} name="firstName" id="firstName" type="text" className={`form-control ${submitFlag && error.firstName ?'is-invalid':''}`} />
          <div class="invalid-feedback">You must provide first name.</div>
        </div>
        <div className="mb-2">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input defaultValue={(user.profile && user.profile.lastName) || ''} name="lastName" id="lastName" type="text" className="form-control" />
        </div>

        <div className="mb-2">
          <label className="form-label d-block" defaultValue={(user.profile && user.profile.gender) || ''}>Gender</label>
          <span className="form-check d-inline-block mx-2">
            <input className="form-check-input" type="radio" name="gender" id="male" value="male" defaultChecked/>
            <label className="form-check-label" htmlFor="male">Male</label>
          </span>
          <span className="form-check d-inline-block mx-2">
            <input className="form-check-input" type="radio" name="gender" id="female" value="female"/>
            <label className="form-check-label" htmlFor="female">Female</label>
          </span>
          <span className="form-check d-inline-block mx-2">
            <input className="form-check-input" type="radio" name="gender" id="others" value="others"/>
            <label className="form-check-label" htmlFor="others">Others</label>
          </span>
        </div>
        
        <div className="mb-2">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea defaultValue={(user.profile && user.profile.description) || ''} className="form-control" placeholder="Describe Yourself" name="description" id="description" style={{height: '20vh'}}></textarea>
        </div>

        {error.error && <div className="alert alert-danger">{error.error}</div>}

        <button type="submit" className="btn btn-blue">Alomst Set</button>
      </form>
    </div>
  )
}
