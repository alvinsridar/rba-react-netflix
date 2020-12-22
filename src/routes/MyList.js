import React from 'react';

export default function MyList(props) {
    return (
        <p>{props.userName === null? 'Log in to see your personalized list.' : (props.userName+"'s list.")}</p>
    );
}