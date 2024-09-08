import React from 'react';
import Logo from '../Logo/Logo';
import { navItems } from '../../assets/navitems';
import SmNavbar from './SmNavbar';
import HoverBox from '../HoverBox/HoverBox';

function Navbar() {
    return (
        <>
                <SmNavbar />
            <header className="text-gray-600 body-font p-5 bg-[#EEEBEB]  hidden lg:flex">
                <div className="container mx-auto flex-wrap flex-col md:flex-row items-center">
                    <Logo />
                    <nav className="relative md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        {navItems.map((item) => (
                            <div className="relative group" key={item.name}>
                                <a
                                    href={item.path}
                                    className={`${
                                        item.name === 'Home' ? 'mr-0' : 'mr-2'
                                    } py-2 px-3 font-medium text-lg text-[#2f3645] hover:bg-[#DC5F00] hover:rounded-lg font-serif hover:text-[#EEEEEE]`}
                                >
                                    {item.name}
                                </a>
                                <div className="absolute inset-x-0 bottom-0 top-12 h-1 bg-[#DC5F00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                               {item.hoverLink.length < 1 ? null: <HoverBox links={item.hoverLink}/>}
                                </div>
                            </div>
                        ))}
                    </nav>
                    <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#DC5F00] border-0 py-3 px-6 focus:outline-none hover:bg-[#ec9f64] rounded mt-4 md:mt-0">
                        Member Login
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
