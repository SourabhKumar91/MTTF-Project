import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../AllPages/Home';
import About from '../AllPages/About/About';
import GoverningBody from '../AllPages/About/GoverningBody';
import AdvisoryCommittee from '../AllPages/About/AdvisoryCommittee';

function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/about/governingbody' element={ <GoverningBody/>} />
                <Route path='/about/advisorycommittee' element={ <AdvisoryCommittee/>} />
                
            </Routes>
        </>
    )
}

export default Layout