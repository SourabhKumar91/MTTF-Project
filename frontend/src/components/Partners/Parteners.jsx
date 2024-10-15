import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adiyitaCollege from "../../assets/partners/aditya-college.jpg";
import bfgiLogo from "../../assets/partners/BFGI-logo.jpg";
import ctUniversity from "../../assets/partners/ct-university.png";
import dasmeshGirlsCollege from "../../assets/partners/dasmesh-girls-college.jpg";
import mtuLogo from "../../assets/partners/mtu-logo.png";
import NUm from "../../assets/partners/NU.jpeg";
import sru from "../../assets/partners/sru.png";
import poornima from "../../assets/partners/poornima.png";

function Partners() {
    const [visible, setVisible] = useState({
        box1: true,
        box2: false,
        box3: false,
        box4: false,
    });

    const handleVisibility = (box) => {
        setVisible({
            box1: box === 'box1',
            box2: box === 'box2',
            box3: box === 'box3',
            box4: box === 'box4',
        });
    };

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

    const partnerImages = [adiyitaCollege, ctUniversity, dasmeshGirlsCollege, mtuLogo, NUm, sru,bfgiLogo,poornima];

    return (
        <>
            <div className='bg-gradient-to-r from-blue-50 via-white to-indigo-100 w-full '>

                <div className=' mt-20'>
                    <h1 className="font-serif text-2xl lg:text-4xl mb-12 text-gray-700 text-center  pt-8">Our Trusted Partners</h1>
                </div>
                <div className="w-full flex flex-wrap min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                    {/* Sidebar */}
                    <div className="w-full lg:w-[30%] p-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#03518F] flex flex-col justify-center">
                        <button
                            className={`text-lg my-3 cursor-pointer transition-colors duration-300 hover:text-blue-500 ${visible.box1 ? "text-blue-500 font-bold" : "text-gray-700"}`}
                            onClick={() => handleVisibility('box1')}
                        >
                            All Partners
                        </button>
                        <button
                            className={`text-lg my-3 cursor-pointer transition-colors duration-300 hover:text-blue-500 ${visible.box2 ? "text-blue-500 font-bold" : "text-gray-700"}`}
                            onClick={() => handleVisibility('box2')}
                        >
                            Business Partners
                        </button>
                        <button
                            className={`text-lg my-3 cursor-pointer transition-colors duration-300 hover:text-blue-500 ${visible.box3 ? "text-blue-500 font-bold" : "text-gray-700"}`}
                            onClick={() => handleVisibility('box3')}
                        >
                            Communication Partner
                        </button>
                        <button
                            className={`text-lg my-3 cursor-pointer transition-colors duration-300 hover:text-blue-500 ${visible.box4 ? "text-blue-500 font-bold" : "text-gray-700"}`}
                            onClick={() => handleVisibility('box4')}
                        >
                            Academic Partner
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-[70%] relative  p-6">
                        {visible.box1 && (
                            <div className="box1 w-full h-full">
                                <Slider {...settings}>
                                    {partnerImages.map((image, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-center items-center border-2 border-gray-200 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow"
                                        >
                                            <img
                                                src={image}
                                                alt={`partner-${index}`}
                                                className="w-[150px] h-[150px] object-contain mx-auto"
                                            />
                                        </div>
                                    ))}
                                    
                                </Slider>

                            </div>
                        )}
                        {visible.box2 && (
                            <div className="box2 w-full h-full flex justify-center items-center bg-blue-50">
                                <p className="text-gray-700 text-base md:text-xl">Content for Business Partners</p>
                            </div>
                        )}
                        {visible.box3 && (
                            <div className="box3 w-full h-full flex justify-center items-center bg-blue-50">
                                <p className="text-gray-700 text-base md:text-xl">Content for Communication Partners</p>
                            </div>
                        )}
                        {visible.box4 && (
                            <div className="box4 w-full h-full flex justify-center items-center bg-blue-50">
                                <p className="text-gray-700 text-base md:text-xl">Content for Academic Partners</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Partners;
