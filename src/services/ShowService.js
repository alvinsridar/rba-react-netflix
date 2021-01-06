import { Component } from "react";

export default class ShowService extends Component {
    state = {
        netflixOriginals: [],
        netflixTrending: []
    }
    //API key = '5aea799b848bfd53137b52e96d463ef5';

    componentDidMount() {
        this.setState({
            netflixOriginals: this.getNetflixOriginals(),
            netflixTrending: this.getNetflixTrending()
        });
        console.log(this.state.netflixOriginals);
    }

    async getNetflixOriginals() {
        const response = fetch('https://api.themoviedb.org/3/discover/tv?api_key=5aea799b848bfd53137b52e96d463ef5&with_networks=213');
        const data = await (await response).json();
        return data.results;
        //data.results is the array of objects of each show
    }

    async getNetflixTrending() {
        const response = fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=5aea799b848bfd53137b52e96d463ef5&with_networks=213');
        const data = await (await response).json();
        return data.results;
        //data.results is the array of objects of each show
    }

    render() {
        return {
            netflixOriginals: this.state.netflixOriginals,
            netflixTrending: this.state.netflixTrending
        }
    }
}