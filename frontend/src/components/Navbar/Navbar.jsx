import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import SideBar from './sidebar';
import { Link } from 'react-router-dom';

function Navbar() {
    const [togled, setTogled] = useState(false);

    // Placeholder arrays for links
    const ourCompanyLink = ["Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4", "Placeholder 5", "Placeholder 6"];
    const servicesLink = ["Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4"];
    const importantLink = ["Placeholder 1", "Placeholder 2"];
    const contact = ["Placeholder Email", "Placeholder Phone"];

    const [show, setShow] = useState({
        box1: false,
        box2: false,
        box3: false,
        box4: false,
    });

    const handelClick = () => {
        setTogled(prev => !prev);
    };

    const handleBtnClick = (box) => {
        setShow({
            box1: box === "box1",
            box2: box === "box2",
            box3: box === "box3",
            box4: box === "box4",
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
                            <button className="border-none px-6" onClick={() => handleBtnClick("box1")}>Link1...</button>
                            <button className="border-none px-6" onClick={() => handleBtnClick("box2")}>Link2...</button>
                            <button className="border-none px-6" onClick={() => handleBtnClick("box3")}>Link3...</button>
                            <button className="border-none px-6" onClick={() => handleBtnClick("box4")}>Link4...</button>
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
                   <div className="absolute w-full h-screen top-24 shadow-lg border-t-2 border-white">
                   <div className="bg-gradient-to-r from-[#0c0c0e] to-[#342e69] w-full h-full relative">
                       {/* Close Icon */}
                       <button
                           className="absolute top-4 right-6 text-white text-[50px] font-bold hover:text-gray-300 transition duration-200"
                           onClick={() => setShow({ box1: false, box2: false, box3: false, box4: false })}
                       >
                           &times;
                       </button>
               
                       <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                           <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
               
                               {/* Our Company Links */}
                               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                   <h2 className="title-font font-semibold text-2xl text-white tracking-widest mb-4">Heading...</h2>
                                   <nav className="list-none mb-10">
                                       {ourCompanyLink.map((link, index) => (
                                           <li key={index} className="mt-3">
                                               <a className="text-white  hover:text-blue-300 transition duration-300 cursor-pointer">{link}</a>
                                           </li>
                                       ))}
                                   </nav>
                               </div>
               
                               {/* Services Links */}
                               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                   <h2 className="title-font font-semibold text-2xl text-white tracking-widest mb-4">Heading...</h2>
                                   <nav className="list-none mb-10">
                                       {servicesLink.map((link, index) => (
                                           <li key={index} className="mt-3">
                                               <a className="text-white  hover:text-blue-300 transition duration-300 cursor-pointer">{link}</a>
                                           </li>
                                       ))}
                                   </nav>
                               </div>
               
                               {/* Important Links */}
                               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                   <h2 className="title-font font-semibold text-2xl text-white tracking-widest mb-4"> Heading...</h2>
                                   <nav className="list-none mb-10">
                                       {importantLink.map((link, index) => (
                                           <li key={index} className="mt-3">
                                               <a className="text-white  hover:text-blue-300 transition duration-300 cursor-pointer">{link}</a>
                                           </li>
                                       ))}
                                   </nav>
                               </div>
               
                               {/* Contact Us */}
                               <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                   <h2 className="title-font font-semibold text-2xl text-white tracking-widest mb-4">Heading...</h2>
                                   <nav className="list-none mb-10">
                                       {contact.map((link, index) => (
                                           <li key={index} className="mt-3">
                                               <a className="text-white  hover:text-blue-300 transition duration-300 cursor-pointer">{link}</a>
                                           </li>
                                       ))}
                                   </nav>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               

                )}
                {show.box2 && (
                    <div className="absolute w-full h-screen top-24 bg-white py-4 shadow-md">
                        <p className="text-center text-gray-700">Content for Box 2</p>
                    </div>
                )}
                {show.box3 && (
                    <div className="absolute w-full h-screen top-24 bg-white py-4 shadow-md">
                        <p className="text-center text-gray-700">Content for Box 3</p>
                    </div>
                )}
                {show.box4 && (
                    <div className="absolute w-full h-screen top-24 bg-white py-4 shadow-md">
                        <p className="text-center text-gray-700">Content for Box 4</p>
                    </div>
                )}
            </header>
        </>
    );
}

export default Navbar;
