
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";

import { autologin } from "./utilities/ReduxStore/reducers/user";

import Loading from './components/Loading'
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './components/Navbar'
import Trips from './components/Trips'
import Footer from './components/Footer'
import TripPlanner from './components/TripPlanner'

function App() {
  const user = useSelector(state => state.user.fetched);
  const dispatch = useDispatch();
  
  if (!user) {
    dispatch(autologin());
    return (
      <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status"></div>
      </div>
    )
  } else if (user.email) return <Redirect to="/login"/>
  else  return (
    <Router>
      <Loading/>
      {/* <Navbar/> */}
      <Switch>
        <Route exact path="/home" component={Trips}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path='/tripPlanner' exact component={TripPlanner} /> {/*This needs to be changed as it is only for one tour Kashmir*/}
        <Route path="/" component={()=><Redirect to="/login"/>} />
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
