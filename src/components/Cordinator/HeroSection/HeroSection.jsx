import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

function HeroSection({ image }) {
    const [text, setText] = useState("MathTech Thinking Foundation MTTF");
    const [textArr, setTextArr] = useState([]);

    useEffect(() => {
        const splittedText = text.split("");
        setTextArr(splittedText);
    }, [text]);

 
    useEffect(() => {
        if (textArr.length > 0) {
           
            gsap.fromTo(
                ".animationText", 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" } 
            );
        }
    }, [textArr]);

    return (
        <>
            <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={image} alt="Background" className="object-cover object-center w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome To Our</h1>
                    <h1 className="text-4xl font-bold relative leading-tight mb-4">
                        {textArr.map((char, index) => (
                            <span key={index} className="animationText inline-block"> {char === " " ? "\u00A0" : char}</span>
                        ))}
                    </h1>
                    <p className="text-lg text-gray-300 mb-8">
                        An International Association For Science,Technology,Engineering and  Mathematics Proffessional
                    </p>
                    <a
                        href="#"
                        className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </>
    );
}

export default HeroSection;
