import React, { useRef } from 'react';
import traningimg from "../../assets/service/traning.png";
import Eventimg from "../../assets/service/event.png";
import internshipimg from "../../assets/service/internship.png";
import cirtificate from "../../assets/service/cirtificate.png";
import {useGSAP} from "@gsap/react"
import "../../styles/styles.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);



function Services() {

    const sectiion1imgref = useRef();
    const sectiion2imgref = useRef();
    const sectiion3imgref = useRef();
    const sectiion4imgref = useRef();

    useGSAP(()=>{
        gsap.from(sectiion1imgref.current,{
            y:200,
            opacity:0,
            duration:3,
            scrollTrigger: {
                trigger: sectiion2imgref.current,
                start: "top 95%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "bottom 30%", // End animation when the bottom of the element is 30% from the top of the viewport
                scrub: true, // Allows for smooth scrubbing
                
                
            }
        

        })
        gsap.from(sectiion2imgref.current,{
            y:200,
            opacity:0,
            duration:3,
            scrollTrigger: {
                trigger: sectiion2imgref.current,
                start: "top 90%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "bottom 30%", // End animation when the bottom of the element is 30% from the top of the viewport
                scrub: true, // Allows for smooth scrubbing
                
            }
        })

        gsap.from(sectiion3imgref.current,{
            y:200,
            opacity:0,
            duration:3,
            scrollTrigger: {
                trigger: sectiion3imgref.current,
                start: "top 80%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "bottom 30%", // End animation when the bottom of the element is 30% from the top of the viewport
                scrub: true, // Allows for smooth scrubbing
            }
        })
        gsap.from(sectiion4imgref.current,{
            y:200,
            opacity:0,
            duration:3,
            scrollTrigger: {
                trigger: sectiion4imgref.current,
                start: "top 70%", // Start animation when the top of the element is 80% from the top of the viewport
                end: "bottom 30%", // End animation when the bottom of the element is 30% from the top of the viewport
                scrub: true, // Allows for smooth scrubbing
            }
        })

        
    })

    
    return (
        <>   
            <div className="bg-[#EFF6FF]">
                <div className=' text-4xl p-4 shadow font-sers text-  text-center mt-0 pt-20'>OUR Services: Tailored Solutions for <span className=' text-[#2ba1f0] font-bold'>Your Needs</span></div>
                <div className=" py-8 md:py-16 w-11/12 lg:w-10/12 xl:w-1200 m-auto">
                    <div className="space-y-16 ">
                        {/* First Section */}
                        <div  className="  space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center ">
                            <div className="w-full md:w-[40%] space-y-4 ">
                                <h3 className="text-2xl font-bold font-serif md:text-3xl text-[#DC5F00]">Empowering Growth with Training</h3>
                                <p className=' font-medium'>
                                    Training
                                    It provides training, which refers to the teaching and learning activities carried on for the primary purpose of helping members of an organization acquire and apply the knowledge, skills, abilities, and attitudes needed by a particular job and organization for STEM professionals.


                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3">
                                <img src={traningimg} alt="Training" ref={sectiion1imgref} />
                            </div>
                        </div>

                        {/* Second Section */}
                        <div className="  space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-around  md:flex md:items-center md:flex-row-reverse ">
                            <div className="w-full md:w-[40%] space-y-4  ">
                                <h3 className=" text-2xl font-bold font-serif md:text-3xl ">Skill Development Workshops</h3>
                                <p className=' font-medium'>
                                    It organizes workshops for STEM professionals on a particular subject, to learn new projects, techniques and methods. Ensuring a proper flow of knowledge, Workshops assist in passionate interaction and active participation boosting the skills and expertise of STEM professionals.
                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3  ">
                                <img src={Eventimg} alt="Event" ref={sectiion2imgref} />
                            </div>
                        </div>

                        {/* section-3.................. */}

                        <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center">
                            <div className="w-full md:w-[40%] space-y-4">
                                <h3 className=" text-2xl text-[#33cabd] font-bold md:text-3xl font-serif">Exciting Internship Opportunities</h3>
                                <p className=' font-medium'>
                                    MTTF opens internships for Indian students in the area of Digital Marketing, CRM, Web-development, Graphic Designing, Content writing, Data-Analysis, Research Associates, Project Associates, etc. Applications are invited through the Internship AICTE-India portal


                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3">
                                <img src={internshipimg} alt="Training" ref={sectiion3imgref} />
                            </div>
                        </div>

                        {/* section 4........... */}
                        <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-around  md:flex md:items-center md:flex-row-reverse ">
                            <div className="w-full md:w-[40%] space-y-4  ">
                                <h3 className=" text-2xl font-bold font-serif text-[#DC5F00] md:text-3xl ">Professional Certificate Program</h3>
                                <p className=' font-medium'>
                                Certification demonstrates your commitment to superior professionalism, upholding industry standards, and continued learning. A certificate can help ease that transition, making you feel more prepared, confident, and qualified to pursue new career opportunities.
                                </p>
                            </div>
                            <div className="mx-auto w-1/2 md:w-1/3  ">
                                <img src={cirtificate} alt="Event" ref={sectiion4imgref} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
