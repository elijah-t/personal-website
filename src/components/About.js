import React, { Component } from 'react';
import Navbar from './Navbar.js'
import 'bulma/css/bulma.css'
import './About.css'

import penguinuc from '../Images/penguinuc.png'

class About extends Component{
    render(){
        return(
            <div className="bg">
                <Navbar />
                <h1>About me!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus sollicitudin hendrerit felis cursus pellentesque. Duis faucibus eget 
                    libero non dignissim. Suspendisse bibendum ante nec fermentum commodo. Cras sed 
                    nibh vestibulum, aliquet nisi et, congue mauris. Ut lobortis in sem quis maximus. 
                    Phasellus elementum risus id tristique tempor. Vivamus condimentum nulla in nunc 
                    dignissim interdum. Nunc a volutpat sapien, blandit interdum urna. Pellentesque 
                    luctus consectetur nunc et posuere. Vivamus sed lorem odio.
                </p>
            </div>

        )
    }
}

export default About;