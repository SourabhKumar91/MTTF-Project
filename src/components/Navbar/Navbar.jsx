import React from 'react'
import MembershipBox from '../HoverBox/MembershipBox'
import Logo from '../Logo/Logo'

function Navbar() {
    const navItems = [
        {
            name: "Home",
            path: "/",

        },
        {
            name: "About",
            path: "/about",

        },
        {
            name: "Membership",
            path: "/menbership",

        },

        {
            name: "Chepters",
            path: "/chepters",

        },
        {
            name: "Awards",
            path: "/awards",

        },
        {
            name: "Events",
            path: "/events",

        },

    ]
    return (


        <>
            <header class="text-gray-600 body-font p-5  bg-[#EEEBEB] ">
                <div class="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
                    <Logo />
                    <nav class=" relative md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

                        {navItems.map((item) => (
                            <a className={` ${item.name == "Home" ? "mr-0":"mr-2"} py-2 px-3 font-medium text-lg text-[#2f3645] hover:bg-[#DC5F00] hover:rounded-lg font-serif hover:text-[#EEEEEE] `} key={item.name}>{item.name}</a>
                        ))}
                    </nav>
                    <button class="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#DC5F00] border-0 py-3 px-6 focus:outline-none hover:bg-[#ec9f64]  rounded  mt-4 md:mt-0">Member Login
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Navbar