import React from 'react';
import ReactDOM from 'react-dom';
import storiesImg1 from '../images/storiesImg1.png';
import storiesImg2 from '../images/storiesImg2.png';
import storiesImg3 from '../images/storiesImg3.png';
import storiesImg4 from '../images/storiesImg4.png';
import Comma from '../images/comma.png';
import './review.css';
import Data from './data.js';


function Review() {
    function handleClick() {
        console.log("Clicked")
    }
    return (
        <div style={{background:"#f8f8f8"}}>
            <div className="container" style={{padding:"80px 0px 240px"}}>
                <p className="success-p">From our Learners</p>
                <div className="row">
                    <div className="col-md-4 success-img-rep">
                        <p>{}</p>
                        <img src={ storiesImg1}/>
                            <div className="success-rep">
                            <div className="success-sm-text">
                            <img className="success-div-img" src={Comma}/>
                            <div className="success-full-div">
                                <div className="row success-star">
                                    <i  style={{color:"#FF290C",lineHeight:"7px"}} class="fa fa-star"/>
                                    <i  style={{color:"#FF290C",lineHeight:"7px"}} class="fa fa-star"></i>
                                    <i  style={{color:"#FF290C",lineHeight:"7px"}} class="fa fa-star"></i>
                                    <i  style={{color:"#FF290C",lineHeight:"7px"}} class="fa fa-star"></i>
                                    <i style={{color:"#FF290C",lineHeight:"7px"}} class="fa fa-star-half-full"></i>
                                </div>
                                <p className="success-text-p">Learn with Aaron Draplin, Jessica Hische, Roxane Gay, Simon Sinek, 
                                and thousands of acclaimed creators eager to share their knowledge 
                                with you. Learn with Aaron Draplin, Jessica Hische, Simon Sinek, and 
                                thousands of acclaimed creators eager  to share their knowledge with
                                you. Read More <a href="#" style={{color:"#FF290C",textDecoration:"none"}}>Read More</a></p>
                                <p className="teacher-success-text">Ahsan Faruque <br/> <span className="teacher-sm-text">UI/UX Designer</span></p>
                            </div>
                        </div>
                            </div>
                    </div>
                    <div className="col-md-5 m-auto">
                        <p className="success-top-p">My Success Stories</p>
                        <p className="success-bg-p">Learn with Aaron Draplin, Jessica Hische, Roxane Gay, <br/>
                        Simon Sinek, and thousands of acclaimed creators eager <br/>
                        to share their knowledge with you
                        </p>
                        <div className="col-md-3 success-sm-div ml-auto">
                            <img className="success-sm-img" src={storiesImg2} style={{cursor:"pointer"}} onClick={handleClick}/><br/>
                            <img className="success-sm-img" src={storiesImg3}/><br/>
                            <img className="success-sm-img" src={storiesImg4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;
