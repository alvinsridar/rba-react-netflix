import React from 'react';
import styles from '../../styles/styles.module.css';

export default function LoginButton(props) {
    return (
        <button className={`${styles.defaultText} ${styles.logBtn}`} onClick={props.login}>Log In</button>
    );
}