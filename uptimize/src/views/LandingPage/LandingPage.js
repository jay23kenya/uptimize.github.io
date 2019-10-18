import React, { Component } from 'react'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const mainStyle = {
fonts:{
    fontFamily : 'serif,sans'
}
}
function hello(){

}

export class LandingPage extends Component {
    render() {
        return (
            <div>
                
                 <Hero mainStyle={mainStyle} /> 
                <Footer mainStyle={mainStyle} hello={hello}/>

            </div>
        )
    }
}


export default LandingPage
