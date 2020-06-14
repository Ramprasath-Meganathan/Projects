import React, { useState,Component } from "react";

import '../App.css';
import { Card } from "react-bootstrap";

class About extends Component{
    render()
    { 
        return (
            <div class="container">
          <form>
          <div class="row">
          <Card
    bg='light'
    key='info'
    text='dark'
    style={{ width: '70rem' }}
    className="mb-2">
    <Card.Body>
      <Card.Text>
        <h1>Page yet to be built</h1>
      </Card.Text>
    </Card.Body>
  </Card>
       </div>
          </form>
          </div>
        );  
    }
}

export default About