import React from 'react'
import logo from "../../assets/Long@350.png"


function Logo() {
    return (
        <>
            <a href='/'>
                <img src={logo} alt="Comapny logo" width={160} height={37}  />
            </a>
        </>
    )
}

export default Logo