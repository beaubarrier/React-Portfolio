import React, { useState } from 'react';
import Navbar from '../components/Navbar.js'
import Portfolio from '../components/Portfolio';
import MyStory from '../components/MyStory';
import Default from '../components/Default';
import Footer from './Footer'
import Gallery from './Gallery'

export default function Main() {
    const [currentPage, setPage] = useState('default')

    const renderPage = () => {
        if (currentPage === 'portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'myStory') {
            return <MyStory />;
        }
        if (currentPage === 'default') {
            return <Default />;
        }
    }
    const handlePageChange = (page) => setPage(page);

    return (
        <div >
            <Navbar currentPage={ currentPage } handlePageChange={ handlePageChange } />

            { renderPage() }

            <Footer />
        </div>



    );

}

