import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.scss';
import { getLinks } from '../lib/settings';
function Header({isHome}){
    const SCROLL_FLAG_POINT = 150;
    const navRef = useRef();
    const [isTransparent,setIsTransparent] = useState(false);
    const toggle = () => {
        if(navRef.current){
            navRef.current.classList.toggle(styles.show);
        }
    }
    useEffect(()=>{
        if(!isHome)
            return;
        const checkHeaderType = () => {
            if(!isHome)
                return;
            let flag;
            if(window.scrollY > SCROLL_FLAG_POINT && isTransparent){
                flag = false;
            }
            if(window.scrollY <= SCROLL_FLAG_POINT && !isTransparent){
                flag = true;
            }
            if(flag !== isTransparent){
                setIsTransparent(flag);
            }
        }
        checkHeaderType();
        window.addEventListener("scroll",checkHeaderType); 
        return (
            () => {
                window.removeEventListener("scroll",checkHeaderType);
            }
        )
    },[])
    return (
        <header className={"fixed-top "+styles.header+" "+(isTransparent?styles.transparent:"")}>
            <nav ref={navRef}>
                <div className={styles.brand}>
                    <Link href="/">
                        <a>
                            <Image src="/images/icon.svg" width="48" height="48"></Image>
                        </a>
                    </Link>
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
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/#about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link href="/blogs/">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <a href="mailto:abhinav@avitechlab.com">
                                Contact
                            </a>
                        </li>
                        <li className={styles.menuItem}>
                            <a href={getLinks().resume_link}>
                                My Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
