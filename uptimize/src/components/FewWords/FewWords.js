import React from "react";
import PropTypes from "prop-types";
import { Grid, Container } from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";
import ScrollAnimation from "react-animate-on-scroll";
import LazyLoad from "react-lazyload";
import team from '../../images/team.JPG'
import teamLazy from '../../images/team-min.JPG'

const styles = {
    shadow: {
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
  };
  
const FewWords = props => {
  return (
    <div style={{
        ...props.mainStyle.section
      }}>
      <Container fixed>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="m-3" style={{ maxWidth: "500px" }}>
              <h1
                style={{
                  ...props.mainStyle.defaultColor,
                  ...props.mainStyle.subHeader
                }}
              >
                Few Words About Us
              </h1>
            </div>
            <ScrollAnimation
              animateIn="fadeInLeft"
              initiallyVisible={false}
              animateOnce
            >
              <div className="m-3" style={{ maxWidth: "500px" }}>
                <p style={{...props.mainStyle.text, fontSize: '18px'}}>
                  We are a Digital Marketing Company with a primary focus on
                  Dentists. What separates us from our competition is that we
                  have a strategic system in place which allows us to <b>get high
                  quality leads to convert</b>. We're comprised of Computer
                  Engineers and Computer Scientists with extensive marketing
                  experience. We've developed a Lead Management System soley for
                  our clients which will allow you to have the proper resources
                  to <b>keep your leads organized</b> and it also provides analytics
                  which emphasizes the <b>importance of contacting leads in a
                  timely manner</b>. Our team is dedicated to providing you with a
                  seemless marketing experience!
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce
              initiallyVisible={false}
            >
              <div className="m-3">
                <ColorButton
                  contained
                  noRadius
                  color={props.mainStyle.buttonColor.color}
                  hoverColor={props.mainStyle.buttonColor.hoverColor}
                  style={{
                    ...props.mainStyle.bigButton,
                    ...props.mainStyle.button
                  }}
                >
                    Get Started
                </ColorButton>
              </div>
            </ScrollAnimation>
          </Grid>

          <Grid item xs={12} md={6} className="mt-auto mb-auto">
            <LazyLoad
              once
              height={100}
              placeholder={
                <img
                  src={teamLazy}
                  alt="Wade, Amer, Jay"
                  style={{ maxWidth: "100%", ...styles.shadow }}
                />
              }
            >
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce
                initiallyVisible={false}
              >
                <img
                  src={team}
                  alt="Wade, Amer, Jay"
                  style={{ maxWidth: "100%", ...styles.shadow }}
                />
              </ScrollAnimation>
            </LazyLoad>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

FewWords.propTypes = {
  mainStyle: PropTypes.object
};

export default FewWords;
