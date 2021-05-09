import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Navbar>
          <Nav>
            <NavItem>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </NavItem>
          </Nav>

          <Nav>
            <NavItem>
              <Link to="/addemployee">
                <h3>&nbsp;&nbsp;Add New Employee</h3>
              </Link>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <Link to="/adddepartment">
                <h3>&nbsp;&nbsp;Add New Department</h3>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
export default Header;
