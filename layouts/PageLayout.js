import React from 'react';
import Footer from '../Components/Footer';
import Header from '../components/Header';

function PageLayout({children}){
    return (
        <div className="w-100">
            <Header/>
            {children}
            <Footer/>
        </div>
    )   
}

export default PageLayout;