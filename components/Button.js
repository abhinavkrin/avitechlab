import React from 'react';
import styles from '../styles/components/Button.module.scss';

export default function Button({children,onClick,id,className = ""}){
    return (
        <div role="button" className={styles.button+' '+className} onClick={onClick} id={id}>
            {children}
        </div>
    )
}