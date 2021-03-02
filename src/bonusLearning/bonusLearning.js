import React from 'react';
import './bonusLearning.css';
import BonusImg from '../images/bonus.png';
import Play from '../images/bonusPlay.png';
import BonusHeadphone from '../images/bonusHeadphone.png';
import Quiz from '../images/BonusQuiz.png';
import Blog from '../images/bonusBlogs.png';

import CountUp from 'react-countup';
function bonusLearning() {
    return (
        <div style={{background:"#FAFAFA"}}>
            <div className="container">
                <div className="col-md-8 m-auto">
                    <p className="bonus-bg-p">Bonus from our learnings</p>
                    <p className="bonus-sm-p">Pondith - Online Learners’ is an Bangladeshi growing E-learning platform that offer online courses,
                    academic and skills based courses are focused.</p>
                </div>
                <div className="bonus-div m-auto ">
                    <img className="bonus-img" src={BonusImg}/>
                </div>
                <div className="col-md-10 m-auto" style={{padding:"80px 10px"}}>
                    <div className="row">
                    <div className="col-sm-3 ">
                            <div className=" bonus-sm-div">
                            <div className="row" style={{paddingLeft:"0px",margin:"10px"}}>
                                <img className="bonus-sm-img " src={Play} />
                                <div className="bonus-smp">
                                    <p className="bonus-bg-img-p" style={{marginBottom:"0rem" ,color:"#FF1C1C"}}><CountUp end={1200} duration={35} />+<br/> <span className="bonus-sm-img-p">Video Tutorial</span></p>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className=" bonus-sm-div">
                            <div className="row" style={{paddingLeft:"0px",margin:"10px"}}>
                                <img className="bonus-sm-img " src={BonusHeadphone} />
                                <div className="bonus-smp">
                                    <p className="bonus-bg-img-p" style={{marginBottom:"0rem" ,color:"#00CDFC"}}><CountUp end={500} duration={35} />+<br/> <span className="bonus-sm-img-p">Video Tutorial</span></p>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className=" bonus-sm-div">
                            <div className="row" style={{paddingLeft:"0px",margin:"10px"}}>
                                <img className="bonus-sm-img " src={Quiz} />
                                <div className="bonus-smp">
                                    <p className="bonus-bg-img-p" style={{marginBottom:"0rem" ,color:"#00FF69"}}><CountUp end={155} duration={35} />+<br/> <span className="bonus-sm-img-p">Video Tutorial</span></p>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <div className=" bonus-sm-div">
                            <div className="row" style={{paddingLeft:"0px",margin:"10px"}}>
                                <img className="bonus-sm-img " src={Blog} />
                                <div className="bonus-smp">
                                    <p className="bonus-bg-img-p" style={{marginBottom:"0rem" ,color:"#FFAB07"}}><CountUp end={1200} duration={35} />+<br/> <span className="bonus-sm-img-p">Video Tutorial</span></p>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default bonusLearning
