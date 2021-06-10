import React from 'react';
import Head from 'next/head';
export default function Admin(){
    return (
        <div>
            <Head>
                <title>Content Manager</title>
                <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" key="cms-file"/>
            </Head>
            <div dangerouslySetInnerHTML={{__html: `
                <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>`}}>
            </div>
        </div>
    )
}