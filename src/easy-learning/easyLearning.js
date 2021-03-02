import React from 'react'
import './easyLearning.css';
import Easy from '../images/easy.png';
import Earth from '../images/earth.png';
import Install from '../images/install.png';
import EasyAni1 from '../images/easy-ani1.png';
import EasyAni2 from '../images/easy-ani2.png';
import EasyAni3 from '../images/easy-ani3.png';

function easyLearning() {
    return (
        <div style={{backgroundColor:"#FAFAFA",position:"relative"}}>
                        <img className="easyani1" src={EasyAni1}/>
                        <img className="easyani2" src={EasyAni2}/>
                        <img className="easyani3" src={EasyAni3}/>
            <p style={{color:"#161616",textAlign:"center",fontSize:"24px",fontWeight:"bold",padding:"50px 0px 30px 0px",fontFamily:"Open Sans"}}>Learning is now more easy</p>
            <div className="container" style={{position:"relative"}} >
                <div className="row easy" style={{zIndex:"9999"}} >

                    <div className="col-md-6 m-auto" style={{paddingLeft:"60px"}}>
                        <div className="row">
                            <img src={Earth} style={{width:"48px",height:"63px"}} className="col-md-2"/>
                            <div className="col-md-10">
                                <p className="easy-bg-p">Visit our website</p>
                                <p className="easy-sm-p">Now you can start learning each 
                                skill visitng our website from now on,  
                                your growth will show while learning</p>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop:"100px"}}>
                            <img src={Install} style={{width:"45px",height:"60px"}} className="col-md-2"/>
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
