import React from 'react'
import Logo from '../Logo/Logo'

function SmNavComponents({togled, setTogled}) {
    const handelClick = ()=> {
        setTogled(prev=> !prev)
    }
  return (
    <div className={`z-30 absolute w-screen h-screen ${togled?"block":"hidden"} flex flex-col gap-5 overflow-x-hidden bg-white p-5 pr-10`}>
        <div className=' flex content-between justify-between'>
            <div>
                <Logo />
            </div>
            <div className='flex justify-center items-center'>
          <button className='h-10 w-10 overflow-hidden' onClick={handelClick} >
            <img src="/src/assets/cross.png" alt="Toggle Button" className='h-full w-full object-cover' />
          </button>
        </div>
        </div>
        <div className='bg-slate-500 mt-10'>Links</div>
    </div>
  )
}

export default SmNavComponents