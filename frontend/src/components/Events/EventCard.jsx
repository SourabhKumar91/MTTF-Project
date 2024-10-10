import React from 'react';

const EventCard = ({ image, title, date, location }) => {
  return (
    <div className="max-w-sm mx-auto my-6 border">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img
          className="h-52 rounded w-full object-cover mb-4"
          src={image}
          alt={title}
        />
        <h3 className="text-xl text-gray-900 font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">
          <i className="fa-solid fa-calendar-days text-green-400 mr-2"></i>
          {date}
        </p>
        {location && (
          <p className="text-gray-600 text-sm mb-4">
            <i className="fa-solid fa-location-dot text-blue-400 mr-2"></i>
            {location}
          </p>
        )}
        <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default EventCard;
