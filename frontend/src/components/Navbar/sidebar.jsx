import React, { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import cross from "/src/assets/navbar/cross.png";
import right_arrow from "/src/assets/navbar/right-arrow.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CSSPlugin } from 'gsap/CSSPlugin';

gsap.registerPlugin(CSSPlugin);

const SideBar = React.memo(({ togled, setTogled, navItems }) => {
    const sideMenuRef = useRef();
    const tl = useRef(gsap.timeline({ paused: true }));
    const [expandedSections, setExpandedSections] = useState({});

    const toggleItem = useCallback((sectionKey) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionKey]: !prev[sectionKey]
        }));
    }, []);

    const handleClose = useCallback(() => {
        setTogled(false);
    }, [setTogled]);

    useGSAP(() => {
        tl.current.to(sideMenuRef.current, {
            left: 0,
            duration: 0.5,
        });

        if (togled) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [togled]);

    return (
        <div ref={sideMenuRef} className="z-50 fixed -left-[100%] w-full lg:hidden h-screen flex-col gap-5 overflow-x-hidden bg-white p-5 pb-0">
            <div className='flex justify-between items-center'>
                <Logo />
                <button className='h-10 w-10' onClick={handleClose}>
                    <img src={cross} alt="Close Sidebar" className='h-full w-full object-cover' />
                </button>
            </div>

            <div className='mt-10 h-[68vh] flex flex-col gap-10 overflow-y-auto custom-scrollbar mb-5'>
                {Object.keys(navItems).map(sectionKey => (
                    <div key={sectionKey} className='space-y-2'>
                        {Array.isArray(navItems[sectionKey]) ? (
                            <>
                                <button className='w-full text-left' onClick={() => toggleItem(sectionKey)}>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-3 items-center'>
                                            <img src={right_arrow} alt="Right arrow" className={`h-4 transition-transform ${expandedSections[sectionKey] ? 'rotate-90' : ''}`} />
                                            <span className='text-2xl font-medium'>{sectionKey.replace(/([A-Z])/g, ' $1')}</span>
                                        </div>
                                    </div>
                                </button>

                                {expandedSections[sectionKey] && (
                                    <div className='px-5 pt-4 flex flex-col gap-4'>
                                        {navItems[sectionKey]?.map(section => (
                                            <div key={section.heading}>
                                                <h2 className="text-md font-semibold text-gray-700">{section.heading}</h2>
                                                <ul className="ml-4 mt-2 space-y-2">
                                                    {section.links?.map(link => (
                                                        <li key={link.path}>
                                                            <Link to={link.path} className="text-sm text-gray-600" onClick={handleClose}>
                                                                {link.linkName}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className='flex justify-between'>
                                <Link to={navItems[sectionKey]?.link || '#'} onClick={handleClose}>
                                    <div className='flex gap-3 items-center'>
                                        <img src={right_arrow} alt="Right arrow" className="h-4 transition-transform" />
                                        <span className='text-2xl font-medium'>{sectionKey.replace(/([A-Z])/g, ' $1')}</span>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
});

export default SideBar;
