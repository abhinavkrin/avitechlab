import Image from 'next/image';
import React from 'react';
import BlogLayout from '../../layouts/BlogLayout';
import { getAllBlogsId, getBlog } from '../../lib/blogs';
import styles from '../../styles/pages/BlogPost.module.scss';
export default function BlogPost({blog}){
    const {id,date,excerpt,html,thumbnail,title,slug,link} = blog;
    return (
        <BlogLayout>
            <article className="container">
                <h1>{title}</h1>
                <Image src={thumbnail} width="600" height="338"/>
                <div dangerouslySetInnerHTML={{__html: html}} className={styles.blog}></div>
            </article>
        </BlogLayout>
    )
}

export async function getStaticPaths(){
    const ids = await getAllBlogsId();
    return {
        paths: ids.map(id => ({params: {id}})),
        fallback: false
    }
}

export async function getStaticProps({params}){
    const blog = await getBlog(params.id);
    return {
        props: {
            blog
        }
    }
}