import React from 'react';
import { cordinators } from '../../assets/cordinators/cordinators.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cordinator = () => {
    
    const settings = {
        dots: true,  // Enable dots/pagination
        infinite: true,  // Loop through slides
        speed: 500,
        slidesToShow: 3,  // Number of slides to show at once
        slidesToScroll: 1,  // Number of slides to scroll at once
        autoplay: true,  // Enable autoplay
        autoplaySpeed: 2000,  // Autoplay speed in ms
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
        <div className=" md:mx-auto py-12 md:px-4 w-screen overflow-x-hidden">
            <Slider {...settings}>
                {cordinators.map((card, index) => (
                    <div key={index} className="md:p-4">
                        <div className="max-w-sm md:mx-4 inline-block my-4 bg-white rounded-lg border border-gray-200 shadow-md">
                            <div className="flex mt-4 ml-7">
                                <img className="rounded-full border-2 border-gray-300 h-24 w-24" src={card.imageUrl} alt={card.name} />
                                <div className='ml-10 mt-5'>
                                    <h5 className="text-gray-900 text-xl font-medium mb-2">{card.name}</h5>
                                    <p className="text-gray-500 text-sm">{card.role}</p>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col">
                                <p className="text-gray-600 text-base mb-4">{card.feedback}</p>
                                <div className="flex">
                                    <a href="#" className="bg-indigo-400 text-white rounded-full px-4 py-2">
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
