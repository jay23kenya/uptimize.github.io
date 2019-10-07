import React, { Component } from "react";
import PropTypes from "prop-types";
// import * as _ from "underscore";
import NavContent from "./NavContent";

const styles = {
  whiteBackground: {
    backgroundColor: "white",
    height: "100px"
  },
  transparentBackground: {
    backgroundColor: "rgb(256,256, 256, .8)",
    height: "100px"
  },
  navbar: {
    width: "100%",
    height: "100px"
  }
};

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
      transparent: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.setTransparent = this.setTransparent.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  componentDidMount = () => {
    window.addEventListener("scroll", () => this.handleScroll());
  };

  handleScroll = () => {
    var nav = document.getElementById("nav");
    var hero = document.getElementById("hero");
    var stickLocation = document.getElementById("navStick").offsetTop;
    var hideHeroLocation = document.getElementById("hideHero").offsetTop;

    if (window.pageYOffset >= stickLocation) {
      nav.classList.add("fixed-top");
      this.setTransparent(true);

    } else {
      nav.classList.remove("fixed-top");
      this.setTransparent(false);
    }

    if (window.pageYOffset >= hideHeroLocation) {
      hero.classList.add("d-none");
    } else {
      hero.classList.remove("d-none");
    }


  };

  setTransparent(t) {
    if (t) {
      this.setState({
        transparent: true
      });
    } else {
      this.setState({
        transparent: false
      });
    }
  }

  render() {
    return (
      <div>
        <div id="nav">
          {this.state.transparent ? (
            <div style={styles.transparentBackground}>
              <NavContent
                collapsed={this.state.collapsed}
                toggleNavbar={this.toggleNavbar}
                mainStyle={this.props.mainStyle}
              />
            </div>
          ) : (
            <div style={styles.whiteBackground}>
              <NavContent
                collapsed={this.state.collapsed}
                toggleNavbar={this.toggleNavbar}
                mainStyle={this.props.mainStyle}
              />
            </div>
          )}
        </div>
        {this.state.transparent ? (
          <div style={{ height: "100px", width: "100%", backgroundColor: 'white' }}></div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

Nav.propTypes = {
  mainStyle: PropTypes.object
};

export default Nav;
