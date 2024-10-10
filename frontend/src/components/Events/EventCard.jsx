import React from 'react';

const EventCard = ({ image, title, description, date, location, buttonLabel }) => {
  return (
    <div className="relative max-w-sm mx-auto my-6 flex flex-col rounded-lg bg-white shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Event Details */}
      <div className="p-6">
        {/* Event Title */}
        <h5 className="mb-3 text-2xl font-bold text-gray-900">{title}</h5>

        {/* Event Description */}
        <p className="mb-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Event Date and Location */}
        <div className="flex justify-between text-gray-500 text-sm mb-4">
          <div className="flex items-center">
            <i className="far fa-calendar-alt mr-2"></i>
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{location}</span>
          </div>
        </div>

        {/* Register Button */}
        <button
          type="button"
          className="w-full py-3 px-6 bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all hover:bg-blue-700"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
