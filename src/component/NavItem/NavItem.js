import React from 'react'

export default function NavItem (props) {
    return (
        <div className="App-Nav">
            <a href={props.path}>
                {props.text}
            </a>
        </div>
    );
}