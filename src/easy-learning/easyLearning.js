import React from 'react'
import './easyLearning.css';
import Easy from '../images/easy.png';
import Earth from '../images/earth.png';
import Install from '../images/install.png';
function easyLearning() {
    return (
        <div style={{background:"#F8F8F8"}}>
            <p style={{color:"#686868",textAlign:"center",fontSize:"36px",fontWeight:"bold",padding:"50px 0px 30px 0px"}}>Learning is now more easy</p>
            <div className="container">
                <div className="row easy" >
                    <div className="col-md-6 m-auto" style={{padding:""}}>
                        <div className="row">
                            <img src={Earth} style={{height:"51px",height:"65px"}} className="col-md-2"/>
                            <div className="col-md-10">
                                <p className="easy-bg-p">Visit our website</p>
                                <p className="easy-sm-p">Now you can start learning each 
                                skill visitng our website from now on,  
                                your growth will show while learning</p>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop:"100px"}}>
                            <img src={Install} style={{height:"51px",height:"65px"}} className="col-md-2"/>
                            <div className="col-md-10">
                                <p className="easy-bg-p">Visit our website</p>
                                <p className="easy-sm-p">Now you can start learning each 
                                skill visitng our website from now on,  
                                your growth will show while learning</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={Easy} className="easy-img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default easyLearning;
