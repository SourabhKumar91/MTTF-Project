
import React from 'react';

const GoverningBodyCard = ({ member }) => {
    return (
        <div className="bg-gradient-to-r from-blue-400 to-indigo-600 p-6 rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-4">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 object-cover rounded-full border-4 border-white"
                />
            </div>
            <h2 className="text-lg text-white font-semibold title-font mb-2">{member.name}</h2>
            <p className="text-md text-gray-200 mb-1">{member.position}</p>
            <p className="text-md text-gray-300">{member.memberId}</p>
            <button className="w-full mt-3 px-6 py-2 bg-white text-blue-600 text-lg rounded-md hover:bg-gray-100 transition duration-200">
                View Profile
            </button>
        </div>
    );
};

export default GoverningBodyCard;
