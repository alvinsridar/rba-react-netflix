import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../../styles/styles.module.css';
import { MyListContext } from '../../context/MyListContext';

function ShowDetails(props) {
    const showData = props.location.state.posters;
    const { name, backdrop_path, overview, vote_average } = showData;
    const { addShowToList } = useContext(MyListContext);

    //console.log(props.location.state.posters);

    return (
        // <MyListContext.Provider value={{
        //     message: count
        // }}>
        <div className={`${styles.showDetails}`}>
            <img className={`${styles.detailsImage}`} src={backdrop_path} alt=''></img>
            <h2>{name}</h2>
            <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`}>Play</button>
            <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`} onClick={() => {
                addShowToList(showData);
            }}>Add to My List</button>
            <p>Rating: {vote_average}/10</p>
            <p>{overview}</p>
        </div>
        // </MyListContext.Provider >
    )

}

export default withRouter(ShowDetails);

// class ShowDetails extends Component {
//     render() {
//         const { name, backdrop_path, overview, vote_average } = this.props.location.state.posters;

//         console.log(this.props.location.state.posters);
//         return (
//             <div className={`${styles.showDetails}`}>
//                 <img className={`${styles.detailsImage}`} src={backdrop_path} alt=''></img>
//                 <h2>{name}</h2>
//                 <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`}>Play</button>
//                 <button type='button' className={`${styles.detailsBtn} ${styles.defaultText}`}>Add to My List</button>
//                 <p>Rating: {vote_average}/10</p>
//                 <p>{overview}</p>
//             </div>
//         )
//     }
// }