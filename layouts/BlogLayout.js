import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function BlogLayout({children}){
    return (
        <div className="w-100">
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}