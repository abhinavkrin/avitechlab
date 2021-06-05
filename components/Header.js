import Image from 'next/image';
import React from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';
function Header({isHome}){
    const navRef = useRef();
    const toggle = () => {
        if(navRef.current){
            navRef.current.classList.toggle(styles.show);
        }
    }
    return (
        <header className={"fixed-top "+styles.header+" "+styles.transparent}>
            <nav ref={navRef}>
                <div className={styles.brand}>
                    <Image src="/images/icon.svg" width="48" height="48"></Image>
                </div>
                <div className={styles.toggleButton}>
                    <div className={styles.menuIcon} onClick={toggle}>
                        <div className={styles.bar1}/>
                        <div className={styles.bar2}/>
                        <div className={styles.bar3}/>
                    </div>
                </div>
                <div className={styles.navMenu}>
                    <ul className={styles.menuList}>
                        <li className={styles.menuItem}>
                            <Link href="#">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="#">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="#">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="#">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;