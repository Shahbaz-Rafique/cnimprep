import './App.css';
import {useEffect} from 'react';
import Home from './Components/home';
import Booking from './Components/booking';
import {Switch,Route} from 'react-router-dom';
import Contact from './Components/contact';
import About from './Components/aboutus';
import Newdetails from './Components/newsdetails';
import Imprint from './Components/imprint';

function App() {
  useEffect(()=>{
    document.body.style.overflowX="hidden";
  },[])
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/booking" component={Booking}/> 
    <Route exact path="/contact-us" component={Contact}/> 
    <Route exact path="/about-us" component={About}/> 
    <Route exact path="/news-details" component={Newdetails}/> 
    <Route exact path="/impressum" component={Imprint}/> 
    </Switch>
    </>
  );
}

export default App;
