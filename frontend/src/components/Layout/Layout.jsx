import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../AllPages/Home';
import About from '../AllPages/About/About';
import GoverningBody from '../AllPages/About/GoverningBody';
import AdvisoryCommittee from '../AllPages/About/AdvisoryCommittee';
import IndividualMembership from '../AllPages/Membership/IndividualMembership';

function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/about/governingbody' element={ <GoverningBody/>} />
                <Route path='/about/advisorycommittee' element={ <AdvisoryCommittee/>} />
                <Route path='/membership/individual' element={ <IndividualMembership/>} />
                
            </Routes>
        </>
    )
}

export default Layout