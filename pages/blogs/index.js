import React from 'react';
import PageLayout from '../../layouts/PageLayout';
import styles from '../../styles/pages/Blogs.module.scss';
import { getAllBlogs } from '../../lib/blogs';
import BlogCard from '../../components/blogs/BlogCard';

export default function Blogs({blogs}){
    return (
        <PageLayout title="Blogs">
             <section className={"container "+styles.blogSection}>
                <div className="row mt-5 mb-5 ml-1 mr-1">
                    {blogs.map((B,i)=>(
                        <div className="col-12 col-lg-4 p-3 d-flex justify-content-center" key={B.id}>
                            <BlogCard blog={B}/>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>

    )
}

export async function getStaticProps(){
    let blogs= [];
    try {
        blogs = (await getAllBlogs());
    }
    catch(e){
        console.error(e);
    }
    return {
        props: {
            blogs
        }
    }
}