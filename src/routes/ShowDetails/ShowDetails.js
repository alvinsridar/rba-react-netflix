import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../../styles/styles.module.css';

class ShowDetails extends Component {
    render() {
        // const showName = this.props.location.state.posters.altName;
        // const backdrop = this.props.location.state.posters.backdrop;
        const {name, backdrop_path, overview, vote_average} = this.props.location.state.posters;

        console.log(this.props.location.state.posters);
        //return <Redirect to='/Magazines' />;
        return (
            <div className={`${styles.showDetails}`}>
                <img className={`${styles.detailsImage}`} src={backdrop_path} alt=''></img>
                <h2>{name}</h2>
                <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`}>Play</button>
                <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`}>Add to My List</button>
                <p>Rating: {vote_average}/10</p>
                <p>{overview}</p>
            </div>
        )
    }
}

export default withRouter(ShowDetails);