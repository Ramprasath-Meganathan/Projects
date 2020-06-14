import React, { useState, Component } from "react";
import { Card } from "react-bootstrap";
import '../App.css';
import ControlledCarousel from './ControlledCarousel';

class Landing extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
        <ControlledCarousel />
          <div className="col-md mt-4 mx-auto">
            <Card
              bg='primary'
              key='success'
              text='white'
              style={{ width: '10rem',height:'7rem'  }}
              className="Card mb-2">
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  Become a volunteer,please click here
        </Card.Link>
              </Card.Body>

            </Card>
          </div>
          <div className="col-md mt-4 mx-auto">
            <Card
              bg='success'
              key='primary'
              text='white'
              style={{ width: '10rem',height:'7rem'  }}
              className="Card mb-2" >
              <Card.Link href="/login"></Card.Link>
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  Willing to donate? please click here
      </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md mt-4 mx-auto">
            <Card
              bg='dark'
              key='black'
              text='white'
              style={{ width: '10rem',height:'7rem'  }}
              className="mb-2"  >
              <Card.Link href="/login"></Card.Link>
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  want masks and gloves? , please click here
      </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md mt-4 mx-auto">
            <Card
              bg='info'
              key='info'
              text='white'
              style={{ width: '10rem',height:'7rem'  }}
              className="mb-2"  >
              <Card.Link href="/login"></Card.Link>
              <Card.Body>
                <Card.Link href="/login" style={{ color: 'white' }}>
                  For Admin Login, please click here
 </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    );
  }
}

const imagesToSlideshow = [
  'https://www.safetyandhealthmagazine.com/ext/resources/images/news/words/glove-stop-coronavirus.jpg?1584626830&auto=format&w=512&q=75&resize=width:50px,height:50px',
  'https://img.rasset.ie/00140c52-800.jpg',
  'https://www.hkpr.on.ca/wp-content/uploads/2020/04/GettyImages-1203224882-800x533.jpg?w=600&auto=format&crop=fit&q=85',
  'http://s3.amazonaws.com/content-kingjesus/wp-content/uploads/sites/7/2020/04/08194836/resources_read.png'
]

// const images = [
//   'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//   'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
//   'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
//   'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
// ]


export default Landing

