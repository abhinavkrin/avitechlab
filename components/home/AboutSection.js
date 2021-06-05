import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/home/AboutSection.module.scss'
import styles2 from '../../styles/components/home/Section.module.scss'
function AboutSection(){
    return (
        <section className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <span className={styles2.sectionTitle}>About Me</span>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center flex-md-row flex-column">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className={styles.circleOut}>
                            <div className={styles.circleIn}>
                                <Image src="/images/abhinav.jpg" width="180" height="180" className={styles.myPicture}/>
                                <div className={styles.overlay}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.aboutMeTextBlock}>
                        <p className={styles.aboutMeText}>Started coding since I was 14, Now I am a full stack web developer, blogger and a full-time tech enthusiast. I spend my whole day playing with javascripts, react, html and css; experimenting with tech; and gulping a great variety of useful+useless information in the planet internet.</p>
                        <p className={styles.aboutMeText}>I make web applications that charm and solve problems.</p>
                        <p className={styles.aboutMeText}>I’m always curious, and enjoy working in projects that challenge me to continuosly learn and evolve. </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-items-end">
                    <img src="/images/hero.svg" className={styles.heroImage}/>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;