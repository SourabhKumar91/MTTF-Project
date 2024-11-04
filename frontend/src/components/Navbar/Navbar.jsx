import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import SideBar from './sidebar';
import { Link } from 'react-router-dom';
import PopupBox from './PopupBox/PopupBox';

function Navbar() {
    const [togled, setTogled] = useState(false);
    const [show, setShow] = useState({
        box1: false,
        box2: false,
        box3: false,
        box4: false,
    });

    const whatWeDo = [
        {
            heading: "Industry",
            links: [
                {
                    linkName: "supply chain",
                    path: ""
                },
                {
                    linkName: "Banking",
                    path: ""
                },
                {
                    linkName: "Netural Resourse",
                    path: ""
                },
                {
                    linkName: "Health",
                    path: ""
                },
                {
                    linkName: "High Tech",
                    path: ""
                },
                {
                    linkName: "Life Science",
                    path: ""
                },
                {
                    linkName: "Software & Platform",
                    path: ""
                },
            ]
        },
        {
            heading: "Capability",
            links: [
                {
                    linkName: "Data Analytics",
                    path: "/Services/dataanalytics"
                }
            ]
        },
        {
            heading: "Membership",
            links: [
                {
                    linkName: "Individual Membership",
                    path: "/membership/individual"
                },
                {
                    linkName: "Institutional Membership",
                    path: "/membership/institutional"
                },
            ]
        },

    ]

    const whatWeAre = [
        {
            heading: "General Information",
            links: [
                {
                    linkName: "Home",
                    path: "/"
                },
                {
                    linkName: "About",
                    path: "/about"
                },
                {
                    linkName: "Governing Body",
                    path: "/about/governingbody"
                },
                {
                    linkName: "Advisory Committee",
                    path: "/about/advisorycommittee"
                },
                
               

            ]
        },
        {
            heading: "Event's Awards",
            links: [
                
                {
                    linkName: "Awards 2025",
                    path: "/awards/2025"
                },
                {
                    linkName: "Awards 2024",
                    path: "/awards/2024"
                },
               

            ]
        },
        {
            heading: "Chepters",
            links: [
                
                {
                    linkName: "Student Chepter",
                    path: "/chapters/students"
                },
                {
                    linkName: "About Chepter",
                    path: "/chapters/about"
                },
               

            ]
        },
    ]
    
   

    const handelClick = () => {
        setTogled(prev => !prev);
    };

    const handleBtnClick = (box) => {
        setShow({
            box1: box === "box1",
            box2: box === "box2",
            box3: box === "box3",
        });
    };


    return (
        <>
            <SideBar togled={togled} setTogled={setTogled} />
            <header className="absolute flex justify-center items-center w-full z-30 text-m xl:text-xl">
                <div className="mx-4 rounded-full px-3 md:py-4 py-1 flex items-center justify-between w-full lg:w-10/12 bg-[#ffffff10]"
                    style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>

                    {/* Left section - Logo */}
                    <div className="flex space-x-3 md:my-1">
                        <Logo theme="light" />
                    </div>

                    {/* Middle section - Navigation */}
                    <div className="flex-1 flex justify-center items-center text-[#FFFFFF]">
                        <nav className="hidden lg:flex space-x-4 font-medium">
                            <button className="border-none px-6" onClick={() => handleBtnClick("box1")}>What We do </button>
                            <Link to="/"><button className="border-none px-6" onClick={() => handleBtnClick("box2")}>What We Think</button></Link>
                            <button className="border-none px-6" onClick={() => handleBtnClick("box3")}>Who We Are</button>
                        </nav>
                    </div>

                    {/* Right section - Member Login */}
                    <div className="hidden lg:flex items-center">
                        <a href="#" className="flex-shrink-0">
                            <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#03518F] border-0 py-2 px-3 lg:px-4 focus:outline-none hover:bg-[#EEEEEE] hover:text-[#03518F] rounded-full mt-2 md:mt-0">
                                Member Login
                                <svg
                                    className="lucide lucide-phone ml-2 mt-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden text-right py-1 navmenubar items-center justify-center">
                        <button onClick={handelClick} className="text-white">
                            <i className="fa-solid fa-bars w-10 h-8 mt-1" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    </div>
                </div>

                {/* Conditional rendering for each box */}
                {show.box1 && (
                   <PopupBox linkBox={whatWeDo} closeIcon={setShow}/>
                )}
                
                {/* we donot need  box 2 bcz that does not has links's list */}

                {show.box3 && (
                     <PopupBox linkBox={whatWeAre} closeIcon={setShow}/>
                )}

            </header>
        </>
    );
}

export default Navbar;
