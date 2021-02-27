import React from 'react'
import './becomePondith.css';
import BecomeImg from '../images/become.png'
function becomePondith() {
    return (
        <div className="become-main-div" style={{}}>
            <div className="container">
                <div className="col-md-7 m-auto">
                <div className="col-md-9 m-auto " style={{margin:"auto auto"}}>
                    <p style={{textAlign:"center",fontSize:"24px", lineHeight:"28px",fontWeight:"900"}}>Become A Pondith</p>
                    <img className="become-img" src={BecomeImg}/>
                </div>
                    <p style={{textAlign:"center"}}>Teach what you know, or lecture what you love.
                    Teach as you want in the way that best suits your style and personality.
                    We are serving you the platform that assists you to create and sell your own online courses.</p>
                   <div className="m-auto" style={{textAlign:"center"}}>
                   <p className="become-btn"><a style={{textDecoration:"none",color:"white"}} href="hdih">Know More</a></p>
                   </div>
                </div>
            </div>
        </div>
    )
}



export default becomePondith;
