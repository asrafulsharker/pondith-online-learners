import React from 'react'
import PlatformImg from '../images/platform.png';
import Ani1 from '../images/ani1.png';
import Ani2 from '../images/ani2.png';
import Ani3 from '../images/ani3.png';
import Ani4 from '../images/ani4.png';
import Ani5 from '../images/ani5.png';
import './platform.css';
function platform() {
    return (
        <div className="hero-platform" style={{paddingBottom:"",backgroundColor:"#1d1d1d",borderTop:"1px solid #4A4848"}}>
                <img style={{width:"45px",height:"45px"}} className="ani1" src={Ani1}/>
                <img style={{width:"45px",height:"45px"}}  className="ani3"src={Ani3}/>
                <img style={{width:"45px",height:"75px"}}   className="ani4"src={Ani4}/>
                <img style={{width:"45px",height:"45px"}}  className="ani5"src={Ani5}/>
                <div style={{width:"35px",height:"35px"}}  className="ani6"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <div className="col-md-10">
                       <img src={PlatformImg}style={{marginTop:"250px",marginBottom:"10px",height:"110%",width:"140%"}}/>
                       </div>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <p className="ml-auto" style={{textAlign:"right",fontWeight:"bold",fontSize:"43px",lineHeight:"58px",paddingTop:"100px",color:"white",fontFamily:"Open Sans"}}>Learn Everything from
                        One Platform.</p>
                        <p style={{textAlign:"right",lineHeight:"25px",fontSize:"18px",fontWeight:"bold",paddingTop:"15px",color:"#D7D7D7"}}>We aim to provide best Academic and skill courses that helps learners, 
                        the teachers also can become an instructor in Pondith - Online Learners’ 
                        and can share their knowledges.</p>
                        <div className="mr-auto" style={{    marginLeft: "120px",marginTop: "57px"}}>
                        <div className="row">
                            <a style={{textDecoration:"none"}} href="#"> <p style={{textAlign:"center"}} className="platform-btn1 ">Read More</p></a>
                           <a style={{textDecoration:"none"}} href="#"> <p  style={{textAlign:"center"}} className="platform-btn2">Start Learning</p></a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default platform;
