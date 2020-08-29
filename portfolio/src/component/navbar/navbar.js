import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import App from '../../container/App';
import About from '../about/about';
import Contact from '../contact/contact';
const navbar = ()=>{
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link to="/" className="navbar-brand">Sunil Panchal</Link>
                <ul className="navbar-nav ml-auto">
                    <li><Link className="nav-item nav-link active" to="/">Home</Link></li>
                    <li><Link className="nav-item nav-link" to="/about">About me</Link></li>
                    <li><Link className="nav-item nav-link" to="/contact">Contact me</Link></li>
                </ul>

                <Switch>
                    <Route path='/' component={App}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </nav>
        </BrowserRouter>
    );
}

export default navbar;