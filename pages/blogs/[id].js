import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BlogLayout from '../../layouts/BlogLayout';
import { getAllBlogsId, getBlog, getNextBlogMeta } from '../../lib/blogs';
import styles from '../../styles/pages/BlogPost.module.scss';
export default function BlogPost({blog,dateString,readTime,nextBlog}){
    const {id,date,excerpt,html,thumbnail,title,slug,link} = blog;
    return (
        <BlogLayout>
            <article className={"container "+styles.article}>
                <h1 className={styles.blogTitle}>{title}</h1>
                <div className={styles.blogMeta}>
                    <span>{dateString} </span>
                    <span>{readTime}</span>
                </div>
                <div className={styles.blogMeta2}>
                    <div className={styles.shareIcons}>
                        <Image src="/images/facebook_color.svg" height="32" width="32"/>
                        <Image src="/images/twitter_color.svg" height="32" width="32"/>
                        <Image src="/images/linkedin_color.svg" height="32" width="32"/>
                    </div>
                    <div>
                        {
                            nextBlog && (
                                <Link href={nextBlog.link}>
                                    <a>
                                        NEXT BLOG
                                    </a>
                                </Link>
                            )
                        }
                    </div>
                </div>
                <Image src={thumbnail} width="760" height="428"/>
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
    const dateString = new Date(blog.date).toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute: 'numeric'});
    const readTimeMin = parseInt((blog.html.split(/\s{1,}/).length / 180).toFixed(0),10);
    const readTime = readTimeMin + " minute"+(readTimeMin > 1 ? 's':'');
    const nextBlog = await getNextBlogMeta(blog);
    return {
        props: {
            blog,
            dateString,
            readTime,
            nextBlog
        }
    }
}