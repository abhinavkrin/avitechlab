import Link from 'next/link';
import React from 'react';
import Button from './Button';
import styles from '../styles/components/LinkButton.module.scss';
export default function LinkButton({children,href,label = "ok"}){
    return (
        <Link href={href}>
            <a>
                <Button className={styles.linkButton}>
                    <span style={{padding: "0 0.150rem"}}>{ typeof children === 'string' ? children : label }</span>
                    <svg width="0.9rem" height="0.9rem" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className={styles.openIcon}>
                            <path className={styles.vector1} d="M9.74995 4.32153H2V16.5H15.2856V10.4108" stroke="white" strokeWidth="2"/>
                            <path className={styles.vector2} d="M14.1785 3.21427L5.87497 11.5178L7.53567 13.1785L15.8392 4.87497L17.4999 6.53568V1H11.9642L14.1785 3.21427Z" fill="white" stroke="white"/>
                        </g>
                    </svg>
                </Button>
            </a>
        </Link>
    )
}