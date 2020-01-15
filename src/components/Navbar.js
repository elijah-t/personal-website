import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './Navbar.css'

class Navbar extends Component{

    state = {
        active: false
    }

    handleClick = () => {
        const { active } = this.state;
        this.setState({active: !active});
    }

    render(){

        const { active } = this.state;

        return(

            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                
                <a href="https://www.facebook.com/profile.php?id=100009399268788" className="navbar-item">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/elijah-tungul-b92497195/" className="navbar-item">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/elijah-t" className="navbar-item">
                    <i class="fab fa-github"></i> 
                </a>

                <a role="button" className={`navbar-burger burger ${active ? "is-active transparent" : ""}`} onClick={this.handleClick} aria-label="menu" aria-expanded="false" data-target="burgerTarget">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="burgerTarget" className={`navbar-menu ${active ? "is-active" : ""}`}>
                <div className="navbar-end">
                <Link to="/"className="navbar-item">
                    Home
                </Link>
                <Link to="./about" className="navbar-item">
                    About
                </Link>
                <Link to="./contact" className="navbar-item">
                    Contact
                </Link>
                </div>
            </div>

            </nav>
            
        )
    }
}

export default Navbar;