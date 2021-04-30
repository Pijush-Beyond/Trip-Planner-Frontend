
//import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/login'
import Register from './components/register'
//import Navi from './Components/Navi'

function App() {
  return (
    <Router>

    
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
    </Router>
  );
}

export default App;
