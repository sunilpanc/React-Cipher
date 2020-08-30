import React from 'react';
import classes from './footer.module.css';

const footer=()=>{

    const user = {
        instagram:'https://www.instagram.com/sunilpanchal_/',
        facebook:'https://www.facebook.com/profile.php?id=100005809771284',
        Linkedin:'https://www.linkedin.com/in/sunil-panchal-cse/',
        mail:'mailto:sunilpanchal123.sp@gmail.com'
    }

    return(
        <div className={classes.bottomBar}>
            <div className="row">
                <div className={`col-lg-5 col-md-5 col-sm-12 ${classes.bottomSideSpace}`}>
                {/* this is for logo */}
                <p className={classes.bottomBarText}>
                    <span style={{fontSize:'2.5rem',fontWeight:'700'}}>Let's Work Together</span><br/>
                    <span style={{fontSize:'1.875rem',fontWeight:'500'}}>Have a project you'd like to discuss?</span>
                </p>
                </div>
                <div className={`col-lg-3 col-md-4 col-sm-12 ${classes.topManage}`}>
                    <h3 className={classes.bottomBarTextH3}>CONTACT</h3>
                    <p className={classes.bottomBarText}>
                        Pithampur, Sector No.3, Indore,<br/>Madhya Pradesh, India
                    </p>
                    <p className={classes.bottomBarText}>
                        M:+917697767333 <br/>
                    </p>
                    <p className={classes.bottomBarText}>
                        <a href={user.mail} className={classes.bottomEmail} target="_blank" rel="noopener noreferrer">Email us</a>
                    </p>
                </div>
                <div className={`col-lg-2 col-md-3 col-sm-12 ${classes.topManage}`}>
                    <h3 className={classes.bottomBarTextH3}>Social</h3>
                    <p className={classes.bottomBarText}>
                        <i className="fa fa-instagram distance-icon"></i><a href={user.instagram} className={classes.bottomEmail}> Instagram</a><br/>
                        <i className="fa fa-facebook distance-icon"></i><a href={user.facebook} className={classes.bottomEmail}> Facebook</a><br/>
                        <i className="fa fa-linkedin distance-icon"></i><a href={user.Linkedin} className={classes.bottomEmail}> Linkedin</a><br/>
                    </p>
                </div>
            </div>
            <div className={`row ${classes.bottomLast}`}>
                <div className="col-lg-12 textCenter">
                    <p className={classes.copyright}>
                        © COPYRIGHT 2020 BY SUNILPANCHAL.COM
                    </p>
                </div>
            </div>
        </div>
    );
}


export default footer;