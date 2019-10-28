import React from 'react';
import Contact from '../../components/Contact/Contact'
import Nav from "../../components/Nav/Nav";
import wavyBackground from "../../images/wavy-bg.svg";
import CallToActionFooter from "../../components/Footer/CallToActionFooter";
const mainStyle = {
    primaryColor: {
      color: "#03fc7f"
    },
    secondaryColor: {
      color: "#02bd5f"
    },
    header: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "46px",
      fontWeight: "700"
    },
    subHeader: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "28px",
      fontWeight: "700",
      letterSpacing: "0px"
    },
    text: {
      color: "black",
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "18px",
      fontWeight: 400
    },
    button: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontWeight: 700
    },
    buttonColor: {
      color: "#03fc7f",
      hoverColor: "#02bd5f"
    },
    bigButton: {
      fontSize: "21px",
      padding: "14px 36px"
    },
    alternateBackgroundColor: {
      backgroundColor: "#eff2f6" //"#f7f9fc"
    },
    section: {
      paddingTop: "75px",
      paddingBottom: "75px"
    },
    wavyDiv: {
      backgroundColor: "white",
      backgroundImage: `url(${wavyBackground})`,
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 11
    }
  };
const ContactView = props => {
    return (
        <div>
            <Nav mainStyle={mainStyle} />
        <Contact mainStyle={props.mainStyle}/>
        <CallToActionFooter mainStyle={mainStyle} />
        </div>
    )
}

export default ContactView;