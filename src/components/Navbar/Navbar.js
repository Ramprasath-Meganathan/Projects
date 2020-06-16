import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

//Navbar header to be displayed in all the pages
class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark">

                <button className="navbar-toggler navbar-toggler-right navbar-dark"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h3 className="navbarTitle">COVID-19 Community Care System</h3>
                <section className="collapse navbar-collapse"
                    id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About us
                </Link>
                        </li>
                    </ul>

                </section>

            </nav>
        )
    }
}

export default withRouter(Navbar)