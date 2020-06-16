import React, { Component } from "react";
import '../App.css';
import { Card } from "react-bootstrap";

//error page for the users to be redirected
class NotFound extends Component {
  render() {
    return (
      <article className="container">
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
                  <h1>  Page not found</h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
        </form>
      </article>
    );
  }
}

export default NotFound