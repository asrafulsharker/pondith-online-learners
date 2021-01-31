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
        <h2> Best Selling
            Courses </h2>
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