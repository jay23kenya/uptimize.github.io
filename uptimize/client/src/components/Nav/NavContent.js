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
import { Container, Hidden, ClickAwayListener } from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";

const backgroundColor = "white";
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

};

const navLinks = [
  {
    title: "Services",
    href: "/#services"
  },
  {
    title: "About Us",
    href: "/#about-us"
  },
  {
    title: "Pricing",
    href: "/#pricing"
  },
  {
    title: "FAQ",
    href: ""
  },
  {
    title: "Contact",
    href: ""
  }
];

const NavContent = props => {
  return (
    <Navbar light className="h-100" sticky="top" expand="md">
      <Container fixed>
        <div className="d-flex">
          <div>
            <NavbarBrand
              href="/"
              title="The best marketing team in Tampa, Florida. Uptimize Digital Marketing."
            >
              <div style={styles.logo.position}>
                <Logo height={styles.logo.height} width={styles.logo.width} />
              </div>
            </NavbarBrand>
          </div>

          <div style={styles.nav}>
            <ClickAwayListener onClickAway={props.handleClickAway}>
              <div style={styles.toggler}>
                <NavbarToggler onClick={props.toggleNavbar} />
              </div>
            </ClickAwayListener>
            <Collapse isOpen={!props.collapsed} navbar>
              <div
                style={{
                  backgroundColor: styles.backgroundColor,
                  padding: "5px"
                }}
              >
                <Navigation className="ml-auto mt-auto mb-auto h-100" navbar>
                  {navLinks.map((link, idx) => (
                    <NavItem key={idx} className="mt-auto mb-auto">
                      <NavLink href={link.href} title={link.title}>
                        <div
                          style={{ ...props.mainStyle.text, fontSize: "14px" }}
                        >
                          {link.title}
                        </div>
                      </NavLink>
                    </NavItem>
                  ))}

                  <Hidden mdDown>
                    <NavItem>
                      <NavLink title="Get Started">
                        <ColorButton
                          contained
                          noRadius
                          color={props.mainStyle.buttonColor.color}
                          hoverColor={props.mainStyle.buttonColor.hoverColor}
                          style={{
                            ...props.mainStyle.button,
                            padding: "10px 14px"
                          }}
                        >
                          Get Started
                        </ColorButton>
                      </NavLink>
                    </NavItem>
                  </Hidden>
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
