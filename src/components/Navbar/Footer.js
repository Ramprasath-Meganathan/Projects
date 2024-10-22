import React, { Component } from 'react'
import '../../App.css';

//Footer component to be displayed in all the pages
class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <nav className="navbar navbar-expand-lg fixed-bottom navbar-light bg-light rowCenter">
          <a href="foo" className="navbar-brand d-flex justify-content-center footerStyle">Copyright 2020 All rights reserved</a>
          <a href="/notbuilt" className="navbar-primary d-flex justify-content-center footerStyle">Contact us </a>
          <span className="px-1" />
          <a href="/Feedback" className="navbar-primary d-flex justify-content-center footerStyle">Feedback</a>
        </nav>
      </section>
    );
  }
}



export default Footer