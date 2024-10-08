import React from 'react';
import { cordinators } from '../../assets/cordinators/cordinators.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cordinator = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1125,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <div 
          className="w-full overflow-hidden py-12 px-4 bg-[#ffff]" 
          
        >
            <h1 className='text-center md:text-4xl m-3 pb-6 font-medium border-b mx-auto max-w-[90%] text-2xl text-[#2C3E50]'>
            Executive Officers / Coordinators
            </h1>
            <Slider {...settings}>
                {cordinators.map((card, index) => (
                    <div key={index} className="md:p-4">
                        <div 
                          className="max-w-sm mx-auto md:mx-4 inline-block my-4 hover:shadow-lg rounded-lg border border-[#3498DB] shadow-md" // Changed border color to blue
                          style={{ 
                            background: "#FFFFFF",  // Clean white background for the cards
                          }}
                        >
                            <div className="flex mt-4 ml-7">
                                <img 
                                  className="rounded-full border-2 border-gray-200 h-24 w-24" 
                                  src={card.imageUrl} 
                                  alt={card.name} 
                                  
                                />
                                <div className='ml-10 mt-5'>
                                    <h5 className="text-[#2C3E50] text-xl font-medium mb-2">{card.name}</h5>
                                    <p className="text-gray-500 text-sm">{card.role}</p>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col">
                                <p className="text-gray-600 text-base mb-4">{card.feedback}</p>
                                <div className="flex">
                                    <a href="#" className="bg-[#3498DB] hover:bg-[#2980B9] text-white rounded-full px-4 py-2">
                                        View Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>   
        </div>
    );
};

export default Cordinator;
