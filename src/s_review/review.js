import React from 'react'
import storiesImg1 from '../images/storiesImg1.png';
import storiesImg2 from '../images/storiesImg2.png';
import storiesImg3 from '../images/storiesImg3.png';
import storiesImg4 from '../images/storiesImg4.png';
import './review.css';
function review() {
    return (
        <div style={{background:"#f8f8f8"}}>
            <div className="container" style={{padding:"190px 0px"}}>
                <p>From our Learners</p>
                <div className="row">
                    <div className="col-md-4">
                        <img src={storiesImg1}/>
                    </div>
                    <div className="col-md-5 m-auto">
                        <p className="success-top-p">My Success Stories</p>
                        <p className="success-bg-p">Learn with Aaron Draplin, Jessica Hische, Roxane Gay, <br/>
                        Simon Sinek, and thousands of acclaimed creators eager <br/>
                        to share their knowledge with you

                        </p>
                        <div className="col-md-3 ml-auto">
                        <img  src={storiesImg2}/><br/>
                        <img src={storiesImg3}/><br/>
                        <img src={storiesImg4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default review;
