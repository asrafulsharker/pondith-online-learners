import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import LoginPic from '../images/loginImg.png';
function Register() {
    return (
        
<div style={{background: "rgba(22, 20, 20, 0.712)",padding:"100px"}}>
    <div className="container" >
                <div className="row">
                    <div className="col-md-6">
                    <img src={LoginPic} style={{padding:"20px 0px 0px 0px",width:"100%"}}/>
                    </div>
                    <div className="col-md-6">
                        <div className="reg-div"> 
                            <p className="text-reg" style={{width:"100px"}}>Register</p>
                            <input className="reg-type" type="text" placeholder="Name"/>
                            <input className="reg-type" type="email" placeholder="Email"/>
                            <input className="reg-type" type="tel" placeholder="Mobile"/>
                            <input className="reg-type" type="password" placeholder="Password"/>
                            <br/>
                            <div className="row" style={{marginTop:"10px",marginLeft:"70px", width:"320px"}}>
                            <input style={{padding:"10px",width:"25px",height:"25px",fontSize:"20px",background:"red"}} type="checkbox" className="check-want"/>
                            <p style={{marginLeft:"15px",color:"white"}}>I agree to all the <a href="#" style={{color:"#FF1C1C",fontWeight:"bold"}}>Terms & Conditions</a></p>
                            </div>
                            <button className="reg-btn" type="submit">Register</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Register
