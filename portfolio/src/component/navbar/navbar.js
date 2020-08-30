import React from 'react';
import {Link} from 'react-router-dom';
import classes from './navbar.module.css';
const navbar = ()=>{
    return (
                <div className={classes.NavHeader}>
                    <Link className={`${classes.NavLink} ${classes.NavBrand}`} to="/">Sunil Panchal</Link>
                    <div className={classes.NavLinks}>
                        <Link className={classes.NavLink} to="/">Home</Link>
                        <Link className={classes.NavLink} to="/resume">Resume</Link>
                        <Link className={classes.NavLink} to="/contact">Contact me</Link>
                    </div>
                </div>
    );
}

export default navbar;