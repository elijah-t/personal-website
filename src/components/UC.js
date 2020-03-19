import React, { Component } from 'react';
import Navbar from './Navbar.js'
import 'bulma/css/bulma.css'
import './About.css'

import penguinuc from '../Images/penguinuc.png'

class UC extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <img className="uc" src={penguinuc} alt="Under construction penguin"/>
                    <div>
                        <p> Under construction!</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default UC;