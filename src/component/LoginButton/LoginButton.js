import React from 'react'

export default function LoginButton(props) {
    return (
        <button className="btn" onClick={props.login}>Log In</button>
    );
}