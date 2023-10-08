import Image from 'next/image';
import React from 'react';
import styles from '../../styles/components/home/AboutSection.module.scss'
import styles2 from '../../styles/components/home/Section.module.scss'
function AboutSection(){
    return (
		<section className="container" id="about">
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
								<Image
									src="/images/abhinav.jpg"
									width="180"
									height="180"
									className={styles.myPicture}
								/>
								<div className={styles.overlay}></div>
							</div>
						</div>
					</div>
					<div className={styles.aboutMeTextBlock}>
						<p className={styles.aboutMeText}>
							Starting my coding journey at 14, I've grown to
							become a full-stack developer, contributing
							significantly to platforms like Rocket.Chat,
							especially in enhancing its embedding capabilities.
							With a foundation rooted in JavaScript, React, and
							CSS, I've taken projects like Tournify.in from
							concept to realizing over 150,000 users and top
							rankings on Google. Not just a developer, I'm also a
							dedicated blogger, sharing insights from the tech
							world. Having collaborated with esteemed
							organizations, led technical initiatives at Google
							Developer Students Club, HITK, and achieved
							significant milestones with platforms like
							eSportsWeb.in, I take pride in crafting solutions
							that resonate with users. I'm driven by challenges,
							always eager to learn and innovate.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 d-flex justify-content-center align-items-end">
					<img
						width="300"
						height="132"
						src="/images/hero.svg"
						className={styles.heroImage}
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;