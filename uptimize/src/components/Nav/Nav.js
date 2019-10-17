import React, { Component } from "react";
import PropTypes from "prop-types";
import NavContent from "./NavContent";
import './style.css'

const styles = {
  whiteBackground: {
    backgroundColor: "white",
    height: "70px"
  },
  transparentBackground: {
    backgroundColor: "rgb(256,256, 256, .8)",
    height: "70px",
    boxShadow: '0 2px 10px 0 #d6d6d6'
  },
  navbar: {
    width: "100%",
    height: "70px",
    boxShadow: '0 2px 10px 0 #d6d6d6'
  },

};

export class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
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
    var hero = document.getElementById("hero");
    var hideHeroLocation = document.getElementById("hideHero").offsetTop;

    if (window.pageYOffset >= hideHeroLocation) {
      // hero.classList.add("d-none");
    } else {
      // hero.classList.remove("d-none");
    }

  };

  render() {
    return (
      <div id='navbar' style={styles.navbar}>
            <div style={styles.whiteBackground}>
              <NavContent
                collapsed={this.state.collapsed}
                toggleNavbar={this.toggleNavbar}
                mainStyle={this.props.mainStyle}
                transparentBackground={styles.transparentBackground.backgroundColor}
              />
            </div>
        </div>
       
    );
  }
}

Nav.propTypes = {
  mainStyle: PropTypes.object
};

export default Nav;
