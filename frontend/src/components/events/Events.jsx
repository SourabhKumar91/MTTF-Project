import React from 'react';
import eventImg from "../../assets/Events/mathEvent.jpg";
import BlinkingButton from '../BkinkingButton/BlinkingBtn';

function Events() {
  return (
    <>
    
      <section className="text-gray-700 body-font bg-gradient-to-b from-[#f5f4be] to-[#fff8d1] border-t-2 overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-4xl font-extrabold text-center text-[#ecab32] mb-10 uppercase tracking-wider">Discover All The Upcoming Events & Opportunities </h1>
          <div className="lg:w-4/5 mx-auto flex flex-wrap border-4 p-4 rounded-xl shadow-lg bg-white">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              src={eventImg}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="title-font mb-4 lg:text-3xl md:text-2xl text-xl font-bold text-center text-[#ecab32] tracking-wider uppercase">Virtual Event Provided By MTTF</h2>
              
              <div className="flex justify-center">
                <BlinkingButton/>
              </div>

              <p className="leading-relaxed lg:text-2xl md:text-xl text-lg mt-6 font-semibold text-gray-800 text-center">One Day Workshop on Mathematics-Based Practical Using Free and Open Source Software</p>
              
              <p className="text-gray-900 text-xl font-medium mt-4 text-center">
                <i className="pr-4 text-green-700 fa-regular fa-calendar-days"></i>
                <span>September 15, 2024</span> <span className="block">7:00 pm - 9:00 pm</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;
