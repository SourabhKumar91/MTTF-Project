import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import SideBar from './sidebar';

function Navbar() {

    const [togled, setTogled] = useState(false)

    const handelClick = () => {
        setTogled(prev => !prev)
    }

    return (
        <>
            <SideBar togled={togled} setTogled={setTogled} />
            <header className=" absolute flex justify-center items-center w-full z-30 text-m xl:text-xl">
                <div className=' mx-6 rounded-full px-4 md:py-3 py-0 flex items-center justify-between w-full md:w-[80%] bg-[#ffffff10]' style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    <div className='flex space-x-4 md:my-2'>
                        <Logo theme={"light"} />
                    </div>
                    <div className='flex-1 flex justify-center text-[#FFFFFF]'>
                        <nav className='hidden lg:flex space-x-6 font-medium'>
                            <a href="" className='text-muted-foreground text-primary hover:text-blue-200'>Home</a>
                            <div className='hidden lg:flex relative group'>
                                <button className='text-muted-foreground hover:text-primary flex items-center gap-1 hover:text-blue-200'>
                                    About Us
                                    <i className="fa-solid fa-angle-down text-sm mt-0.25" style={{ width: '1em', height: '1em', fontSize: '1em' }}></i>
                                </button>
                            </div>
                            <div className='hidden lg:flex relative group'>
                                <button className='text-muted-foreground hover:text-primary flex items-center gap-1 hover:text-blue-200'>
                                    Membership
                                    <i className="fa-solid fa-angle-down text-sm mt-0.25" style={{ width: '1em', height: '1em', fontSize: '1em' }}></i>
                                </button>
                            </div>
                            <div className='hidden lg:flex relative group'>
                                <button className='text-muted-foreground hover:text-primary flex items-center gap-1 hover:text-blue-200'>
                                    Chapters
                                    <i className="fa-solid fa-angle-down text-sm mt-0.25" style={{ width: '1em', height: '1em', fontSize: '1em' }}></i>
                                </button>
                            </div>
                            <div className='hidden lg:flex relative group'>
                                <button className='text-muted-foreground hover:text-primary flex items-center gap-1 hover:text-blue-200'>
                                    Awards
                                    <i className="fa-solid fa-angle-down text-sm mt-0.25" style={{ width: '1em', height: '1em', fontSize: '1em' }}></i>
                                </button>
                            </div>
                            <a href="" className='text-muted-foreground text-primary hover:text-blue-200'>Events</a>
                        </nav>
                    </div>
                    <div>
                        <a href="#" className=' flex-shrink-0'>
                            <div className="hidden xl:block flex-shrink-0">
                                <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#03518F] border-0 py-3 px-6 focus:outline-none hover:bg-[#ec9f64] rounded-full mt-4 md:mt-0">
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
                            </div>
                        </a>
                    </div>
                    <div className='lg:hidden basis-1/2 text-right py-2 navmenubar items-center justify-center'>
                        <button onClick={handelClick}>
                            <i className="fa-solid fa-bars w-10 h-8 mt-1" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    </div>

                </div>
            </header>
            {/* <HeroSection image={heroImg} /> */}
        </>
    );
}

export default Navbar;
