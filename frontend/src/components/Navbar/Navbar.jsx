import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import SideBar from './sidebar';
import { navItems } from "../../assets/navitems";
import HoverBox from './HoverBox/HoverBox';

function Navbar() {
    const [togled, setTogled] = useState(false);

    const handelClick = () => {
        setTogled(prev => !prev);
    };

    return (
        <>
            <SideBar togled={togled} setTogled={setTogled} />
            <header className="absolute flex justify-center items-center w-full z-30 text-m xl:text-xl">
                <div className='mx-4 rounded-full px-3 md:py-4 py-1 flex items-center justify-between w-full lg:w-10/12 bg-[#ffffff10]' 
                    style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>
                    
                    {/* Left section - Logo */}
                    <div className='flex space-x-3 md:my-1'>
                        <Logo theme={"light"} />
                    </div>
                    
                    {/* Middle section - Navigation */}
                    <div className='flex-1 flex justify-center items-center text-[#FFFFFF]'>
                        <nav className='hidden lg:flex space-x-4 font-medium'>
                            {navItems.map((item) => (
                                <div className="relative group" key={item.name}>
                                    <a
                                        href={item.path}
                                        className={`${
                                            item.name === 'Home' ? 'mr-0' : 'mr-2'
                                        } py-1 px-2 font-medium text-lg text-[#EEEEEE] hover:bg-[#EEEEEE] hover:text-[#03518F] hover:rounded-lg font-serif`}
                                    >
                                        {item.name}
                                    </a>
                                    <div className="z-20 absolute inset-x-0 bottom-0 top-12 h-1 bg-[#EEEEEE] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                                        {item.hoverLink.length < 1 ? null : <HoverBox links={item.hoverLink} />}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Right section - Member Login */}
                    <div className='hidden lg:flex items-center'>
                        <a href="#" className='flex-shrink-0'>
                            <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#03518F] border-0 py-2 px-3 lg:px-4 focus:outline-none hover:bg-[#EEEEEE]  hover:text-[#03518F] rounded-full mt-2 md:mt-0">
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
                    <div className='lg:hidden text-right py-1 navmenubar items-center justify-center'>
                        <button onClick={handelClick} className='  text-white'>
                            <i className="fa-solid fa-bars w-10 h-8 mt-1" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
