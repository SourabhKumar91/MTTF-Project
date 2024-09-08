import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Cordinator from './components/Cordinator/Cordinator'
import Services from './components/services/Services'
import Partners from './components/partners/partners'

function App() {

  return (
   <>
   <Navbar/>
   <Services/>
   <Cordinator />
   <Partners />
   <Footer/>
   </>
  )
}

export default App
