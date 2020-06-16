import React, { Component } from "react";

import '../App.css';
import { Card } from "react-bootstrap";

//If page is not built but will be included later then this page is invoked
class NotBuilt extends Component {
  render() {
    return (
      <section className="container">
        <form>
          <article className="row">
            <Card
              bg='light'
              key='info'
              text='dark'
              style={{ width: '70rem' }}
              className="mb-2">
              <Card.Body>
                <Card.Text>
                  <h1> Page yet to be built</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
        </form>
      </section>
    );
  }
}

export default NotBuilt