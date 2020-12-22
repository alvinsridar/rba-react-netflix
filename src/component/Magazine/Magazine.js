import React from 'react';
import './Magazine.css';

export default function Magazine(props) {
    return(
        <div className='magazine'>
            <img className='magazine__image' src={props.imageSource} alt={props.alt} />
            <p className='magazine__date'>{issueDate(props.month, props.year)}</p>
        </div>
    );
};

function issueDate(month, year) {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR'];
    const monthYear = monthNames[month-1] + ` ${year}`;
    return monthYear;
};