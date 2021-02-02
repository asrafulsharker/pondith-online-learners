import React from 'react'
import './footer.css';
import logo from '../images/logo3.png';
import PlayStore from '../images/playstore.png';
import AppleStore from '../images/applestore.png';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Twter from '../images/twter.png';
function footer() {
    return (
        <div style={{padding:"80px 0px",borderBottom:"70px solid #151515"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="logo" src={logo}/>
                        <p className="f-p1">We aim to provide best Academic and skill 
                        courses that helps learners, the teachers also 
                        can become an instructor in Pondith - Online 
                        Learners’ and can share their knowledges.</p>
                        <div className="row">
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Google}/>
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Facebook}/>
                            <img style={{height:"32px",width:"32px",marginLeft:"10px"}} src={Twter}/>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <p className="f-p2">Explore</p>
                        <p>Courses
                        <br/>
                        <br/>
                        Articles
                        <br/>
                        <br/>
                        Blogs
                        <br/>
                        <br/>
                        Data
                        <br/>
                        <br/>
                        Sessions</p>
                        </div>
                        <div className="col-md-2">
                        <p className="f-p2">About</p>
                        <p>
                        Privacy & Policy
                        <br/>
                        <br/>
                        Terms & Conditions
                        <br/>
                        <br/>
                        For More Information
                        <br/>
                        <br/>
                        Support
                        </p>
                        </div>
                        <div className="col-md-2">
                        <p className="f-p2"> Community</p>
                        <p>
                        Refer a friend
                        <br/>
                        <br/>
                        Join Langauge Club
                        <br/>
                        <br/>
                        Join Tech Community
                        <br/>
                        <br/>
                        For Clients
                        <br/>
                        <br/>
                        Explore Marketplace
                        </p>
                        </div>
                    <div className="col-md-3">
                        <p className="f-p2">Download App</p>
                        <img style={{width:"220px",paddingTop:"10px"}} src={PlayStore}/>
                        <img style={{width:"220px",paddingTop:"10px"}} src={AppleStore}/>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default footer
