import './App.css'
import Card from './components/card/Card'
import Navbar from './components/Navbar/Navbar'
import jaswinderimg from "./assets/jaswinderpal.jpeg"
import UserCard from './components/card/Card'

function App() {

  return (
   <>
   <Navbar/>
   <div>
      <UserCard
        name="Jaswinderpal Sigh"
        role="Professor"
        feedback="I am impressed with the quality of the content and the resources provided by this platform. The lectures are impressive. The instructors are always available to answer my queries. Their guidance helped me to achieve my goals."
        rating={5}
        imageUrl={jaswinderimg}
         // Replace with the actual path to the profile image
      />
    </div>
   </>
  )
}

export default App
