import About from './AllPages/About/About';
import AdvisoryCommittee from './AllPages/About/AdvisoryCommittee';
import GoverningBody from './AllPages/About/GoverningBody';
import AboutChepter from './AllPages/Chepters/AboutChepter';
import StudentChepter from './AllPages/Chepters/StudentChepter';
import Home from './AllPages/Home/Home';
import IndividualMembership from './AllPages/Membership/IndividualMembership';
import InstitutionalMembership from './AllPages/Membership/InstitutionalMembership';
import DataAnalyticsConsultancy from "../src/AllPages/DataAnalytics/DataAnalytics"
import './App.css'
import Layout from './Layout/Layout'
import { Routes, Route } from 'react-router-dom';
import Award2025 from './AllPages/Awards/Award2025';
import Award2024 from './AllPages/Awards/Award2024';


function App() {

  return (
    <>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/governingbody' element={<GoverningBody />} />
          <Route path='/membership/individual' element={<IndividualMembership />} />
          <Route path='/membership/institutional' element={<InstitutionalMembership />} />
          <Route path='/chapters/about' element={<AboutChepter />} />
          <Route path='/chapters/students' element={<StudentChepter />} />
          <Route path='/Services/dataanalytics' element={<DataAnalyticsConsultancy/>} />
          <Route path='/awards/2025' element={<Award2025/>} />
          <Route path='/awards/2024' element={<Award2024/>} />
        </Route>
      </Routes>

    </>
  )
}

export default App
