import React,{Component} from 'react';
import Reg from '../authentication/register';
import Login from '../authentication/login';
import WantPondith from './wantPondith';
import fire from '../config/fire';
import Home from '../Home/home';
import AuthNav from './authNav';
import './authentication.css';
class Authentication extends Component {

    render()         {
        return (
            <>
            <AuthNav/>
            <div className="reg-main" style={{paddingTop:"68px"}}>
                <div className="bg-home" style={{background: "rgba(22, 20, 20, 0.712)",height:"64px",borderBottom:"1px solid #4A4848 "}}>
                <p style={{textAlign:"center",color:"white",padding:"10px",paddingTop:"20px"}} className="container">Pondith - Online Learners’ is an Bangladeshi growing E-learning platform</p>
                </div>
              <Login/>
              <WantPondith/>
            </div>
            </>
        )

    }


}

export default Authentication;
