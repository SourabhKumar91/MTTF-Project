import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Cordinator from './components/Cordinator/Cordinator'
import Services from './components/services/Services'
import Partners from './components/partners/Partners'
import Events from './components/events/Events'
import  ServicesCard  from './components/ServiceCard/ServiceCard'
import ServiceSection from './components/ServiceSection/ServiceSection'


function App() {

  return (
   <>

   
   <Navbanr/>
   <div>
   <ServiceSection/>
   {/* <Services/> */}
   {/* <Cordinator /> */}
   {/* <Partners /> */}
   {/* <Events /> */}
   </div>
   {/* <Footer/> */}
   </>
  )
}

export default App
