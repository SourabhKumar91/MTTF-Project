import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adiyitaCollege from "../../assets/partners/aditya-college.jpg"
import bfgiLogo from "../../assets/partners/BFGI-logo.jpg"
import ctUniversity from "../../assets/partners/ct-university.png"
import dasmeshGirlsCollege from "../../assets/partners/dasmesh-girls-college.jpg"
import mtuLogo from "../../assets/partners/mtu-logo.png"
import NUm from "../../assets/partners/NU.jpeg"
import sru from "../../assets/partners/sru.png"
import poornima from "../../assets/partners/poornima.png"

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

    const partnerImages = [adiyitaCollege, ctUniversity, dasmeshGirlsCollege, mtuLogo, NUm, sru,]

    return (
       <>
       <h1 className=' font-serif  text-2xl lg:text-4xl mb-12'>Our Trusted Partners</h1>
        <div className='w-full flex flex-wrap min-h-[300px] rounded-lg overflow-hidden '>
            <div className='w-[30%] p-6 border-r-2 border-[#03518F] flex flex-col justify-center'>
                <button
                    className='text-lg my-3 hover:text-blue-400 cursor-pointer transition-colors duration-300'
                    onClick={() => handleVisibility('box1')}
                >
                    All Partners
                </button>
                <button
                    className='text-lg my-3 hover:text-blue-400 cursor-pointer transition-colors duration-300'
                    onClick={() => handleVisibility('box2')}
                >
                    Business Partners
                </button>
                <button
                    className='text-lg my-3 hover:text-blue-400 cursor-pointer transition-colors duration-300'
                    onClick={() => handleVisibility('box3')}
                >
                    Communication Partner
                </button>
                <button
                    className='text-lg my-3 hover:text-blue-400 cursor-pointer transition-colors duration-300'
                    onClick={() => handleVisibility('box4')}
                >
                    Academic Partner
                </button>
            </div>

            <div className='w-[70%] relative'>
                {visible.box1 && (
                    <div className='box1   bg-slate-300 absolute top-0 w-full h-full p-12 '>
                        <Slider {...settings}>

                            {partnerImages.map((image) => (
                                <div className='flex justify-center items-center'>
                                    <img
                                        src={image}
                                        alt="image"
                                        className='w-[150px] h-[150px] object-cover'
                                    />
                                </div>
                            ))}
                                 <div className='flex justify-center p-4 items-center'>
                                    <img
                                        src={bfgiLogo}
                                        alt="image"
                                        className=' object-cover'
                                    />
                                </div>
                                <div className='flex justify-center p-4 items-center'>
                                    <img
                                        src={poornima}
                                        alt="image"
                                        className=' object-cover'
                                    />
                                </div>
                        </Slider>
                    </div>
                )}
                {visible.box2 && (
                    <div className='box2 absolute top-0 w-full h-full'>
                        <p>Content for Business Partners</p>
                    </div>
                )}
                {visible.box3 && (
                    <div className='box3 absolute top-0 w-full h-full'>
                        <p>Content for Communication Partners</p>
                    </div>
                )}
                {visible.box4 && (
                    <div className='box4 absolute top-0 w-full h-full'>
                        <p>Content for Academic Partners</p>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Partners;



