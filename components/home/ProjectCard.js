import LinkButton from "../LinkButton";
import styles from "./../../styles/components/home/ProjectCard.module.scss";
export default function ProjectCard({icon,name,desc,link}){
    return (
            <div className={styles.projectCard}>
                <div className={styles.projectIconWrapper}>
                    <img src={icon} alt="name" className={styles.projectIcon}/>
                </div>

                <div className={styles.projectName}>
                    <span>{name}</span>
                </div>
                <div className={styles.projectDesc}>
                    {desc}
                </div>
                {
                    link ?
                    <div className={styles.projectLink}>
                        <LinkButton href={link} label="open link"/>
                    </div>
                    :
                    <div className={styles.projectDev}>
                        <span className="d-flex align-items-center justify-content-center">
                            <img src="/images/construction.svg" alt={"In development"} className={styles.projectMeta}/>
                            <span>In development</span>
                        </span>
                    </div>
                }
            </div>
    )
}