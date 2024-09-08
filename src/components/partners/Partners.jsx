import React from 'react'
import { partners } from '../../assets/partners/partners'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

function Partners() {

    useGSAP(()=>{
        gsap.from(".image",{
            y:100,
            duration:2,
            stagger:0.5,
            opacity:0,
            
            scrollTrigger:{
                trigger:".image",
                start: "top 60%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "bottom 30%", // End animation when the bottom of the element is 30% from the top of the viewport
                scrub: 2,
                
            }

        })
    })
    return (
        <div className='mt-6 flex justify-center items-center mb-6 flex-col'>
            <h1 className=' color  font-medium   mx-5 lg:mx-32'> <span className=' font-bold font-serif text-green-700  text-4xl mr-4  '>Our Partnes</span>We are proud to collaborate with trusted organizations that help us achieve our goals. Our partners play a crucial role in delivering quality services and innovative solutions. Together, we strive to provide value and excellence to our clients. By building strong, mutually beneficial relationships, we ensure continuous growth and success. Discover more about our partners and how these collaborations drive our mission forward.

            </h1>
            <div className='border flex flex-wrap gap-2 md:pl-10 mt-16 justify-center items-center border-none'>
                {partners.map((partner, index) => (
                    index > 2 ? (
                        <div key={index} className=' mx-12 mt-6'>
                            <img src={partner.src} alt={partner.alt} className=" image w-32 h-auto inline-block" />
                        </div>
                    ) : (
                        <div key={index} className='md:w-[25%] mx-10'>
                            <img src={partner.src} alt={partner.alt} className=" image w-full h-32 md:mx-10 inline-block" />
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Partners
