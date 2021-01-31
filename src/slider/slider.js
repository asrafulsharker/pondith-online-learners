import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Category1 from '../images/course1.png';
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
      <div className="container">
          <div className="row" style={{padding:"10px"}}>
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
          <div className="col-md-12" style={{width:"100%"}}> 
          <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
        <Card.Body>
          <Card.Title>AI - Artificial Intellegence</Card.Title>
          <p>MS Mir</p>
          <Card.Text>
          We aim to provide best Academic and skill courses that helps learners, 
          the teachers also can become an instructor in Pondith - Online Learners’ 
          and can share their knowledges.
          </Card.Text>

        </Card.Body>
      </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
        <Card.Body>
          <Card.Title>nirob</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
            <div className="container ">
              <div className="row " style={{padding:"6px 40px"}}>
              <div className="m-auto">
              <img src={watch} className="m-auto" style={{padding:"3px 7px",cursor:"pointer",width:"40px",height:"36px",background:"#FFE3E3",borderRadius:"5px"}}/>
              <p style={{width:"40px",paddingTop:"10px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"6px",color:"#9c9595"}}>Hour Required</p>
              </div>
            
              <div className="m-auto">
              <img src={right} className="m-auto "style={{padding:"6px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#E3E7FF",borderRadius:"5px"}} />
              <p style={{width:"40px" ,paddingTop:"10px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"6px",color:"#9c9595"}}>Hour Required</p>
              </div>
          <div className="m-auto">
          <img src={certificate} className="m-auto "style={{padding:"6px 9px",cursor:"pointer",width:"40px",height:"36px",background:"#FFF2E3",borderRadius:"5px"}}/>
          <p style={{width:"40px",paddingTop:"10px",textAlign:"center",fontSize:"5px",fontWeight:"normal",lineHeight:"6px",color:"#9c9595"}}>Hour Required</p>
          </div>
             
              </div>
            </div>
            <div className="row">
              
            </div>
            <hr/>
        </Card.Body>
      </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
            <Card.Body>
              <Card.Title>nirob</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            
            </Card.Body>
          </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={Category1} style={{padding:"5%"}} />
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
          <div className="col-md-12" style={{width:"100%"}}>
          <Card style={{ width: '100%' ,padding:"%"}}>
          <Card.Img variant="top" src={Category1}  style={{padding:"5%"}}/>
          <Card.Body>
            <Card.Title>nirob</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          
          </Card.Body>
        </Card>
          </div>
        </Slider>
      </div>
    );
  }
}