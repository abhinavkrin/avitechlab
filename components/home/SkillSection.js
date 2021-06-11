import React from 'react';
import styles from '../../styles/components/home/SkillSection.module.scss';
import styles2 from '../../styles/components/home/Section.module.scss'
export default function SkillSection(){
    return (
        <section className={"container-fluid "+styles.skillSection}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <span className={styles2.sectionTitle}>About Me</span>
                </div>
            </div>
            <div className={"row m-1 "+styles.fixDividerContainer}>
                <div className={"col-12 fix-divider p-2"}>
                    <div className={"container "+styles.skills}>
                        <div className="row">
                            <div xs={12} lg={4} className={"col-12 col-lg-4 "+styles.skillCol1}>
                                <div className="skill-icon">
                                    <img src="/images/phone-link.svg" alt="frontend dev"/>
                                </div>
                                <div className={styles.skillH1}>
                                    <span>Front-end Developer</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>I enjoy crafting ideas into reality in the browser from scratch.</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Languages I speak:</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>Javascript, css, html, sass & less</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Tools & frameworks:</span>
                                </div>
                                <div className={styles.skillList}>
                                    <ul>
                                        <li>ReactJS</li>
                                        <li>Bootstrap</li>
                                        <li>Material UI</li>
                                        <li>Redux</li>
                                        <li>Webpack</li>
                                        <li>VS Code</li>
                                    </ul>
                                </div>
                            </div>

                            <div xs={12} lg={4} className={"col-12 col-lg-4 "+styles.skillCol2}>
                                <div className="skill-icon">
                                    <img src="/images/code.svg" alt="frontend dev"/>
                                </div>
                                <div className={styles.skillH1}>
                                    <span>Back-end Developer</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>I like making back-end solutions that are secure, fast & robust.</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Languages I speak:</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>Javascript (ES6) & Java</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Tools & frameworks:</span>
                                </div>
                                <div className={styles.skillList}>
                                    <ul>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                        <li>MongoDB</li>
                                        <li>Firebase</li>
                                        <li>Cloud Functions</li>
                                        <li>Google Cloud & AWS</li>
                                    </ul>
                                </div>
                            </div>

                            <div xs={12} lg={4} className={"col-12 col-lg-4 "+styles.skillCol3}>
                                <div className="skill-icon">
                                    <img src="/images/self_improvement.svg" alt="frontend dev"/>
                                </div>
                                <div className={styles.skillH1}>
                                    <span>Blogger & Competitive Programmer</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>I enjoy blogging and solving problems</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Blogging</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>I believe in sharing whatever I have learnt with my fellow mates. Blogging is an excellent wat to practice it.</p>
                                </div>
                                <div className={styles.skillH2}>
                                    <span>Competitive Programming</span>
                                </div>
                                <div className={styles.skillText}>
                                    <p>
                                    Solving problems keep my adrenaline rush going. I do competitve programming to progressively increase my problem solving skills. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}