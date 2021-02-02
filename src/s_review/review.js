import React from 'react'
import Student1 from '../images/student1.png';
import './review.css';
function review() {
    return (
        <div>
            <div className="container" style={{padding:"190px 0px"}}>
                <div className="row">
                    <div className="col-md-4">
                        <p style={{fontWeight:"bold",fontSize:"24px",lineHeight:"28px",color:"#474747"}}>What does our student
                        think about us....</p>
                        <p className="s-p2">“Excellent progression day by day with instructions....</p>
                        <p className="s-p3">We aim to provide best Academic and skill courses that helps learners, 
                        the teachers also can become an instructor in Pondith - Online Learners’ 
                        and can share their knowledges.</p>
                        <p className="s-p3">We aim to provide best Academic and skill courses that helps learners, 
                            the teachers also can become an instructor in Pondith - Online Learners’ 
                            and can share their knowledges.</p>
                            <p className="s-p4">Mir Hasan</p>
                            <p className="s-p5">Learner, Bangladesh</p>
                    </div>
                    <div className="col-md-5 ">
                        <div className="mr-auto">
                            <div className="s-top-div" style={{height:"120px",width:"120px",backgroundColor:"#FF0808",borderRadius:"50%"}}></div>
                            <img className="s-img" style={{textAlign:"right",height:"472px",width:"400px"}} src={Student1}/>
                            <div className="s-bottom-div" style={{height:"120px",width:"120px",backgroundColor:"#B924FF"}}></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default review;
