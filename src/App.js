import './App.css';
import Home from './Components/home';
import Content from './Components/content';
import {Switch,Route} from 'react-router-dom';
import Signup from './Components/signup';
import Signupdetail from './Components/signupdetail';
import Features from './Components/features';

function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Content" component={Content}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signup-details" component={Signupdetail}/>
    <Route exact path="/features" component={Features}/>
    </Switch>
    </>
  );
}

export default App;
