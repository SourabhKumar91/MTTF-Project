import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../AllPages/Home';
import About from '../AllPages/About/About';
import GoverningBody from '../AllPages/About/GoverningBody';
import AdvisoryCommittee from '../AllPages/About/AdvisoryCommittee';
import IndividualMembership from '../AllPages/Membership/IndividualMembership';
import InstitutionalMembership from '../AllPages/Membership/InstitutionalMembership';
import AboutChepter from '../AllPages/Chepters/AboutChepter';
import StudentChepter from '../AllPages/Chepters/StudentChepter';
import DataAnalyticsConsultancy from '../AllPages/DataAnalytics/DataAnalytics';

function Layout() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About/>} />
                <Route path='/about/governingbody' element={ <GoverningBody/>} />
                <Route path='/about/advisorycommittee' element={ <AdvisoryCommittee/>} />
                <Route path='/membership/individual' element={ <IndividualMembership/>} />
                <Route path='/membership/institutional' element={ <InstitutionalMembership/>} />
                <Route path='/chapters/about' element={<AboutChepter/>} />
                <Route path='/chapters/students' element={<StudentChepter/>} />
                <Route path='/services/dataAnalytics' element={<DataAnalyticsConsultancy />} />
            </Routes>
        </>
    )
}

export default Layout