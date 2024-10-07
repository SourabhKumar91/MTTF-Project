import React from 'react';
import BodyHeader from './BodyHeader';
import ServiceSection from '../ServiceSection/ServiceSection';
import Cordinator from '../Cordinator/Cordinator';

function Body() {
  return (
    <div className='relative flex flex-col justify-between items-center text-center md:pt-10'>
      <div className='absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-gradient-header home-banner-height'
        style={{
          backgroundPosition: 'center center', 
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className='flex flex-col justify-center items-center w-full '>
        <BodyHeader />
        <ServiceSection />
        <Cordinator/>
      </div>
    </div>
  );
}

export default Body;
