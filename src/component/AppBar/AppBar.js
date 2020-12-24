import React from 'react'
import styles from '../../styles/styles.module.css';

//function component
export default function AppBar(props) {
    return (
      <div className={`${styles.appBar}`}>
        {props.children}
      </div>  
    );
}