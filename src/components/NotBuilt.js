import React, { Component } from "react";

import '../App.css';
import { Card } from "react-bootstrap";

class NotBuilt extends Component{
    render()
    { 
        return (
            <div className="container">
          <form>
          <div className="row">
          <Card
    bg='light'
    key='info'
    text='dark'
    style={{ width: '70rem' }}
    className="mb-2">
    <Card.Body>
      <Card.Text>
      Page yet to be built
      </Card.Text>
    </Card.Body>
  </Card>
       </div>
          </form>
          </div>
        );  
    }
}

export default NotBuilt