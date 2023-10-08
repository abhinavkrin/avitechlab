import React from 'react';
import styles from '../../styles/components/home/SkillSection.module.scss';
import styles2 from '../../styles/components/home/Section.module.scss'
import Image from 'next/image';

export default function SkillSection(){
    return (
		<section className={"container-fluid " + styles.skillSection}>
			<div className="row">
				<div className="col-12 d-flex justify-content-center">
					<span className={styles2.sectionTitle}>My Skills</span>
				</div>
			</div>
			<div className={"row m-1 " + styles.fixDividerContainer}>
				<div className={"col-12 fix-divider p-2"}>
					<div className={"container " + styles.skills}>
						<div className="row">
							<div
								xs={12}
								lg={4}
								className={
									"col-12 col-lg-4 " + styles.skillCol1
								}
							>
								<div className={styles.skillIcon}>
									<Image
										height="55"
										width="55"
										src="/images/phone-link.svg"
										alt="frontend dev"
									/>
								</div>
								<div className={styles.skillH1}>
									<span>Front-end Developer</span>
								</div>
								<div className={styles.skillText}>
									<p>
										I enjoy crafting ideas into reality in
										the browser from scratch.
									</p>
								</div>
								<div className={styles.skillH2}>
									<span>Languages I speak:</span>
								</div>
								<div className={styles.skillText}>
									<p>
										Javascript, Typescript, CSS, HTML, SASS
									</p>
								</div>
								<div className={styles.skillH2}>
									<span>Tools & frameworks:</span>
								</div>
								<div className={styles.skillList}>
									<ul>
										<li>ReactJS</li>
										<li>React Native</li>
										<li>NextJS</li>
										<li>Redux</li>
										<li>Webpack, Rollup</li>
										<li>PWA</li>
										<li>Web Performance</li>
										<li>SEO</li>
									</ul>
								</div>
							</div>

							<div
								xs={12}
								lg={4}
								className={
									"col-12 col-lg-4 " + styles.skillCol2
								}
							>
								<div className={styles.skillIcon}>
									<Image
										height="55"
										width="55"
										src="/images/code.svg"
										alt="frontend dev"
									/>
								</div>
								<div className={styles.skillH1}>
									<span>Back-end Developer</span>
								</div>
								<div className={styles.skillText}>
									<p>
										I like making back-end solutions that
										are secure, fast & robust.
									</p>
								</div>
								<div className={styles.skillH2}>
									<span>Languages I speak:</span>
								</div>
								<div className={styles.skillText}>
									<p>NodeJS, Java & Python</p>
								</div>
								<div className={styles.skillH2}>
									<span>Tools & frameworks:</span>
								</div>
								<div className={styles.skillList}>
									<ul>
										<li>ExpressJS</li>
										<li>MongoDB, Firestore</li>
										<li>MySQL, PostgreSQL</li>
										<li>Firebase</li>
										<li>REST API</li>
										<li>Microservices Architecture</li>
										<li>Serverless Architectures</li>
										<li>Caching Mechanisms - Redis</li>
										<li>Authentication - JWT, OAUTH2.0</li>
										<li>Linux, Bash Scripting</li>
									</ul>
								</div>
							</div>

							<div
								xs={12}
								lg={4}
								className={
									"col-12 col-lg-4 " + styles.skillCol3
								}
							>
								<div className={styles.skillIcon}>
									<Image
										height="55"
										width="55"
										src="/images/self_improvement.svg"
										alt="frontend dev"
									/>
								</div>
								<div className={styles.skillH1}>
									<span>Miscellaneous Skills</span>
								</div>
								<div className={styles.skillText}>
									<p>
										Having developed a wide variety of
										producs, I have a good understanding of
										the entire development process.
									</p>
								</div>
								<div className={styles.skillH2}>
									<span>Devops</span>
								</div>
								<div className={styles.skillList}>
									<ul>
										<li>CI/CD - Github Actions</li>
										<li>Load Balancers</li>
										<li>Virtual Machines</li>
										<li>Docker</li>
										<li>
											Cloud Functions - GCP, AWS Lamba
										</li>
										<li>Google Cloud & AWS</li>
										<li>Heroku, Vercel, Netlify</li>
										<li>DNS</li>
										<li>
											Reverse proxy, forward proxy,
											Firewall
										</li>
									</ul>
								</div>
								<div className={styles.skillH2}>
									<span>Other Important Skills</span>
								</div>
								<div className={styles.skillList}>
									<ul>
										<li>Git</li>
										<li>Web Application Security</li>
										<li>Debugging Skills</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
