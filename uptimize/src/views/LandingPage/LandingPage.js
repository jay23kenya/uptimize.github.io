import React, { Component } from 'react'
import Teams from '../../components/Teams/Teams'
import FAQ from '../../components/FAQ/FAQ'
const mainStyle = {

}

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Teams/>
                <FAQ />
            </div>
        )
    }
}

export default LandingPage
