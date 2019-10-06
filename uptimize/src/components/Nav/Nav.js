import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as Navigation,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    window.onscroll = function() {
      var nav = document.getElementById("nav");
      var stickLocation = document.getElementById("navStick").offsetTop;
      if (window.pageYOffset > stickLocation) {
        nav.classList.add("fixed-top");
      } else {
        nav.classList.remove("fixed-top");
      }
    };

    return (
      <div id="nav">
        <Navbar sticky="top" color="light" light expand="md">
          <NavbarBrand href="/">Uptimize</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Navigation className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Navigation>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Nav.propTypes = {
  mainStyle: PropTypes.object
};

export default Nav;
