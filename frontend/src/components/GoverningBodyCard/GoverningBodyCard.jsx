import React from 'react';

const GoverningBodyCard = ({ member }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105 flex flex-col items-center">
            <div className="mb-4">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 object-cover object-top rounded-full border-4 border-gray-200 shadow-md"
                />
            </div>
            <h2 className="text-lg text-gray-800 font-semibold title-font mb-2 text-center">{member.name}</h2>
            <p className="text-md text-gray-600 mb-1 text-center">{member.position}</p>
            <p className="text-md text-gray-500 text-center">{member.memberId}</p>
            <button className="w-[50%] mt-3 px-6 py-2 text-blue-700 text-lg rounded-md hover:bg-blue-400 
             hover:text-white     transition duration-200">
                View Profile...
            </button>
        </div>
    );
};

export default GoverningBodyCard;
