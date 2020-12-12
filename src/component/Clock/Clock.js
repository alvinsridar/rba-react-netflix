import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super();
        this.state = {
            currentTime: new Date(),
        };
    }

    //setState starts after Clock component is mounted
    componentDidMount() {
        //this.timerID will be used in componentWillUnmount
        this.timerID = setInterval( ()=> {
            this.setState({
                currentTime: new Date(),
            });
        }, 1000);
    }

    //setInterval will continue even after component is unmounted
    //clearInterval is used to stop this behavior
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <main>
                {this.state.currentTime.toLocaleTimeString()}
            </main>
        );
    }
}