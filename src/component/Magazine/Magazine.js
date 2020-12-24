import React from 'react';
import styles from '../../styles/styles.module.css';

export default function Magazine(props) {
    return(
        <div className={`${styles.magazine}`}>
            <img className={`${styles.magazineImage}`} src={props.imageSource} alt={props.alt} />
            <p className={`${styles.magazineDate}`}>{issueDate(props.month, props.year)}</p>
        </div>
    );
};

function issueDate(month, year) {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR'];
    const monthYear = monthNames[month-1] + ` ${year}`;
    return monthYear;
};