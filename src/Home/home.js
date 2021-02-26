import React from 'react';
import Skill from '../skill/skill';
import Slider from '../slider/slider';
import Platform from '../platform/platform';
import Support from '../support/support';
import Auth from '../auth/auth';
import Review from '../s_review/review';
import Ready from '../ready/ready';
import EasyLearning from '../easy-learning/easyLearning';
import Footer from '../footer/footer';
import Categories from '../categories/categories';
import pondith from '../images/pondith1.png';
import play from '../images/play.png';
import HeroRobot from '../images/hero2.png';
import './home.css';
function home() { 
    return (
       <>
       <div  style={{paddingTop:"68px"}} >

           <div className="bg-home">
       <div className="bg-home" style={{background: "rgba(57, 55, 55, 0.7)",height:"64px",borderBottom:"1px solid #4A4848 "}}>
       <div className="hero-robot">
               <img src={HeroRobot}/>
           </div>
            <p style={{textAlign:"center",color:"white",padding:"10px",paddingTop:"20px"}} className="container">Pondith - Online Learners’ is an Bangladeshi growing E-learning platform</p>
        </div>
       <div className="home" style={{textAlign:"center",padding:"150px 100px ",background: "rgba(57, 55, 55, 0.7)",}}>
        <div className="container" >
            <img  src={pondith}/>
            <p style={{color:"white",marginTop:"20px",lineHeight:"34.45px",fontSize:"36px",fontWeight:"500"}}>Learn. Experience. Explore</p>
            <p className="col-md-9 m-auto" style={{color:"white",marginTop:"30px",lineHeight:"21.09px",fontWeight:"400",fontSize:"18px"}}>Pondith - Online Learners’ is an Bangladeshi growing E-learning platform that offer online courses,
            academic and skills based courses are focused.</p>


            <div className="" style={{textAlign:"center",marginTop:"50px"}}>
            <div className="row" style={{color:"white",marginLeft: "34.5%"}}>
                
                <p className="ex-btn"  style={{background:"",padding:"12px 12px",border:"1px solid #929191", fontSize:"12px",lineHeight:"16.34px",width:" 176.83px" ,height: "44px",cursor:"pointer"}}>EXPLORE</p>
                <div   style={{background:"",cursor:"pointer",marginLeft:"15px",border:"1px solid #929191",padding:"12px 12px",width:" 176.83px" ,height: "44px" }} className="row ex-btn ">
                    <img  style={{height:"14px",marginLeft:"18px",marginTop:"2px"}} src={play}/>
                    <p  style={{ fontSize:"12px",lineHeight:"16.34px",marginLeft:"10px",cursor:"pointer"}}>WATCH VIDEO</p>
                </div>
            </div>
            </div>

        </div>
        </div>
        {/* <div className="bg-home" style={{background: "rgba(85, 4, 4, 0.5)",height:"64px",borderTop:"1px solid #4A4848 "}}>
            
        </div> */}
        </div>
        <Skill/>
        <Platform/>
        {/* <Categories/> */}
        <EasyLearning/>
        <Slider/>
        <Support/>
        <Auth/>
        <Review/>
        <Ready/>
        <Footer/>
       </div>
       </>
    )
}

export default home;
