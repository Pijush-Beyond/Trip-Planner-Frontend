
//import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/" component={()=><Redirect to="/login"/>} />
      </Switch>
    </Router>
  );
}

export default App;
