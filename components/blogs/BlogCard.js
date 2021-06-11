import React from 'react';
import styles from '../../styles/components/blogs/BlogCard.module.scss';
import Image from 'next/image';
import LinkButton from '../LinkButton';

export default function BlogsCard({blog}) {
    const {id,date,excerpt,html,thumbnail,title,slug} = blog;

    return (
        <div className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
                <Image src={thumbnail} height="288" width="512" layout=""/>
            </div>
            <div className={styles.blogTitle}>
                {title}
            </div>
            <div className={styles.blogDate}>
                {new Date(date).toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute: 'numeric'})}
            </div>
            <div className={styles.blogOpenLink}>
                <LinkButton href={'/blogs/'+slug} label="Open Link"/>
            </div>
        </div>
    )
}