import React from 'react'
import { headingAnimation } from '../GsapAnimation/Gsap'
import { useEffect } from 'react'
import { useRef } from 'react'

function HomeHeader() {

    const headingRef = useRef()

    useEffect(() => {
        headingAnimation(headingRef)
    }, [])


    return (
        <div className='flex flex-col justify-center items-center mt-36 md:mb-20 mb-12 text-[#FFFFFF]'>
            <h1 ref={headingRef} className='md:text-[3.9rem] text-4xl font-medium leading-none'>
                Welcome To MTTF
            </h1>
            <p className='text-center md:text-start text-sm lg:text-[1.5rem] font-custom1 md:mt-6 mt-4 text-[#F1F3F6] mx-4'>International association for Science, Technology, Engineering and Mathematics professor</p>
            <button className='bg-[#03518F] px-7 py-3 text-[15px] font-bold rounded-full text-white md:mt-10 mt-8'>
                <span>Learn More</span>
            </button>
            <div className="flex justify-center items-center mt-10 w-full">
                <div className="w-full px-4 md:px-8 lg:px-12 max-w-7xl">
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                            src="https://www.youtube.com/embed/1we6FkKvGa0?autoplay=1&loop=1&controls=1&playlist=1we6FkKvGa0"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeHeader