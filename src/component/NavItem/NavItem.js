import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../../styles/styles.module.css';

export default function NavItem(props) {
    return (
        <NavLink className={`${styles.defaultText}`} to={props.path}>
            {props.text}
        </NavLink>
    );
}