import React from "react";
import LazyLoad from "react-lazyload";
import { ReactComponent as Logo } from "../../images/shortLogo.svg";
import  bg  from "../../images/stars.svg";
import './style.css'

const styles = {
  root: {
     backgroundColor: 'black',//"#02bd5f",
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
   display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: 'sticky',
  },

  logo: {
    // height: "150px",
    // paddingLeft: "100px"
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
            <Logo id='loading' height={200} width={200} />
          </LazyLoad>
        </div>
    </div>
  );
};

export default Screen;
