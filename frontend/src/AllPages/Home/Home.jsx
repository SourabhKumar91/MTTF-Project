import React from 'react'
import ServiceSection from '../../components/ServiceSection/ServiceSection'
import ContactUs from '../../components/ContactUs/ContactUs'
import Cordinator from '../../components/Cordinator/Cordinator'
import OurVisionMission from '../../components/OurVisionMision/OurVisionMision'
import Partners from '../../components/Partners/Parteners'
import Body from '../../components/Body/Body'


function Home() {
  return (
    <>
    <Body/>
    <ServiceSection/>
    <OurVisionMission
     image="https://wallpaperaccess.com/full/4773993.jpg" 
     heading1="What is our Vision?"  
     description1=" MTTF aims to create a welcoming and supportive environment for STEM professionals, fostering research, innovation, communication, and collaborations that have the potential to be sustainable and globally shareable in the long term." 
     heading2="Our Mission" 
     description2=" We strive to create an environment where innovation and research thrive, producing leaders for tomorrow. By collaborating with organizations globally, transforming education through practical learning, and addressing worldwide challenges, we aim to nurture talent that can secure a better future. Our mission is to promote excellence in mathematics and computational thinking, recognize young researchers, and contribute to societal outreach through relevant workshops and events."
     
     />
    <Partners/>
    <Cordinator/>
    <ContactUs/>
    
    
    </>
  )
}

export default Home