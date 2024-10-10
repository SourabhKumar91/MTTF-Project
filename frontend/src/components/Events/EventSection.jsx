import React from 'react';
import EventCard from './EventCard';
import aiimg from "../../assets/Events/AI.jpg";
import ai2 from "../../assets/Events/ai2.jpg";

function EventSection() {
  return (
    <div className='min-h-[400px] p-6 lg:p-10 max-w-7xl mx-auto overflow-hidden'>
      <h1 className='text-2xl lg:text-4xl font-serif mb-8'>Upcoming Events...</h1>
      {/* Flex container for event cards */}
      <div className='flex flex-wrap justify-start gap-10'>
        <EventCard
          image={aiimg} // Replace with your image URL
          title="ONE-WEEK WORKSHOP ON NEXT-GEN AI AND ML"
          date="October 21, 2024 7:00pm - October 27,2024 9:00pm"
          shotdate="October 21,2024"
        />
        <EventCard
          image={ai2} // Replace with your image URL
          title="IERG Awards 2025"
          location="Sharda University, plot no 32, 34, Knowledge Park III, Greater Noida, India"
          date="28 February 2024"
          shotdate="28 February 2024"
        />
      </div>
    </div>
  );
}

export default EventSection;
