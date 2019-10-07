import React, { Component } from "react";
import { fadeInUp, fadeOut, zoomIn, zoomOut } from "react-animations";
import Radium, { StyleRoot } from "radium";
import PropTypes from "prop-types";
import ColorButton from "../../misc/ColorButton";

export class FadeInText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: "",
      fadeIn: true,
      currentIndex: 0,
      currentWord: "",
      styles: {},
      showButton: false
    };

    this.toggleFadeIn = this.toggleFadeIn.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  componentDidMount() {
    let fadeOutDuration = (
      this.props.animationDuration +
      this.props.waitDuration +
      1
    ).toString();

    this.setState(
      {
        currentText: this.props.fadeInText[0],
        styles: {
          fadeIn: {
            animation: `x ${this.props.animationDuration.toString()}s`,
            animationName: Radium.keyframes(fadeInUp, "fadeInUp")
          },
          fadeOut: {
            animation: `x ${fadeOutDuration}s`,
            animationName: Radium.keyframes(fadeOut, "fadeOut")
          },
          zoomIn: {
            animation: `x 2s`,
            animationName: Radium.keyframes(zoomIn, "zoomIn")
          },
          zoomOut: {
            animation: `x ${fadeOutDuration +
              this.props.animationDuration -
              2}s`,
            animationName: Radium.keyframes(zoomOut, "zoomOut")
          }
        }
      },
      () => {
        setInterval(() => {
          this.toggleFadeIn();
        }, (this.props.waitDuration + this.props.animationDuration) * 1000);
      }
    );
  }

  toggleFadeIn() {
    this.setState(
      {
        fadeIn: !this.state.fadeIn
      },
      () => {
        if (this.state.fadeIn) {
          console.log('animate')
          this.changeText();
        }
      }
    );
  }

  changeText() {
    if (this.state.currentIndex === this.props.fadeInText.length - 1) {
      this.setState({
        showButton: true,
        currentIndex: this.state.currentIndex + 1
      });
    } else if (this.state.currentIndex === this.props.fadeInText.length) {
      this.setState({
        showButton: false,
        currentIndex: this.state.currentIndex + 1
      });
    } else if (this.state.currentIndex === this.props.fadeInText.length + 1) {
      this.setState(
        {
          currentIndex: 0
        },
        () => {
          this.setState({
            currentText: this.props.fadeInText[this.state.currentIndex]
          });
        }
      );
    } else {
      this.setState(
        {
          currentIndex: this.state.currentIndex + 1
        },
        () => {
          this.setState({
            currentText: this.props.fadeInText[this.state.currentIndex]
          });
        }
      );
    }
  }

  render() {
    return (
      <StyleRoot>
        <div style={{ height: "20px" }}>
          {this.state.showButton ? (
            <div style={this.state.styles.zoomIn}>
              <ColorButton
                contained
                noRadius
                textColor='white'
                color={this.props.mainStyle.buttonColor.color}
                hoverColor={this.props.mainStyle.buttonColor.hoverColor}
                style={{
                  ...this.props.mainStyle.bigButton,
                  ...this.props.mainStyle.button
                }}
              >
                Learn More
              </ColorButton>
            </div>
          ) : this.state.currentIndex === this.props.fadeInText.length + 1 ? (
            <div style={this.state.styles.zoomOut}>
              <ColorButton
                contained
                noRadius
                textColor='white'
                color={this.props.mainStyle.buttonColor.color}
                hoverColor={this.props.mainStyle.buttonColor.hoverColor}
                style={{
                  ...this.props.mainStyle.bigButton,
                  ...this.props.mainStyle.button
                }}
              >
                Learn More
              </ColorButton>
            </div>
          ) : this.state.fadeIn ? (
            <div style={this.state.styles.fadeIn}>
              <h2
                style={{
                  ...this.props.mainStyle.subHeader,
                  fontSize: "32px",
                  fontWeight: "400"
                }}
              >
                <i>{this.state.currentText}</i>
              </h2>
            </div>
          ) : (
            <div style={this.state.styles.fadeOut}>
              <h2
                style={{
                  ...this.props.mainStyle.subHeader,
                  fontSize: "32px",
                  fontWeight: "400"
                }}
              >
                <i>{this.state.currentText}</i>
              </h2>
            </div>
          )}
        </div>
      </StyleRoot>
    );
  }
}

FadeInText.propTypes = {
  mainStyle: PropTypes.object,
  fadeInText: PropTypes.array.isRequired,
  animationDuration: PropTypes.number.isRequired,
  waitDuration: PropTypes.number.isRequired,
  version: PropTypes.number.isRequired
};

FadeInText.defaultProps = {
  animationDuration: 3,
  waitDuration: 1,
  version: 1
};

export default FadeInText;
