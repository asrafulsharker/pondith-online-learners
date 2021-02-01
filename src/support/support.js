import React from 'react'
import SupportImg from '../images/support.png';
import lani1 from '../images/lani1.png';
import lani2 from '../images/lani2.png';
import lani3 from '../images/lani3.png';
import './support.css';
function support() {
    return (
        <div className="support" style={{margin:"50px",background:"#FFF3F3",borderRadius:"81px"}}>
            <div className="container" style={{background:"#FFF3F3",borderRadius:"81px"}}>
                <div  className="container">
                <img className="lani1" src={lani1}/>
                <img className="lani2" src={lani2}/>
                <img className="lani3" src={lani3}/>
                <div className="lani4"></div>
                <div className="lani5"></div>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{width:"499px",height:"492px",marginTop:"150px"}} src={SupportImg}/>
                    </div>
                    <div className="col-md-6">
                        <p style={{textAlign:"right",fontWeight:"300",fontSize:"24px",lineHeight:"28px",color:"#454545",paddingTop:"65px"}}>Looking for support?</p>
                        <p style={{textAlign:"right",fontWeight:"500",fontSize:"64px",lineHeight:"75px",color:"#272727"}}>Lifetime Free<br/> Support</p>
                        <p style={{textAlign:"right",fontSize:"18px",lineHeight:"21px",color:"#242424",paddingTop:"40px"}}>We aim to provide best Academic and skill courses that helps learners, 
                            the teachers also can become an instructor in Pondith - Online Learners’ 
                            and can share their knowledges.</p>
                            <p style={{textAlign:"right",background:"#FF290C",height:"61px",width:"184px",marginTop:"60px",padding:"17px 40px",marginLeft:"340px",borderRadius:"9px",color:"white",fontSize:"18px",fontWeight:"bold",lineHight:"21px"}}>Get Support</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default support;
