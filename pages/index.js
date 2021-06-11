import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutSection from '../components/home/AboutSection'
import BlogSection from '../components/home/BlogSection'
import IntroSection from '../components/home/IntroSection'
import ProjectSection from '../components/home/ProjectSection.js'
import SkillSection from '../components/home/SkillSection'
import { getAllBlogs } from '../lib/blogs'
import { getAllProjects } from '../lib/projects'
import styles from '../styles/pages/Home.module.scss'
export default function Home({projects,blogs}) {
  return (
    <>
      <Head>
        <title>Abhinav Kumar - Frontend and Backend Web Developer</title>
        <meta name="description" content="I am a full stack developer. I code ideas into simple robust web applications." />
      </Head>
      <Header isHome={true}/>
      <IntroSection/>
      <AboutSection/>
      <div style={{
          background: "var(--bs-white-grey-darker)",
          width: "100%", 
          margin: "0px", 
          padding: "5px 0px", 
          boxShadow: "inset 0 0px 5px rgba(0,0,0,0.2) "
        }}>
        <SkillSection/>
        <hr className={styles.divider}/>
        <ProjectSection projects={projects}/>
      </div>
      <BlogSection blogs={blogs}/>
      <Footer/>
    </>
  )
}


export async function getStaticProps(context){
  let projects = [], blogs= [];
  try {
    projects = (await getAllProjects());
  }
  catch(e){
    console.error(e);
  }
  try {
    blogs = (await getAllBlogs());
  }
  catch(e){
    console.error(e);
  }

  return {
    props: {
      projects,
      blogs
    }
  }
}