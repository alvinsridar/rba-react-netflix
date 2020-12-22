import React from 'react';
import './Poster.css';

export default function Poster(props) {
    return (
        <div className='poster'>
            <img className='poster__image' src={props.image} alt={props.altName} />
        </div>
    );
}
