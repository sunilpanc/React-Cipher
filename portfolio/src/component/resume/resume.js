import React from 'react';
import classes from './resume.module.css'
const resume = () =>{
    const user = {
        resume:'https://drive.google.com/file/d/1vcrUcgMd3trO_32S8kYFPrQ0jVleQbP5/view?usp=sharing'
    }
    return(
        <div className={classes.mainContent}>
            If you want to know about me click <a href={user.resume} className={classes.pdf}>here</a>
        </div>
    );
} 

export default resume;