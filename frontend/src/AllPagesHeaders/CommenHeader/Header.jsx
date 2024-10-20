import React from 'react';

function Header({ title, description, imgsrc }) {
    return (
        <div className='flex  flex-col md:flex-row justify-center items-center gap-10 mt-36 md:mb-20 mb-12  text-[#FFFFFF]'>
            {/* Text Section */}
            <div className='flex-1 md:text-left text-center px-6  '>
                <h1 className='md:text-[3.9rem] text-4xl font-medium leading-none text-center'>
                   {title}
                </h1>
                <p className='text-center  md:mt-6 mt-4 text-[#F1F3F6]'>
                    {description}
                </p>
            </div>

            {/* Image Section */}
            <div className='flex-1 flex justify-center '>
                <img src={imgsrc} alt="" className='max-w-[50%] h-auto' />
            </div>
        </div>
    );
}

export default Header;
