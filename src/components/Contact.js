import React, { Component } from 'react';
import Navbar from './Navbar.js'
import 'bulma/css/bulma.css'
import './Contact.css'

import penguinuc from '../Images/penguinuc.png'

class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="container">
                    <img className="uc" src={penguinuc}/>
                    <div>
                        <p> Under construction!</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Contact;