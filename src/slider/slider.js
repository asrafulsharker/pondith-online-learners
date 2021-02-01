import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Category1 from '../images/course1.png';
import Category2 from '../images/course2.png';
import Category3 from '../images/course3.png';
import watch from '../images/watch.png';
import right from '../images/right.png';
import certificate from '../images/certificate.png';
import trending from '../images/trending badge.png';
import trending2 from '../images/trending badge2.png';
import bestSelling from '../images/best badge.png';

import './slider.css'
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="container" style={{padding:"50px 5px"}}>
          <div className="row" style={{padding:"10px",paddingBottom:"40px"}}>
          <div className="col-md-2">
          <h2 style={{fontSize:"24px",fontWeight:"bold",lineHeight:"23px",color:"#5E5555"}}> Best Selling<br/>
            Courses </h2>
          </div>
            <div className="col-md-5">
            <p style={{fontSize:"12px",fontWeight:"bold",lineHeight:"16px",paddingTop:"4px"}}>We aim to provide best Academic and skill courses that helps learners, 
            the teachers also can become an instructor in Pondith - Online Learners’ 
            and can share their knowledges.</p>
            </div>
          </div>
        <Slider {...settings}>
        <div className="col-md-12 " style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%',transition:"6s" }}>
        <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
        <Card.Body className="cardBody">
          <img className="bdj"src={bestSelling}/>
          <p className="bdj-p">Best Selling</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>AI - Artificial Intellegence</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
            <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category2} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={trending}/>
          <p className="bdj-p">Trending</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>Python - Basic to Advance</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category3} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={trending2}/>
          <p className="bdj-p">Trending</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>Machine Learning - A to Z</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category2} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={bestSelling}/>
          <p className="bdj-p">Best Selling</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>AI - Artificial Intellegence</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
          </div>


          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category3} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={trending}/>
          <p className="bdj-p">Best Selling</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>AI - Artificial Intellegence</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
      </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={trending2}/>
          <p className="bdj-p">Best Selling</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>AI - Artificial Intellegence</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
        </Card.Body>
      </Card>
      </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card className="course-sw" style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
        <Card.Body>
        <img className="bdj"src={bestSelling}/>
          <p className="bdj-p">Best Selling</p>
        <Card.Title style={{fontWeight:"bold",fontSize:"18px",lineHeight:"17px"}}>AI - Artificial Intellegence</Card.Title>
          <p style={{fontWeight:"bold",fontSize:"12px",lineHeight:"16px",color:"#444444",paddingBottom:"10px"}}>MS Mir</p>
          <Card.Text style={{fontWeight:"bold",fontSize:"10px",lineHeight:"14px",cilor:"#9a9a9a"}}>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>
          <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",zIndex:"9999",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px",paddingTop:"5px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
              <p style={{width:"40px" ,textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"4px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"6px",textAlign:"center",fontSize:"5px",fontWeight:"bold",lineHeight:"0px",color:"#9c9595"}}>4 Hours</p>
          <p style={{width:"40px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"0px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
              <div className="container" style={{paddingTop:"15px"}}>
            <div className="row">
            <div className="col-md-6">
              
              <div className="row">
            <i  style={{color:"#FF290C"}} class="fa fa-star"/>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star"></i>
            <i  style={{color:"#FF290C"}} class="fa fa-star-half-full"></i>
            <i style={{color:"#FF290C"}} class="fa fa-star-o"></i>
              </div>

              </div>
              <div className="col-md-6">
                <p style={{fontSize:"11px",textAlign:"right"}}><strong>120+</strong> Enrolment</p>
              </div>
            </div>
            </div>
            <hr/>
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                    <p className="cart-btn" style={{height:"40px",width:"120px",borderRadius:"5px",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",marginLeft:"-16px",background:"#FFEEEE",color:"#FF290C",padding:"12px 20px"}}>Add to Cart</p>
                </div>
                <div className="col-md-5">
                      <p  style={{textAlign:"right",color:"#FF290C",fontWeight:"bold",fontSize:"14px",lineHeight:"13px",paddingTop:"15px"}}>$159.99</p>
                  </div>
              </div>
            </div>
          </Card.Body>
         </Card>
          </div>
        </Slider>
      </div>
    );
  }
}