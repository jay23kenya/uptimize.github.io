import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
const mainStyle = {

}

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Teams/>
                <FAQ />
                <Footer />
            </div>
        )
    }
}

export default LandingPage
