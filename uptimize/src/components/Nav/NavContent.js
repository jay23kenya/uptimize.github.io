import React from "react";
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

import { ReactComponent as Logo } from "../../images/logo.svg";
import { Container } from "@material-ui/core";

const styles = {
  logo: {
    height: "75%",
    width: "75%",
    position: {
      position: "absolute",
      top: 12.5
    }
  },
  nav: {
    backgroundColor: "grey",
    padding: "15px",
    marginLeft: "auto",
    marginBottom: "auto",
    marginTop: "auto"
  },
  bigNav: {
    padding: "15px",
    marginLeft: "auto",
    marginBottom: "auto",
    marginTop: "auto"
  }
};

const NavContent = props => {
  return (
    <Navbar className=" h-100" sticky="top" expand="md">
      <Container fixed>
        <div className="d-flex">
          <div>
            <NavbarBrand href="/">
              <div style={styles.logo.position}>
                <Logo height={styles.logo.height} width={styles.logo.width} />
              </div>
            </NavbarBrand>
          </div>

          <div style={styles.nav}>
            <NavbarToggler onClick={props.toggleNavbar} />

            <Collapse isOpen={props.collapsed} navbar>
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
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

NavContent.propTypes = {
  mainStyle: PropTypes.object,
  toggleNavbar: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired
};

export default NavContent;
