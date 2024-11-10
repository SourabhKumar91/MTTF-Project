import React, { useRef, useState, useEffect } from 'react';
import { headingAnimation } from '../GsapAnimation/Gsap';
import introVideo from "../assets/introMTTF.mp4";
import { Link } from 'react-router-dom';

function HomeHeader() {
    const headingRef = useRef();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        headingAnimation(headingRef);
    }, []);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    return (
        <div className='flex flex-col justify-center items-center mt-36 md:mb-20 mb-12 text-[#FFFFFF]'>
            <h1 ref={headingRef} className='md:text-[3.9rem] text-4xl font-medium leading-none'>
                Welcome To MTTF
            </h1>
            <p className='text-center md:text-start text-sm lg:text-[1.5rem] font-custom1 md:mt-6 mt-4 text-[#F1F3F6] mx-4'>
                International association for Science, Technology, Engineering and Mathematics professor
            </p>
            <Link to={"/about"}>
                <button className='bg-[#03518F] px-7 py-3 text-[15px] font-bold rounded-full text-white md:mt-10 mt-8'>
                    <span>Learn More</span>
                </button>
            </Link>

            <div className='flex justify-center items-center mt-10 relative'>
                <div className='md:px-12 px-8 relative'>
                    {/* Video Element */}
                    <video
                        ref={videoRef}
                        className='rounded-xl'
                        width={1200}
                        height={1000}
                        controls
                        playsInline
                        preload="metadata"
                        onPlay={handleVideoPlay}
                        onPause={handleVideoPause}
                    >
                        <source src={introVideo} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>

                    {/* Play Button Overlay */}
                    {!isPlaying && (
                        <button
                            onClick={handlePlayPause}
                            className="absolute inset-0 flex justify-center items-center bg-transparent"
                            aria-label="Play video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="64"
                                height="64"
                                viewBox="0 0 24 24"
                                fill="white"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HomeHeader;
