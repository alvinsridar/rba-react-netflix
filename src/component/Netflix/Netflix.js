//import React from 'react' - allows the code to be recognized as a react component
import React, { Component } from 'react'
import AppBar from '../AppBar/AppBar.js'
import App from '../../App.css'
import AppLogo from '../Logo/AppLogo.js'
import logo from '../Logo/netflix-logo.svg'
import NavItem from '../NavItem/NavItem.js'
import LoginButton from '../LoginButton/LoginButton.js'

//class component, extends Component to use render()
//only one default export is allowed
//other exports must be named
export default class Netflix extends Component {
    render() {
        return (
            <div className="App">
                <AppBar>
                    <AppLogo logo={logo} logoAlt="" />
                    <NavItem text="Home" path="/#home" />
                    <NavItem text="My List" path="/#myList" />
                </AppBar>
                <LoginButton />
            </div>
        )
    }
}