import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeHeader from "../../AllPagesHeaders/HomeHeader";

function Body({ children }) {
  const location = useLocation();

  return (
    <div className='relative flex flex-col justify-between items-center text-center md:pt-10'>
      <div className={`absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gradient-header  ${location.pathname === '/' ? "home-banner-height" : "" }`}
        style={{
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      <div className='flex flex-col justify-center items-center w-full '>
        {location.pathname === '/' && <HomeHeader />}
        
        {children}
      </div>
    </div>
  );
}

export default Body;
