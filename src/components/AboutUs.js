import React, { Component } from "react";

import '../App.css';
import { Card } from "react-bootstrap";

//About us page that will give the information about the page
class About extends Component {
  render() {
    return (
      <article className="container">
        <form>
          <article className="col flex px-10" ><h1>About us</h1></article>
          <article className="row">
            <Card
              bg='primary'
              key='info'
              text='white'
              style={{ width: '70rem' }}
              className="mb-2">
              <Card.Title className="pull-left">
                <h3>Our mission</h3>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Sit amet dictum sit amet justo. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Mauris commodo quis imperdiet massa tincidunt nunc. Quis ipsum suspendisse ultrices gravida dictum fusce. In est ante in nibh mauris cursus. Vulputate odio ut enim blandit volutpat. Tincidunt lobortis feugiat vivamus at augue eget. Nunc congue nisi vitae suscipit tellus mauris a. Risus commodo viverra maecenas accumsan lacus vel. Enim neque volutpat ac tincidunt vitae semper quis lectus. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Purus gravida quis blandit turpis. Egestas sed tempus urna et pharetra pharetra massa. Ut faucibus pulvinar elementum integer enim neque.
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
          <article className="row">
            <Card
              bg='info'
              key='info'
              text='white'
              style={{ width: '70rem' }}
              className="mb-2">
              <Card.Title>
                <h3>Our values</h3>
              </Card.Title>
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Sit amet dictum sit amet justo. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Mauris commodo quis imperdiet massa tincidunt nunc. Quis ipsum suspendisse ultrices gravida dictum fusce. In est ante in nibh mauris cursus. Vulputate odio ut enim blandit volutpat. Tincidunt lobortis feugiat vivamus at augue eget. Nunc congue nisi vitae suscipit tellus mauris a. Risus commodo viverra maecenas accumsan lacus vel. Enim neque volutpat ac tincidunt vitae semper quis lectus. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Purus gravida quis blandit turpis. Egestas sed tempus urna et pharetra pharetra massa. Ut faucibus pulvinar elementum integer enim neque.
                </Card.Text>
              </Card.Body>
            </Card>
          </article>
        </form>
      </article>
    );
  }
}

export default About