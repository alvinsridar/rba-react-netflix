import React, { Component } from 'react';
import Magazine from '../Magazine/Magazine.js';
import styles from '../../styles/styles.module.css';

export default class MagazineList extends Component {
    //states to hold the data
    state = {
        mags: []
    };

    //update state using async function results under componentDidMounts
    componentDidMount() {
        this.getMags().then((data) => {
            // console.log(data);
            this.setState({
                mags: data
            });
        });
    };

    async getMags() {
        const response = fetch('https://www.ourdaily.co/explore/api/magazines');
        const data = await (await response).json();
        return data.data.Regional;
        //data.data.Regional is the array of objects containing individual magazine data
    };

    render() {
        //pass states to Magazine component using map
        return (
            <div>
                <h3>travel 360</h3>
                <div className={`${styles.magazineListContainer}`}>
                    {this.state.mags.map((mag, index) => {
                        return <Magazine key={index} imageSource={mag.heroImage} alt={mag.title} month={mag.month} year={mag.year}/>
                    })}
                </div>
            </div>
        )
    };
}