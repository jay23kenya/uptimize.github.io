import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import SimpleExpansionPanel from '../../components/FAQ/FAQ3'
import Stats  from '../../components/Stats/Stats'
import FAQ from '../FAQ/FAQ'
//import Faq from '../../components/FAQ/FAQ2'
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
    teamCard: {
      width: "25%",
      display: "inline-block",      
    },
    subHeader: {
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "28px",
      fontWeight: "700",
      letterSpacing: "0px"
    },
    membertext: {
      color: "black",
      fontFamily: "Montserrat, 'Proza Libre', sans-serif",
      fontSize: "14px",
      fontWeight: 400,
      textAlign: "center"
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
    overlay: {
      top: "0",
      bottom: "0",
      left: "0",
      right: "0",
      height: "100%",
      width: "100%",
      opacity: "1",
      transition: ".5s ease",
      backgroundColor: "#008CBA",
      '&:hover': {
        background: "blue",
     },
    },
    buttonColor: {
      color: "#03fc7f",
      hoverColor: "#02bd5f"
    },
    ContactButton: {
        fontSize: "14px",
        padding: "14px 36px"
    },
    bigButton: {
      fontSize: "21px",
      padding: "14px 36px"
    },
    alternateBackgroundColor: {
      backgroundColor: "#f7f9fc"
    },
    section: {
      paddingTop: "75px",
      paddingBottom: "75px"
    },
    wavyDiv: {      
      height: "100%",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: "white"
    }
  };
export class LandingPage extends Component {
    render() {
        return (
          
            <div>
              <Teams mainStyle={mainStyle}/>                           
                  <FAQ />
                <Contact mainStyle={mainStyle}  />
                {/* <Stats/> */}
                <Footer />
                
            </div>
        )
    }
}

export default LandingPage
