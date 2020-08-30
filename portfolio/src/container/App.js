import React from 'react';
import Navbar from '../component/navbar/navbar'
import {Switch, Route} from 'react-router-dom';
import Resume from '../component/resume/resume';
import Contact from '../component/contact/contact';
import Home from '../component/home/home';
import Footer from '../component/footer/footer'
function App() {
  return (
    <div className="">
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
