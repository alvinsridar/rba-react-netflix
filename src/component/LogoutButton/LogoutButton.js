import React from 'react';
import styles from '../../styles/styles.module.css';

export default function LogoutButton(props) {
    return (
        <button className={`${styles.defaultText} ${styles.logBtn}`} onClick={props.logout}>Log Out</button>
    );
}