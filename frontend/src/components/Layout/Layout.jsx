import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../AllPages/Home';
import About from '../AboutPage/About';

function Layout() {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </>
    )
}

export default Layout