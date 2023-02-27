import './App.css';
import Home from './Components/home';
import Content from './Components/content';
import {Switch,Route} from 'react-router-dom';
import Signup from './Components/signup';
import Signupdetail from './Components/signupdetail';
import Features from './Components/features';
import Pricing from './Components/pricing';
import Contact from './Components/contact';
import Quiz from './Components/freequiz';
import Test from './Components/test';

function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/Content" component={Content}/>
    <Route exact path="/signup" component={Signup}/>
    <Route exact path="/signup-details" component={Signupdetail}/>
    <Route exact path="/features" component={Features}/>
    <Route exact path="/pricing" component={Pricing}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/free-practice-quiz" component={Quiz}/>
    <Route exact path="/free-practice-quiz/Quiz/:name" component={Test}/>
    </Switch>
    </>
  );
}

export default App;
