import React from 'react';
import styles from '../../styles/components/home/ProjectSection.module.scss'
import styles2 from '../../styles/components/home/Section.module.scss'
import {ProjectsList} from '../../lib/projects';
import ProjectCard from './ProjectCard';
export default function ProjectSection(){
    return (
        <section className={"container "+styles.projectSection}>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <span className={styles2.sectionTitle}>My Works</span>
                </div>
            </div>
            <div className="row m-1">
                {ProjectsList.map((P,i)=>(
                    <div className="col-12 col-lg-4 p-2" key={P.name+i}>
                        <ProjectCard icon={P.icon} name={P.name} desc={P.desc} link={P.link}/>
                    </div>
                ))}
            </div>
        </section>
    )
}