import React from 'react';
import styles from '../../styles/components/blogs/BlogCard.module.scss';
import Image from 'next/image';
import LinkButton from '../LinkButton';
import Link from 'next/link';

export default function BlogCard({blog}) {
    const {id,date,excerpt,html,thumbnail,title,slug,link} = blog;
    return (
        <div className={styles.blogCard}>
            <div className={styles.blogImageWrapper}>
                <Link href={link}>

                    <Image src={thumbnail} height="288" width="512" layout=""/>

                </Link>
            </div>
            <div className={styles.blogTitle}>
                <Link href={link} legacyBehavior>
                    {title}
                </Link>
            </div>
            <div className={styles.blogDate}>
                {new Date(date).toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric',minute: 'numeric'})}
            </div>
            <div className={styles.blogOpenLink}>
                <LinkButton href={link} label="Open Link"/>
            </div>
        </div>
    );
}