import React, { Component } from "react";
import Slider from "react-slick";
import Card from 'react-bootstrap/Card';
import Category1 from '../images/course1.png';
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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
          <div>
          <Card style={{ width: '80%' }}>
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