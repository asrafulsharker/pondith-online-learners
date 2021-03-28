import React,{Component} from 'react'
import LoginPic from '../images/login.png'
class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
        }
    }
    render(){
        return (
        
            <div style={{background: "rgba(22, 20, 20, 0.712)",padding:"100px"}}>
                <div className="container" >
                            <div className="row">
                                <div className="col-md-6">
                                <div className="reg-div"> 
                                        <p className="text-reg" style={{width:"100px"}}>Register</p>
                                        <input 
                                        className="reg-type" 
                                        type="email" 
                                        placeholder="Email"
                                        value={this.state.email}
                                        />
                                        <input 
                                        className="reg-type" 
                                        type="password" 
                                        placeholder="Password"
                                        value={this.state.password}
                                        />
                                        <br/>
                                        <div 
                                        className="row" 
                                        style={{
                                            marginTop:"10px",
                                            marginLeft:"70px", 
                                            width:"320px"}}>
                                        <input 
                                        style={{
                                            padding:"10px",
                                            width:"25px",
                                            height:"25px",
                                            fontSize:"20px",
                                            background:"red"
                                            }} 
                                            type="checkbox" 
                                            className="check-want"/>
            
                                        <p style={{marginLeft:"15px",color:"white"}}>Reminder Me <a href="#" style={{color:"#FF1C1C",fontWeight:"bold"}}>Forgot Password?</a></p>
                                        </div>
                                        <button className="reg-btn" onClick={this.login}>Login</button>
                                    </div>
                               
                                </div>
                                <div className="col-md-6">
                                <img src={LoginPic} style={{padding:"20px 0px 0px 0px",width:"100%"}}/>
                                </div>
                            </div>
                        </div>
                </div>
              
                )
    }

}
    
export default Login;
