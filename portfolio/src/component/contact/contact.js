import React from 'react';
import classes from './contact.module.css';
const contact = () =>{
    const user={
        mail:'mailto:sunilpanchal123.sp@gmail.com'
    }
    return(
        <div className={classes.mainContent}>
            <div className={classes.content}>Get In Touch</div>
            <div><a href={user.mail} className={classes.email}>Contact Me</a></div>
        </div>
    );
} 

export default contact;