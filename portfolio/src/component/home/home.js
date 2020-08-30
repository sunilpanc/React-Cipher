import React, { Component } from 'react';
import classes from './home.module.css';
import myImage from './../../asset/img/sunil.jpg';
class Home extends Component{
    state={
    
    }
    render(){
        return(
            <div className={`row ${classes.mainContent}`}>
                <div className={`col-sm-6 ${classes.container}`}>
                    <h1 className={classes.siteBrand}>Hey, I'm Sunil.</h1>
                    <h3 className={classes.siteContent}>A self-motivated IT professional with huge knowledge and proficiency in JavaScript, HTML, CSS, PHP, MySQL,C++, Java and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code, seeks the position of Software Developer...</h3><br/>
                    <button type='button' className={classes.myProjects}>My Projects</button>
                </div>
                <div className='col-sm-6'>
                    <div className={classes.myImage}>
                        <img src={myImage}  alt="Sunil Panchal" className={classes.myImageControl}/>
                    </div>
                </div>
            </div>
        );
    } 
}
export default Home;

