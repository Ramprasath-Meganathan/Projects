import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import About from './components/AboutUs'
import Footer from './components/Navbar/Footer'
import NotFound from './components/NotFound'
import NotBuilt from './components/NotBuilt'
import Feedback from './components/Feedback'
import ForgotPassword from './components/ForgotPassword'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
          <Switch>
          <Route exact path="/"><Landing/></Route>
            <Route exact path="/about"><About/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/notbuilt"><NotBuilt/></Route>
            <Route exact path="/feedback"><Feedback/></Route>
            <Route exact path="/forgotPassword"><ForgotPassword/></Route>
            <Route><NotFound/></Route>
          </Switch>
          </div>
          <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
