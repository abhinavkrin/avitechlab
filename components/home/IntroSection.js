import React from 'react';
import styles from '../../styles/components/home/IntroSection.module.scss';
export default function IntroSection(){
    return (
        <section className={styles.introSection}>
            <div className={styles.backgroundOverlay}>
                <div className={styles.introTextBlock}>
                    <div className={styles.introText1}>Hello, my name is</div>
                    <div className={styles.introText2}>Abhinav Kumar</div>
                    <p className={styles.introText3}>I am a full stack web developer based in India. I code ideas into simple robust web applications.</p>
                </div>
            </div>
        </section>
    )
}