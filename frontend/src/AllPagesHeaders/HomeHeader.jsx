import React from 'react'
import { headingAnimation } from '../GsapAnimation/Gsap'
import { useEffect } from 'react'
import { useRef } from 'react'

function HomeHeader() {


    const headingRef =  useRef()

    

        useEffect(()=>{
            headingAnimation(headingRef)
        },[])


    return (
        <div className='flex flex-col justify-center items-center mt-36 md:mb-20 mb-12 text-[#FFFFFF]'>
            <h1 ref={headingRef} className='md:text-[3.9rem] text-4xl font-medium leading-none'>
                Welcome To {" (MTTF)"}
            </h1>
            <p className='text-center md:text-start text-sm lg:text-[1.5rem] font-custom1 md:mt-6 mt-4 text-[#F1F3F6] mx-4'>International association for Science, Technology, Engineering and Mathematics professor</p>
            <button className='bg-[#03518F] px-7 py-3 text-[15px] font-bold rounded-full text-white md:mt-10 mt-8'>
                <span>Learn More</span>
            </button>
            <div className='flex justify-center items-center mt-10'>
                <div className='md:px-12 px-8'>
                    <video className='rounded-xl' width={1200} height={1000} controls playsInline autoPlay loop>
                        <source src='/_next/static/videos/homevideo.mp4' type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader