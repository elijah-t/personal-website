import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navbar from './Navbar.js'
import 'bulma/css/bulma.css'
import './Home.css'

import Me from '../Images/elijah.jpg'

class Home extends Component{
    render(){
        return(
            <div className="bg">
                <Navbar />
                <br/>
                <div className="container">
                    <img className="center portrait" src={Me}></img>
                </div>
                <div className="container">
                    <h1 className="home">Elijah Tungul</h1>
                    <p>Hi! My name is Elijah Tungul, welcome to my website!</p>
                    <p>
                        I am a computer science student looking
                        to create wonderful and innovative things.
                    </p>
                    <br />
                    <p>Find out more about me by clicking my socials at the top of the page or by clicking here:</p>
                    <br/>
                    <div className="center">
                        <Link to="/about">
                            <button class="button is-link is-large is-focused is-light">
                                About me
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;