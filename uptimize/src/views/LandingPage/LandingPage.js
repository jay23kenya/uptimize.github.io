import React, { Component } from 'react'
//import Teams2 from '../../components/Teams/Teams2'
import FAQ from '../../components/FAQ/FAQ'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import SimpleExpansionPanel from '../../components/FAQ/FAQ3'
import Stats  from '../../components/Stats/Stats'
//import Faq from '../../components/FAQ/FAQ2'
const mainStyle = {

}

export class LandingPage extends Component {
    render() {
        return (
            <div>
                {/* <Teams2/> */}                
                <SimpleExpansionPanel />
                <Contact />
                <Stats/>
                <Footer />
                
            </div>
        )
    }
}

export default LandingPage
