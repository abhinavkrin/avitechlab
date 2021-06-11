import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from  '../styles/layouts/PageLayout.module.scss';
function PageLayout({children,title}){
    return (
        <div className="w-100">
            <Header/>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>{title}</h1>
            </div>
            {children}
            <Footer/>
        </div>
    )   
}

export default PageLayout;