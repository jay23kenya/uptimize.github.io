import React, { Component } from 'react'
import Teams2 from '../../components/Teams/Teams2'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
const mainStyle = {

}

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Teams2/>
                <FAQ /> 
                <Contact />
                <Footer />
                
            </div>
        )
    }
}

export default LandingPage
