import './App.css'
import Card from './components/card/Card'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
   <>
   <Navbar></Navbar>
   <div>
    <Card image={"image link"} name={"Name"} description={"description"} membershipId={"membership id"} profileLink={"link to profile"}/>
   </div>
   </>
  )
}

export default App
