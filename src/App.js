import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import About from './components/AboutUs'
import Footer from './components/Navbar/Footer'
import NotFound from './components/NotFound'
import Feedback from './components/Feedback'
import ForgotPassword from './components/ForgotPassword'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="Container">
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/notfound" component={NotFound} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/notfound" component={NotFound} />
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
