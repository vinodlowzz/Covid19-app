import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Navbar,Nav} from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Covid-19</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/india">India</Link>
              <Link className="nav-link" to="/world">World</Link>
            </Nav>
           
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
