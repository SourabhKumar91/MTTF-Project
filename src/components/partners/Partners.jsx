import React from 'react'
import { partners } from '../../assets/partners/partners'

function Partners() {
  return (
    <div className='mt-6 flex justify-center items-center mb-6 flex-col'>
        <h1 className='text-4xl font-medium color'>Our Partners</h1>
        <div className='border flex flex-wrap gap-2 md:pl-10 mt-16 justify-center items-center border-none'>
            {partners.map((partner, index) => (
                index > 2 ? (
                    <div key={index} className=' mx-12'>
                        <img src={partner.src} alt={partner.alt} className="w-32 h-auto inline-block" />
                    </div>
                ) : (
                    <div key={index} className='md:w-[25%] mx-10'>
                        <img src={partner.src} alt={partner.alt} className="w-full h-32 md:mx-10 inline-block" />
                    </div>
                )
            ))}
        </div>
    </div>
  )
}

export default Partners
