import React from 'react';
import PosterList from '../component/PosterList/PosterList.js';
import Originals from '../asset/netflix-originals.json';
import TrendingNow from '../asset/trending-now.json';

export default function Home(props) {
    return (
        <div>
            <p>Welcome, {props.userName === null ? 'Guest' : props.userName}.</p>
            <PosterList title='Originals' posters={Originals}/>
            <PosterList title='Trending Now' posters={TrendingNow}/>
        </div>
    );
}