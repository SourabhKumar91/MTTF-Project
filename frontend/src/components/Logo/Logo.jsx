import React from 'react'
import logo from "../../assets/Long@350.png"
import logoDark from "../../assets/Long@350black.png"


function Logo({theme}) {
    return (
        <>
            {theme=="light"?
                <a href='/'>
                    <img src={logo} alt="Comapny logo" width={160} height={37}  />
                </a>
                :
                <a href='/'>
                    <img src={logoDark} alt="Comapny logo" width={160} height={37}  />
                </a>}
            
        </>
    )
}

export default Logo