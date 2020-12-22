import React from 'react';
import Poster from '../Poster/Poster';
import './PosterList.css';

export default function PosterList({title, posters = []}) {

    return(
        <div className='poster-list'>
            <h3>{title}</h3>
            <div className='poster-list__container'>
                {posters.map((poster, index) => {
                    return <Poster key={index} image={poster.poster_path} altName={poster.name} />
                })}
            </div>
        </div>
    )
}