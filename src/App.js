
//import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory } from "react-router-dom";
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
import UpdateProfile from "./components/UpdateProfile";

function App() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  
  if (!user.fetched) {
    dispatch(autologin());
    return (
      <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status"></div>
      </div>
    )
  }
  else return (
    <Router>
      <Loading />
      <Switch>
        <Route exact path='/updateProfile' component={UpdateProfile}/>
        {/* <Route path={['']} exact component={NotRequireLogin}/> */}
        <Route path='/' component={NotRequireLogin}/>
          {/* <RequireLogin/>
          <NotRequireLogin/>
        </Route> */}
      </Switch>
    </Router>
  )
}

const RequireLogin = () => {
  const user = useSelector(state => state.user);

  if (!user.data) return <Redirect to="/login" />
  else if (user.data && !user.data.active) return <Redirect to="/updateProfile" />
  return (
    <Router>
      <Switch>
      </Switch>
    </Router>
  )
}

const NotRequireLogin = () => {
  const user = useSelector(state => state.user);

  if (user.data && !user.data.active) return <Redirect to="/updateProfile" />
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path='/' exact component={Trips} />
        <Route path='*' component={()=> <Redirect to="/"/>} />
      </Switch>
    </Router>
  )
}

export default App;
