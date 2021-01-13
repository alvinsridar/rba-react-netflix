import React, { useContext } from 'react';
import PosterList from '../../component/PosterList/PosterList.js';
import ShowContext from '../../context/ShowContext.js';
import UserContext from '../../context/UserContext.js';
//import Originals from '../asset/netflix-originals.json';
//import TrendingNow from '../../asset/trending-now.json';

export default function Home() {

    const user = useContext(UserContext);
    const shows = useContext(ShowContext);

    return (
        <div>
            <p>Welcome, {user.userName === null ? 'Guest' : user.userName}.</p>
            <PosterList title='Originals' posters={shows.netflixOriginals}/>
            <PosterList title='Trending Now' posters={shows.trendingNow}/>
        </div>
    );
}