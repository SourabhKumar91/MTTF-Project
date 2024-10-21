import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../AllPages/Home';
import About from '../AllPages/About';
import GoverningBody from '../AllPages/GoverningBody';

function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/about/governingbody' element={<GoverningBody/> } />
            </Routes>
        </>
    )
}

export default Layout