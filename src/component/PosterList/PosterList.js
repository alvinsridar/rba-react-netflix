import React from 'react';
import Poster from '../Poster/Poster';
import styles from '../../styles/styles.module.css';

export default function PosterList({title, posters = []}) {

    return(
        <div>
            <h3>{title}</h3>
            <div className={`${styles.posterListContainer}`}>
                {posters.map((poster, index) => {
                    const {poster_path, name} = poster;
                    return <Poster key={index} poster_path={poster_path} name={name} {...poster}/>
                    //{...poster} passes properties other than poster_path and name, i.e. overview, backdrop_path, which are used in ShowDetails
                })}
            </div>
        </div>
    )
}