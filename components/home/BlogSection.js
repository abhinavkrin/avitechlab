import React from 'react';
import styles from '../../styles/components/home/BlogSection.module.scss'
import styles2 from '../../styles/components/home/Section.module.scss'
import BlogCard from '../blogs/BlogCard';
export default function BlogSection({blogs}){
    return (
        <section className={"container "+styles.blogSection}>
            <div className={styles.blogSectionWrapper}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <span className={styles2.sectionTitle}>My Blogs</span>
                    </div>
                </div>
                <div className="row m-1">
                    {blogs.map((B,i)=>(
                        <div className="col-12 col-lg-4 p-2" key={B.id}>
                            <BlogCard blog={B}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}