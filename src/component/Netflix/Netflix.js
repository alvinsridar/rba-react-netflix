//import React from 'react' - allows the code to be recognized as a react component
import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar.js';
import AppLogo from '../Logo/AppLogo.js';
import logo from '../Logo/netflix-logo.svg';
import NavItem from '../NavItem/NavItem.js';
import LoginButton from '../LoginButton/LoginButton.js';
import LogoutButton from '../LogoutButton/LogoutButton.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home.js';
import MyList from '../../routes/MyList/MyList.js';
import Magazines from '../../routes/Magazines/Magazines.js';
import styles from '../../styles/styles.module.css';
import ShowDetails from '../../routes/ShowDetails/ShowDetails.js';

//class component, extends Component to use render()
//only one default export is allowed
//other exports must be named
export default class Netflix extends Component {

    state = {
        userName: null,
        isLoggedIn: false,
        netflixOriginals: [],
        trendingNow: []
    };

    componentDidMount() {
        //call async functions and save array containing show data to states
        this.getNetflixOriginals().then(data => {
            this.setState({
                netflixOriginals: data
            })
        });
        this.getNetflixTrending().then(data => {
            this.setState({
                trendingNow: data
            })
        })
    }

    //fetch shows data
    async getNetflixOriginals() {
        const response = fetch('https://api.themoviedb.org/3/discover/tv?api_key=5aea799b848bfd53137b52e96d463ef5&with_networks=213');
        const data = await (await response).json();
        return (
            data.results.map((show) => ({
                //data.results is the array of objects of each show
                ...show,
                poster_path: ('https://image.tmdb.org/t/p/original' + show.poster_path),
                backdrop_path: ('https://image.tmdb.org/t/p/original' + show.backdrop_path)
                //API result does not have complete URL
            }))
        );
    }

    async getNetflixTrending() {
        const response = fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=5aea799b848bfd53137b52e96d463ef5&with_networks=213');
        const data = await (await response).json();
        return (
            data.results.map((show) => ({
                ...show,
                poster_path: ('https://image.tmdb.org/t/p/original' + show.poster_path),
                backdrop_path: ('https://image.tmdb.org/t/p/original' + show.backdrop_path)
            }))
        );
    }

    login = () => {
        this.setState({
            userName: 'Tachikoma',
            isLoggedIn: true,
        });
    };

    logout = () => {
        this.setState({
            userName: null,
            isLoggedIn: false,
        });
    };

    render() {
        const loginBtn = this.state.isLoggedIn ? (
            <LogoutButton logout={this.logout} />
        ) : (
                <LoginButton login={this.login} />
            );

        return (
            <Router>
                <div className={`${styles.app}`}>
                    <AppBar>
                        <AppLogo logo={logo} logoAlt='' />
                        <NavItem text='Home' path='/' />
                        <NavItem text='My List' path='/myList' />
                        <NavItem text='Magazine' path='/magazines' />
                    </AppBar>
                    {loginBtn}
                </div>
                <main className={`${styles.defaultText}`}>
                    <Switch>
                        <Route exact path='/'>
                            <Home userName={this.state.userName} netflixOriginals={this.state.netflixOriginals} trendingNow={this.state.trendingNow} />
                        </Route>
                        <Route exact path='/myList'><MyList userName={this.state.userName} /></Route>
                        <Route exact path='/magazines'><Magazines /></Route>
                        <Route exact path='/showDetails'><ShowDetails {...this.state} /></Route>
                        {/* use URL params to set vairable path names, e.g. /show/:id/:name */}
                    </Switch>
                </main>
            </Router>
        )
    }
}