import React from 'react';
import Skill1 from '../images/skill1.png';
import Skill2 from '../images/skill2.png';
import Skill3 from '../images/skill3.png';
import './skill.css';
function skill() {
    return (
        <div>
           {/* <div style={{height:"50px",backgroundColor:"#282828",borderBottom:"1px solid #4A4848 "}}></div> */}
           <div className="" style={{backgroundColor:"#282828"}}>
                <div className="container"style={{padding:"100px 0px"}}>
                    <div className="col-md-9">
                        <p className="col-md-8" style={{color:"white"}}>We aim to provide best Academic and skill courses that helps learners, the 
                        teachers also can become an instructor in Pondith - Online Learners’ and 
                        can share their knowledges.</p>
                        <div className="col-md-12" style={{padding:"50px 0px"}}>
                            <div className="row">
                                <div className="col-md-3"style={{marginLeft:"30px",paddingTop:"15px"}} >
                                    <img src={Skill1} style={{height:"80px"}}/>
                                    <p style={{color:"white",fontSize: "18px",width:"245px",paddingTop:"15px"}}>Learn skills with the best
                                     instructor.</p>
                                </div>
                                <div className="col-md-3"style={{marginLeft:"30px",paddingTop:"15px"}} >
                                    <img src={Skill2} style={{height:"80px"}}/>
                                    <p style={{color:"white" ,fontSize: "18px",width:"245px",paddingTop:"15px"}}>Learn skills with the best
                                     instructor.</p>
                                </div>
                                <div className="col-md-3" style={{marginLeft:"30px",paddingTop:"15px"}}>
                                    <img src={Skill3} style={{height:"80px"}}/>
                                    <p style={{color:"white" ,fontSize: "18px",width:"245px",paddingTop:"15px"}}>Learn skills with the best
                                     instructor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default skill;
