import React from 'react';
import styles from "../button/Button.module.css"

export const PlusButton = ({ type , onClick , disabled }) =>(

    <button
        className={styles["default-button"]}
        type={type}
        onClick={onClick}
        disabled={disabled}>
        +
    </button>
);
