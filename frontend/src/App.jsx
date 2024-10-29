import About from './AllPages/About/About';
import AdvisoryCommittee from './AllPages/About/AdvisoryCommittee';
import GoverningBody from './AllPages/About/GoverningBody';
import AboutChepter from './AllPages/Chepters/AboutChepter';
import StudentChepter from './AllPages/Chepters/StudentChepter';
import Home from './AllPages/Home/Home';
import IndividualMembership from './AllPages/Membership/IndividualMembership';
import InstitutionalMembership from './AllPages/Membership/InstitutionalMembership';
import './App.css'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/governingbody' element={<GoverningBody />} />
          <Route path='/about/advisorycommittee' element={<AdvisoryCommittee />} />
          <Route path='/membership/individual' element={<IndividualMembership />} />
          <Route path='/membership/institutional' element={<InstitutionalMembership />} />
          <Route path='/chapters/about' element={<AboutChepter />} />
          <Route path='/chapters/students' element={<StudentChepter />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
