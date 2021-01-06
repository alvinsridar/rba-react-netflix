import React from 'react';
import styles from '../../styles/styles.module.css';
import {NavLink} from 'react-router-dom';

export default function Poster(posters) {
    const {poster_path, name} = posters;

    return (
        <NavLink
        className={`${styles.poster}`}
        exact to={{
            pathname:'/showDetails',
            state: {posters} //state to persist at the location
        }}>
            
            <img className={`${styles.posterImage}`} src={poster_path} alt={name}/>
        </NavLink>
    );
}
