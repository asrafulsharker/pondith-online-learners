import React from 'react'
import PlatformImg from '../images/platform.png';
import './platform.css';
function platform() {
    return (
        <div style={{paddingBottom:""}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <div className="col-md-6">
                       <img src={PlatformImg}style={{marginTop:"200px",height:"100%"}}/>
                       </div>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <p className="ml-auto" style={{textAlign:"right",fontWeight:"bold",fontSize:"48px",lineHeight:"46px",paddingTop:"100px"}}>Learn Everything from
                        One Platform.</p>
                        <p style={{textAlign:"right",lineHeight:"25px",fontSize:"18px",fontWeight:"bold",paddingTop:"15px"}}>We aim to provide best Academic and skill courses that helps learners, 
                        the teachers also can become an instructor in Pondith - Online Learners’ 
                        and can share their knowledges.</p>
                        <div className="mr-auto" style={{    marginLeft: "220px",marginTop: "57px"}}>
                        <div className="row">
                            <a style={{textDecoration:"none"}} href="#"> <p className="platform-btn">Start Learning</p></a>
                           <a style={{textDecoration:"none"}} href="#"> <p className="platform-btn">Start Learning</p></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default platform;
