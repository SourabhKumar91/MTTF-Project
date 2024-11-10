import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import SideBar from './sidebar';
import { Link } from 'react-router-dom';
import PopupBox from './PopupBox/PopupBox';
import navItems from '../../assets/navitems'

function Navbar() {
    const [togled, setTogled] = useState(false);
    const [selected, setSelected] = useState(null);
    
    const handelClick = () => {
        setTogled(prev => !prev);
    };

    const handleBtnClick = (name) => {
        setSelected(name);
    };

    useEffect(() => {
        const isPopupOpen = selected;
        document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
        
        return () => {
           
            document.body.style.overflow = 'auto';
        };
    }, [selected]);


    return (
        <>
            <SideBar togled={togled} setTogled={setTogled} navItems={navItems} />
            <header className="absolute flex justify-center items-center w-full z-30 text-m xl:text-xl">
                <div className="mx-4 rounded-full px-3 md:py-4 py-1 flex items-center justify-between w-full lg:w-10/12 bg-[#ffffff10]"
                    style={{ border: "1px solid rgba(255, 255, 255, 0.2)" }}>

                    <div className="flex space-x-3 md:my-1">
                        <Logo theme="light" />
                    </div>

                    <div className="flex-1 flex justify-center items-center text-[#FFFFFF]">
                        <nav className="hidden lg:flex space-x-4 font-medium">
                            <button className={`border-none px-3 ${selected == "whatWeDo" ? " bg-slate-200 text-blue-500 rounded-lg py-1 ": ""}`} onClick={() => handleBtnClick("whatWeDo")}>What We do </button>
                            <Link to="/"><button className="border-none px-3 py-2" /*onClick={() => handleBtnClick("whatWeThink")} */>What We Think</button></Link>
                            <button className={`border-none px-3 ${selected == "whoWeAre" ? " bg-slate-200 text-blue-500 rounded-lg py-1 ": ""}`} onClick={() => handleBtnClick("whoWeAre")}>Who We Are</button>
                        </nav>
                    </div>

                    <div className="lg:hidden text-right py-1 navmenubar items-center justify-center">
                        <button onClick={handelClick} className="text-white">
                            <i className="fa-solid fa-bars w-10 h-8 mt-1" style={{ fontSize: '1.5rem' }}></i>
                        </button>
                    </div>
                </div>

                {selected && <PopupBox linkBox={navItems[selected]} closeIcon={setSelected}/> }

            </header>
        </>
    );
}

export default Navbar;
