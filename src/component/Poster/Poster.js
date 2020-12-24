import React from 'react';
import styles from '../../styles/styles.module.css';

export default function Poster(props) {
    return (
        <div className={`${styles.poster}`}>
            <img className={`${styles.posterImage}`} src={props.image} alt={props.altName} />
        </div>
    );
}
