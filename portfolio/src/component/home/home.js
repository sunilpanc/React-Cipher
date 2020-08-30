import React from 'react';
import classes from './home.module.css';
import myImage from './../../asset/img/sunil.jpg';
const home = () =>{
    return(
        <div className={classes.mainContent}>
            <div className={classes.container}>
                <h1 className={classes.siteBrand}>Hey, I'm Sunil.</h1>
                <h3 className={classes.siteContent}>A self-motivated IT professional with huge knowledge <br/>and proficiency in JavaScript, HTML, CSS, PHP, MySQL,<br/>C++, Java and mobile responsive web development, <br/>as well as strong skills and ability in writing clean and<br/> efficient code, seeks the position of Software Developer...</h3>
            </div>
            <div className={classes.myImage}>
                <img src={myImage}  alt="Sunil Panchal" className={classes.myImageControl}/>
            </div>
        </div>
    );
}
export default home;

