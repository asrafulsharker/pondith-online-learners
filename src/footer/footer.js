import React from 'react'
import './footer.css';
import logo from '../images/logo1.png';
import PlayStore from '../images/playstore.png';
import AppleStore from '../images/applestore.png';
import Google from '../images/google.png';
import Facebook from '../images/facebook.png';
import Twter from '../images/twter.png';
function footer() {
    return (
        <div>
            <div className="row">
                <div className="col-md-7" style={{background:"#FF290C",height:"11px" , width:"100%",}}>

                </div>
                <div className="col-md-5" style={{background:"#575757",height:"11px" , width:"100%",}}>

                </div>
            </div>

        <div className="footer-bg" style={{padding:"125px 180px 0px 180px",borderBottom:"25px solid #FF290C"}}>

                <div className="row">
                    <div className="col-md-3">
                        <img className="logo" src={logo}/>
                        <p className="f-p1">We aim to provide best Academic and skill 
                        courses that helps learners, the teachers also 
                        can become an instructor in Pondith - Online 
                        Learners’ and can share their knowledges.</p>
                        <div className="row" style={{paddingTop:"20px"}}>
                            <img style={{height:"54px",width:"50px",marginLeft:"15px"}} src={Google}/>
                            <img style={{height:"52px",width:"50px",marginLeft:"19px"}} src={Facebook}/>
                            <img style={{height:"50px",width:"48px",marginLeft:"19px"}} src={Twter}/>
                        </div>
                    </div>
                    <div className="col-md-4 " style={{marginLeft:"auto",marginRight:"auto",padding:"0px 30px"}}>
                        <div className="row">
                        <div className="col-md-6 mr-auto" >
                            <p className="f-p2" style={{textAlign:"left" ,paddingBottom:"20px"}}>Explore</p>
                            <p className="footer-link-p"  style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}>About Us</a></p>
                            <p className="footer-link-p" style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}> Courses</a></p>
                            <p className="footer-link-p" style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Sessions</a></p>
                            <p className="footer-link-p" style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Support Mentor</a></p>
                            <p className="footer-link-p" style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}> Terms & Conditions</a></p>
                            <p className="footer-link-p" style={{textAlign:"left"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Refund Policies</a></p>
                            </div>
                            <div className="col-md-6 ml-auto">
                            <p className="f-p2" style={{textAlign:"right",paddingBottom:"20px"}}>Community</p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Refer a friend </a></p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Join Language Club</a></p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Join Tech Community </a></p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>For Clients</a></p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Explore Marketplace</a></p>
                            <p className="footer-link-p" style={{textAlign:"right"}}><a href="#" style={{textDecoration:"none",color:"white"}}>Communication Hacks</a></p>
                            </div>
                        </div>
                        <p className="footer-md-bg-p" style={{}}>Pondith - Online Learners’ Community</p>
                        <p className="footer-md-sm-p">Public Group - 500+ Members</p>
                        <button className="footer-btn">Join Group</button>
                    </div>
                    <div className="col-md-3 mr-auto" style={{textAlign:"right"}}>
                        <p className="f-p2">Now you can reach<br/>
                        <a href="#" style={{color:"#FF290C",textDecoration:"none"}}>Pondith - Online Learners’</a> using</p>
                        <img style={{width:"220px",paddingTop:"20px"}} src={PlayStore}/>
                        <img style={{width:"215px",paddingTop:"20px"}} src={AppleStore}/>
                        </div>
                </div>
                  </div>
        </div>
    )
}

export default footer;
