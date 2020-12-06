import React from 'react'

export default function AppLogo(props) {
    return(
        <img src={props.logo} alt={props.logoAlt} className="App-Logo"/>
    );
}