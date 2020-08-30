import React from 'react';
import './footer.module.css';

const footer=()=>{

    const user = {
        instagram:'https://www.instagram.com/sunilpanchal_/',
        facebook:'https://www.facebook.com/profile.php?id=100005809771284',
        Linkedin:'https://www.linkedin.com/in/sunil-panchal-cse/',
        mail:'mailto:sunilpanchal123.sp@gmail.com'
    }

    return(
        <div className="bottomBar">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 bottomSideSpace">
                {/* this is for logo */}
                <p className="bottomBarText">
                    Welcome to our photography world. Our team foucus on quality images. We capture every moment of your life.
                    Our mission is to provide best quality images. We care to our customer. We are working on how we can
                    give best service and provide to best class service to our customer.
                </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <h3 className="bottomBarTextH3">CONTACT</h3>
                    <p className="bottomBarText">
                        Pithampur, Sector No.3, Dhar,<br/>Madhya Pradesh, India
                    </p>
                    <p className="bottomBarText">
                        M:+919977959596 <br/>
                        M:+917697666611
                    </p>
                    <p className="bottomBarText">
                        <a href={user.mail} className="bottomEmail" target="_blank" rel="noopener noreferrer">Email us</a>
                    </p>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-12 ">
                    <h3 className="bottomBarTextH3">Social</h3>
                    <p className="bottomBarText">
                        <i className="fa fa-instagram distance-icon"></i><a href={user.instagram} className="bottomEmail"> Instagram</a><br/>
                        <i className="fa fa-facebook distance-icon"></i><a href={user.facebook} className="bottomEmail"> Facebook</a><br/>
                        <i className="fa fa-linkedin distance-icon"></i><a href={user.Linkedin} className="bottomEmail"> Linkedin</a><br/>
                    </p>
                </div>
            </div>
            <div className="row bottomLast">
                <div className="col-lg-12 textCenter">
                    <p className="copyright">
                        © COPYRIGHT 2020 BY ANKITPHOTOGRAPHY.COM
                    </p>
                </div>
            </div>
        </div>
    );
}


export default footer;