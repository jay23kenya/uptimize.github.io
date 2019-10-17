import React from "react";
import { CircularProgress } from "@material-ui/core";
import LazyLoad from "react-lazyload";
import { ReactComponent as Logo } from "../../images/shortLogo.svg";

const styles = {
  root: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(14, 40, 67) 0%, rgb(14, 123, 200) 50%, rgb(14, 40, 67) 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw"
  },

  logo: {
    height: "150px",
    paddingLeft: "100px"
  },
  shadow: {
    boxShadow:
      "8px 8px 8px 8px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "rgb(250, 247, 242)"
  }
};

const Screen = () => {
  return (
    <div className="text-center"style={styles.root}>
        <div style={styles.logo}>
          <LazyLoad once height={100}>
            <Logo />
          </LazyLoad>
        </div>
    </div>
  );
};

export default Screen;
