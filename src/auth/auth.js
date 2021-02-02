import React from 'react'
import Auth1 from '../images/auth1.png';
function auth() {
    return (
        <div style={{padding:"50px"}}>
            <div className="container">
                <div style={{padding:"80px"}}>
                <p className="m-auto" style={{textAlign:"center",marginTop:"50px"}}><a  href="#" style={{color:"white",textDecoration:"none",background:"#FF290C",textAlign:"center",padding:"20px 40px",fontWeight:"bold",fontSize:"24px",lineHeight:"28px",borderRadius:"20px"}}>Join Session</a></p>
                </div>
                    <div className="row">
                    <div className="col-md-6">
                    <p style={{fontSize:"24px",lineHeight:"28px"}}>Confirm your Presence</p>
                    <form >
                        <input  type="text" name="text" style={{marginTop:"10px",height:"58px",width:"549px"}} placeholder="Your Name"  required/>
                        <input  type="tel" name="text" style={{marginTop:"10px",height:"58px",width:"549px"}}  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"  required placeholder="Phone Number"/>
                        <input  type="email" name="email" style={{marginTop:"10px",height:"58px",width:"549px"}}  placeholder="Email"  required/>
                        <button type="submit" style={{marginTop:"10px",height:"58px",width:"549px",border:"none",color:"white",background:" #FF290C"}}>Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img className="mr-auto" style={{height:"332px",width:"324px" , marginLeft: "206px"}} src={Auth1}/>
                </div>
                    </div>
            </div>
        </div>
    )
}

export default auth;
