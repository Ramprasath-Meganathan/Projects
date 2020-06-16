import React, { Component } from "react";
import { Card } from "react-bootstrap";
import ControlledCarousel from './ControlledCarousel';
import '../App.css';

//starting page for the user which contains a image slider and the navigation options to other pages
class Landing extends Component {

  render() {
    return (
      <article className="container">
        <article className="row">
          <ControlledCarousel />
          <article className="col-md col-sm-6 mt-4 mx-auto">
            <Card
              bg='primary'
              key='success'
              text='white'
              style={{ width: '10rem', height: '7rem' }}
            >
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  Become a volunteer,please click here
        </Card.Link>
              </Card.Body>
            </Card>
          </article>
          <article className="col-md col-sm-6 mt-4 mx-auto">
            <Card
              bg='success'
              key='primary'
              text='white'
              style={{ width: '10rem', height: '7rem' }}
              className="Card mb-2" >
              <Card.Link href="/login"></Card.Link>
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  Willing to donate? please click here
      </Card.Link>
              </Card.Body>
            </Card>
          </article>
          <article className="col-md col-sm-6 mt-4 mx-auto">
            <Card
              bg='dark'
              key='black'
              text='white'
              style={{ width: '10rem', height: '7rem' }}
              className="mb-2"  >
              <Card.Link href="/login"></Card.Link>
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  want masks and gloves? , please click here
              </Card.Link>
              </Card.Body>
            </Card>
          </article>
          <article style={{ 'marginBottom': '50px' }}>
            <article className="col-md col-sm-6 mt-4 mx-auto">
              <Card
                bg='info'
                key='info'
                text='white'
                style={{ width: '10rem', height: '7rem' }}
                className="mb-2"  >
                <Card.Link href="/login"></Card.Link>
                <Card.Body>
                  <Card.Link href="/login" style={{ color: 'white' }}>
                    For Admin Login, please click here
                   </Card.Link>
                </Card.Body>
              </Card>
            </article>
          </article>
        </article>
      </article>

    );
  }
}



export default Landing

