import React from 'react';
import Skill from '../skill/skill';
import Ad from '../ad/ad'
import pondith from '../images/pondith1.png';
import play from '../images/play.png';
function home() {
    return (
       <>
       <div style={{padding:"88px 0px"}}>
       <div style={{background:"rgba(0,0,0,.9)",height:"64px",borderBottom:"1px solid #4A4848 "}}>
            <p style={{textAlign:"center",color:"white",padding:"10px",paddingTop:"20px"}} className="container">Pondith - Online Learners’ is an Bangladeshi growing E-learning platform</p>
        </div>
       <div className="home" style={{textAlign:"center",padding:"100px",backgroundColor:"rgba(0,0,0,.9)"}}>
        <div className="container" >
            <img  src={pondith}/>
            <p style={{color:"white",marginTop:"20px",lineHeight:"34.45px",fontSize:"36px",fontWeight:"500"}}>Learn. Experience. Explore</p>
            <p className="col-md-9 m-auto" style={{color:"white",marginTop:"30px",lineHeight:"21.09px",fontWeight:"400",fontSize:"18px"}}>Pondith - Online Learners’ is an Bangladeshi growing E-learning platform that offer online courses,
academic and skills based courses are focused.</p>


            <div className="" style={{textAlign:"center",marginTop:"50px"}}>
            <div className="row" style={{color:"white",marginLeft: "34.5%"}}>
                
                <p className=""  style={{background:"",padding:"12px 12px",border:"1px solid #929191", fontSize:"12px",lineHeight:"16.34px",width:" 176.83px" ,height: "44px"}}>START EXPLORING</p>
                <div style={{background:"",marginLeft:"15px",border:"1px solid #929191",padding:"12px 12px",width:" 176.83px" ,height: "44px" }} className="row">
                    <img  style={{height:"14px",marginLeft:"18px",marginTop:"2px"}} src={play}/>
                    <p style={{ fontSize:"12px",lineHeight:"16.34px",marginLeft:"10px"}}>WATCH VIDEO</p>
                </div>
            </div>
            </div>

        </div>
        </div>
        <Skill/>

       </div>
       </>
    )
}

export default home;
