import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/components/Footer.module.scss';
function Footer({}){
    return (
        <>
        <div className={styles.heightFix}></div>
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.contactDialog}>
                    <div className="row p-5">
                        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                            <span className={styles.startProject}>Start a project</span>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                            <p className="start-project-text">Interested in working together? Have an Idea in mind? Let us chat.</p>
                        </div>
                        <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center">
                            <a href={"mailto:work.abhinavkr@gmail.com"}>
                                <button className={styles["startProjectButton"]}>Contact Me</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mb-3 mt-4">
                        <Image src="/images/icon-light.svg" height="64" width="64"/>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                        <span className={styles.footerTaglineText}>
                            Living, learning, & leveling up one day at a time.
                        </span>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-3">
                        <a href="https://twitter.com/abhinavkr_in">
                            <Image src="/images/twitter.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        </a>
                        <a href="https://www.linkedin.com/in/abhinavkrin/">
                            <Image src="/images/linkedin.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        </a>
                        <a href="https://github.com/abhinavkrin">
                            <Image src="/images/github.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        </a>
                        <Link href="/blogs">
                            <a>
                                <Image src="/images/blogging.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                            </a>
                        </Link>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-4">
                        <span className={styles.footerTaglineText}>
                            Handcrafted by me.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer;