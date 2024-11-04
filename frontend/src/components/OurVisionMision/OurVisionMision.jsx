import React from 'react';

function OurVisionMission({ image, heading1, description1, heading2, description2 }) {
  return (
    <>
      {/* Vision/Mission Section */}
      <div id='vision' className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={image} // Pass the image dynamically
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-10">
          {/* First Heading and Description */}
          {heading1 && (
            <>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">{heading1}</h1>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl">{description1}</p>
            </>
          )}

          {/* Conditionally Render Second Heading and Description */}
          {heading2 && (
            <>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">{heading2}</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl">{description2}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default OurVisionMission;
