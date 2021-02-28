import React from 'react';
import Skill1 from '../images/skill1.png';
import Skill2 from '../images/skill2.png';
import Skill3 from '../images/skill3.png';
import './skill.css';
function skill() {
    return (
        <div>
           {/* <div style={{height:"50px",backgroundColor:"#282828",borderBottom:"1px solid #4A4848 "}}></div> */}
           <div className="" style={{backgroundColor:"#1D1D1D"}}>
                <div className="container"style={{padding:"100px 0px"}}>
                    <div className="col-md-9">
                        <p className="col-md-8" style={{color:"white", borderLeft:"5px solid red",paddingLeft:"40px"}}>We aim to provide best Academic and skill courses that helps learners, the 
                        teachers also can become an instructor in Pondith - Online Learners’ and 
                        can share their knowledges.</p>
                        </div>
                        <div className="col-md-12" style={{padding:"50px 0px"}}>
                            <div className="row">
                                <div className="col-md-4"style={{marginLeft:"0px",paddingTop:"15px"}} >
                                    <img src={Skill1} className="skill-sm-img"/>
                                    <p className="skill-sm-img-p" style={{color:"#D6E53B"}}>Learn skills with the best
                                    instructor.</p>
                                    <p className="skill-sm-sm-p">We aim to provide best Academic and skill courses that helps learners, 
                                    the teachers also can become an instructor in Pondith - Online Learners’ 
                                    and can share their knowledges.</p>
                                </div>
                                <div className="col-md-4"style={{marginLeft:"0px",paddingTop:"15px"}} >
                                    <img src={Skill2} className="skill-sm-img"/>
                                    <p className="skill-sm-img-p"  style={{color:"#EC801B"}}>Enrich your problem solving
                                    skills.</p>
                                    <p className="skill-sm-sm-p">We aim to provide best Academic and skill courses that helps learners, 
                                    the teachers also can become an instructor in Pondith - Online Learners’ 
                                    and can share their knowledges.</p>
                                </div>
                                <div className="col-md-4 " style={{marginLeft:"0px",paddingTop:"15px"}}>
                                    <img src={Skill3} className="skill-sm-img"/>
                                    <p className="skill-sm-img-p" style={{color:"#28EF3C"}}>Develop your communication
                                    and language skills.</p>
                                    <p className="skill-sm-sm-p">We aim to provide best Academic and skill courses that helps learners, 
                                    the teachers also can become an instructor in Pondith - Online Learners’ 
                                    and can share their knowledges.</p>
                                </div>
                            </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default skill;
