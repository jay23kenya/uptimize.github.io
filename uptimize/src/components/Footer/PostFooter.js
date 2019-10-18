import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Wade } from "../../images/wade.svg";
// import { ReactComponent as Jay } from "../../images/jay.svg";
import LazyLoad from "react-lazyload";
import { Grid, Paper } from "@material-ui/core";
import ColorButton from "../../misc/ColorButton";

const footerHeight = 300;
const styles = {
  root: {
    height: `${footerHeight}px`,
    width: "100%",
    backgroundColor: "white",
    zIndex: 0,
    maxWidth: '100%'
  },
  container: {
    position: 'relative',
    height: `${footerHeight}px`,
    width: "100%"

  },
  img1: {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxHeight: `${footerHeight}px`,
    minHeight: "100%"
  },

  callToAction: {
    zIndex: 0,
    borderRadius: "5px",
    border: '1px #555',
    //boxShadow: '0 0 30px rgba(0, 0, 0, 0.6)',
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2), 20px 20px 20px 20px rgba(0, 0, 0, 0.19)",
    height: `${footerHeight}px`,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }, 
  // button: {
  //   postion: 'relative'
  // }
};

const PostFooter = props => {
  return (
    <div  id='postFooter' style={{ ...styles.root }}>
      <Grid container spacing={0} justifty="center">
        <Grid item xs={4} md={4}>
          <LazyLoad once height={200} offset={[-200, 200]}>
              <div  style={styles.container}>
                <Wade
                  className='animated fadeIn'
                  style={styles.img1}
                />
              </div>
          </LazyLoad>
        </Grid>
        <Grid item xs={8} md={4}>
          <Paper style={styles.callToAction}>
            <div style={{ display: "block-inline" }}>
              <div className="text-center mb-3 px-2">
                <h2 style={{...props.mainStyle.subHeader}}>What are you waiting for?</h2>
              </div>
              <div className="text-center" style={styles.button}>
                <ColorButton
                  contained
                  noRadius
                  textColor="black"
                  color={props.mainStyle.buttonColor.color}
                  hoverColor={props.mainStyle.buttonColor.hoverColor}
                  style={{
                    padding: '14px',
                    fontSize: '18px',
                    ...props.mainStyle.button
                  }}
                >
                  Get Started
                </ColorButton>
              </div>
            </div>
          </Paper>
        </Grid>

        {/* <Grid item xs={3} md={4}>
          <LazyLoad once height={200} offset={[0, 200]}>
            <ScrollAnimation animateIn="slideInUp" initiallyVisible={false}>
            <div style={styles.container}>
              {/* <Jay
                style={styles.img2}

                //   height={"100%"}
                //  width={"50%"}
              /> 
              </div>
            </ScrollAnimation>
          </LazyLoad>
        </Grid> */}
      </Grid>
    </div>
  );
};

PostFooter.propTypes = {
  mainStyle: PropTypes.object
};

export default PostFooter;
