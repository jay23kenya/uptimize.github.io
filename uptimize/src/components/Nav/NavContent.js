import React from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav as Navigation,
  NavItem,
  NavLink
} from "reactstrap";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { Container } from "@material-ui/core";

const backgroundColor = "grey";
const styles = {
  logo: {
    height: "45%",
    width: "45%",
    position: {
      position: "absolute",
      top: 12.5
    }
  },

  backgroundColor: backgroundColor,
  nav: {
    marginLeft: "auto",
    marginBottom: "auto",
    marginTop: "auto"
  },
  bigNav: {
    padding: "15px",
    marginLeft: "auto",
    marginBottom: "auto",
    marginTop: "auto"
  },
  toggler: {
    // backgroundColor: backgroundColor,
  }
};

const NavContent = props => {
  return (
    <Navbar light className="h-100" sticky="top" expand="md">
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
            <div style={styles.toggler}>
              <NavbarToggler onClick={props.toggleNavbar} />
            </div>
            <Collapse isOpen={!props.collapsed} navbar>
              <div
                style={
                  props.collapsed
                    ? { backgroundColor: 'inherit' }
                    : { backgroundColor: styles.backgroundColor, padding: '5px'}
                }
              >
                {/* //props.transparentBackground}}> */}
                <Navigation className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#problem">
                      <div style={{ ...props.mainStyle.text, fontSize: '14px' }}>Problem</div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#solution">
                      <div style={{ ...props.mainStyle.text, fontSize: '14px'  }}>Solution</div>
                    </NavLink>
                  </NavItem>
                </Navigation>
              </div>
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
  collapsed: PropTypes.bool.isRequired,
  transparentBackground: PropTypes.string.isRequired
};

export default NavContent;
