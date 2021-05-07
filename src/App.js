
//import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Register from './components/Register'
import Navbar from './component/Navbar'
import Trips from './component/Trips'
import Footer from './component/Footer'
import TripPlanner from './component/TripPlanner'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/home" component={Trips}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path='/tripPlanner' exact component={TripPlanner} /> {/*This needs to be changed as it is only for one tour Kashmir*/}
        <Route path="/" component={()=><Redirect to="/login"/>} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
