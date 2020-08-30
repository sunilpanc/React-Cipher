import React from 'react';
import Navbar from '../component/navbar/navbar'
import {Switch, Route} from 'react-router-dom';
import About from '../component/about/about';
import Contact from '../component/contact/contact';
import Home from '../component/home/home';
import Footer from '../component/footer/footer'
import './App.css';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
