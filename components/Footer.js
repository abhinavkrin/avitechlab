import Image from 'next/image';
import React from 'react';
import styles from '../styles/components/Footer.module.scss';
function Footer({}){
    return (
        <footer className={styles.footer}>
            <div className="container">
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
                        <Image src="/images/twitter.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        <Image src="/images/linkedin.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        <Image src="/images/github.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                        <Image src="/images/blogging.svg" height="48" width="48" className={styles.footerSocialIcon}/>
                    </div>
                    <div className="col-12 d-flex justify-content-center mb-4">
                        <span className={styles.footerTaglineText}>
                            Handcrafted my be.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;