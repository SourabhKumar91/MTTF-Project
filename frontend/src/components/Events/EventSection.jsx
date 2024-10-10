import React from 'react'
import EventCard from './EventCard'

function EventSection() {
  return (
    <div  className=' min-h-[400px] flex gap-10 flex-wrap p-4'>
         <EventCard
        image="https://th.bing.com/th/id/OIP.DnFXRYz9Sc9bVLihM9G8qwAAAA?rs=1&pid=ImgDetMain" // Replace with your image URL
        title="Tailwind Card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.https://www.bing.com/images/search?view=detailV2&ccid=DnFXRYz9&id=398B9058FCB24ED3BABE1227596385F27C7DED92&thid=OIP.DnFXRYz9Sc9bVLihM9G8qwAAAA&mediaurl=https%3a%2f%2fgamefi.my%2fwp-content%2fuploads%2f2023%2f02%2f13Xb43WwoeYwQIAKYsCQg6g.png&exph=318&expw=474&q=chatgpt&simid=608007738944075829&FORM=IRPRST&ck=1D3DE504CBB6E904B43F049F9E85B22A&selectedIndex=2&itb=0"
        buttonLabel="Learn More"
        backgroundColor="bg-gradient-to-r from-blue-500 to-blue-600"
      />
       <EventCard
        image="https://via.placeholder.com/300" // Replace with your image URL
        title="Tailwind Card"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula."
        buttonLabel="Learn More"
        backgroundColor="bg-gradient-to-r from-blue-500 to-blue-600"
      />
    </div>
  )
}

export default EventSection