import React, { Component } from 'react'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const mainStyle = {
    primaryColor: {
        color: '#03fc7f'
    },
  header: {
    fontFamily: "'Proza Libre', sans-serif",
    fontSize: '46px',
    fontWeight: '700'
  },
  subHeader: {
    fontFamily: "'Proza Libre', sans-serif",
    fontSize: '28px',
    fontWeight: '700'
  },
  text: {
    fontFamily: "'Proza Libre', sans-serif",
    fontSize: '22px',
  },
  button: {
    fontFamily: "'Proza Libre', sans-serif",
    fontWeight: 700
  },
  buttonColor: {
    color: '#03fc7f',
    hoverColor: '#02bd5f'
  },
  bigButton: {
    fontSize: "21px",
    padding: "14px 36px"
  },

}

function hello() {
    console.log('hello')
}

export class LandingPage extends Component {
    render() {
        return (
            <div>
             
                <Hero mainStyle={mainStyle} />
                <Footer mainStyle={mainStyle} hello={hello} />
                
            </div>
        )
    }
}


export default LandingPage
