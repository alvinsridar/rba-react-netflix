import React from 'react';
import Poster from '../Poster/Poster';
import styles from '../../styles/styles.module.css';

export default function PosterList({title, posters = []}) {

    return(
        <div>
            <h3>{title}</h3>
            <div className={`${styles.posterListContainer}`}>
                {posters.map((poster, index) => {
                    return <Poster key={index} image={poster.poster_path} altName={poster.name} />
                })}
            </div>
        </div>
    )
}