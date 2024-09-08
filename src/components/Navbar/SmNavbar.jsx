import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import SmNavComponents from './SmNavComponents'

function SmNavbar() {
  const [togled, setTogled] = useState(false)

  const handelClick = () => {
    setTogled(prev => !prev)
  }
  return (
  <>
    <SmNavComponents togled={togled} setTogled={setTogled}/>
    <header className="text-gray-600 body-font p-5 bg-[#EEEBEB]">
    <div className='container flex justify-between lg:hidden'>
      <div className='flex gap-4'>
        <div className='flex justify-center items-center'>
          <button className='h-10 w-10 overflow-hidden' onClick={handelClick}>
            <img src="/src/assets/toogleButton.png" alt="Toggle Button" className='h-full w-full object-cover' />
          </button>
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <div className='sm:flex justify-center items-center hidden'>
        <button className="inline-flex font-serif text-lg text-[#EEEEEE] items-center bg-[#DC5F00] border-0 py-3 px-6 focus:outline-none hover:bg-[#ec9f64] rounded ">
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
    </header>
  </>
  )
}

export default SmNavbar