import React from 'react'

export default function LogoutButton(props) {
    return (
        <button className="btn" onClick={props.logout}>Log Out</button>
    );
}