import React from 'react'
import logo from "../../assets/Long@350.png"


function Logo() {
    return (
        <>
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
                <img src={logo} alt="logo" className='h-14 '  />
            </a>
        </>
    )
}

export default Logo