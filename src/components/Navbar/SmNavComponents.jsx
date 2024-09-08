import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import cross from "/src/assets/navbar/cross.png"
import right_arrow from "/src/assets/navbar/right-arrow.png"
import down_arrow from "/src/assets/navbar/down-arrow.png"
import next_arrow from "/src/assets/navbar/next-arrow.png"

function SmNavComponents({ togled, setTogled }) {

    const [items, setItems] = useState({
        aboutUs: false,
        membership: false,
        chapters: false,
        awards: false
    })

    const handelClick = () => {
        setTogled(prev => !prev)
    }

    useEffect(() => {
        if (togled) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [togled]);

    const toggleItem = (itemName) => {
        setItems(prevItems => ({
            ...prevItems,
            [itemName]: !prevItems[itemName]
        }));
        console.log(items);
        
    };

    return (
        <div className={`z-30 absolute w-screen h-screen ${togled ? "flex" : "hidden"} flex-col gap-5 overflow-x-hidden bg-white p-5`}>
            <div className=' flex content-between justify-between'>
                <div>
                    <Logo />
                </div>
                <div className='flex justify-center items-center'>
                    <button className='h-10 w-10 overflow-hidden' onClick={handelClick} >
                        <img src={cross} alt="Toggle Button" className='h-full w-full object-cover' />
                    </button>
                </div>
            </div>
            <div className=' mt-10 h-full flex flex-col gap-10 overflow-y-auto custom-scrollbar'>
                <div>
                    <div className='h-4  flex gap-3 justify-start items-center hover:text-[#DC5F00]'>
                        <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                        <span className='text-2xl font-medium'>Home</span>
                    </div>
                </div>
                <div>
                    <button className='w-full hover:text-[#DC5F00]' onClick={()=>toggleItem("aboutUs")}>
                        <div className='flex justify-between'>
                            <div className='h-4 flex gap-3 justify-start items-center'>
                                <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                                <span className='text-2xl font-medium'>About Us</span>
                            </div>
                            <div className='h-6 mr-5'>
                            {items.aboutUs?(
                                    <img src={down_arrow} alt="down arrow" className='h-full w-full object-cover' />
                                )
                                :
                                (
                                    <img src={next_arrow} alt="next arrow" className='h-full w-full object-cover' />
                                )}
                            </div>
                        </div>
                    </button>
                    <div className={`${items.aboutUs?"block":"hidden"} px-7 pt-4 flex flex-wrap flex-col gap-2`}>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Our Vision</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Our Mission</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Governing Body</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Advisory Committe</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Executive Officer/Coordinators</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Contact Us</div>
                    </div>
                </div>
                <div>
                    <button className='w-full hover:text-[#DC5F00]'  onClick={()=>toggleItem("membership")}>
                        <div className='flex justify-between'>
                            <div className='h-4 flex gap-3 justify-start items-center'>
                                <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                                <span className='text-2xl font-medium'>Membership</span>
                            </div>
                            <div className='h-6 mr-5'>
                            {items.membership?(
                                    <img src={down_arrow} alt="down arrow" className='h-full w-full object-cover' />
                                )
                                :
                                (
                                    <img src={next_arrow} alt="next arrow" className='h-full w-full object-cover' />
                                )}
                            </div>
                        </div>
                    </button>
                    <div className={`${items.membership?"block":"hidden"} px-7 pt-4 flex flex-wrap flex-col gap-2`}>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Individual Membership</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Institutional Membership</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>MTTF</div>
                    </div>
                </div>
                <div>
                    <button className='w-full hover:text-[#DC5F00]'  onClick={()=>toggleItem("chapters")}>
                        <div className='flex justify-between'>
                            <div className='h-4 flex gap-3 justify-start items-center'>
                                <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                                <span className='text-2xl font-medium'>Chapters</span>
                            </div>
                            <div className='h-6 mr-5'>
                            {items.chapters?(
                                    <img src={down_arrow} alt="down arrow" className='h-full w-full object-cover' />
                                )
                                :
                                (
                                    <img src={next_arrow} alt="next arrow" className='h-full w-full object-cover' />
                                )}
                            </div>
                        </div>
                    </button>
                    <div className={`${items.chapters?"block":"hidden"} px-7 pt-4 flex flex-wrap flex-col gap-2`}>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>About Chapters</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Students Chapter</div>
                    </div>
                </div>
                <div>
                    <button className='w-full hover:text-[#DC5F00]'  onClick={()=>toggleItem("awards")}>
                        <div className='flex justify-between'>
                            <div className='h-4 flex gap-3 justify-start items-center'>
                                <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                                <span className='text-2xl font-medium'>Awards</span>
                            </div>
                            <div className='h-6 mr-5'>
                                {items.awards?(
                                    <img src={down_arrow} alt="down arrow" className='h-full w-full object-cover' />
                                )
                                :
                                (
                                    <img src={next_arrow} alt="next arrow" className='h-full w-full object-cover' />
                                )}
                                
                            </div>
                        </div>
                    </button>
                    <div className={`${items.awards?"block":"hidden"} px-7 pt-4 flex flex-wrap flex-col gap-2`}>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Awards 2025</div>
                        <div className='text-lg font-medium hover:text-[#DC5f00]'>Awards 2024</div>
                    </div>
                </div>
                <div>
                    <div className='h-4 flex gap-3 justify-start items-center hover:text-[#DC5F00]'>
                        <img src={right_arrow} alt="right arrow" className='h-full object-cover' />
                        <span className='text-2xl font-medium'>Events</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-full relative bottom-0'>
                <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#DC5F00] border-0 py-3 px-6 focus:outline-none hover:bg-[#ec9f64] rounded w-full justify-center">
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

        </div>
    )
}

export default SmNavComponents