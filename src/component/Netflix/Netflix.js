//import React from 'react' - allows the code to be recognized as a react component
import React, { Component } from 'react'
import AppBar from '../AppBar/AppBar.js'
import AppLogo from '../Logo/AppLogo.js'
import logo from '../Logo/netflix-logo.svg'
import NavItem from '../NavItem/NavItem.js'
import LoginButton from '../LoginButton/LoginButton.js'
import LogoutButton from '../LogoutButton/LogoutButton.js'
import ToDoList from '../ToDoList/ToDoList.js'

//class component, extends Component to use render()
//only one default export is allowed
//other exports must be named
export default class Netflix extends Component {

    state = {
       //userName: null,
        isLoggedIn: false,
    };

    login = () => {
        this.setState({
            //userName: 'Tachikoma',
            isLoggedIn: true,
        });
    };

    logout = () => {
        this.setState({
            //userName: null,
            isLoggedIn: false,
        });
    };

    render() {
        const loginBtn = this.state.isLoggedIn ? (
            <LogoutButton logout={this.logout}/>
        ) : (
            <LoginButton login={this.login} />
        );
        
        return (
            <div className="App">
                <AppBar>
                    <AppLogo logo={logo} logoAlt="" />
                    <NavItem text="Home" path="/#home" />
                    <NavItem text="My List" path="/#myList" />
                </AppBar>
                {loginBtn}
                <ToDoList/>
            </div>
        )
    }
}