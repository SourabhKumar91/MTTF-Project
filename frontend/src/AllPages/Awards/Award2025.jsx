

import React from 'react'
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';

function Award2025() {
    return (
        <>
            <Body>
                <Header
                    imgsrc="https://png.pngtree.com/png-clipart/20221216/original/pngtree-golden-medal-award-premium-badge-vector-on-transparent-background-png-image_8750546.png"

                    title="IEARG Award 2025"
                    description="The Awards 2025 will be held on National Science Day, observed every year on 28 February to commemorate the discovery of the Raman effect by the esteemed Indian physicist Sir C. V. Raman on 28 February 1928. This event, in partnership with Sharda University, India, honors remarkable achievements in a variety of fields, with a total prize fund of 500,000 INR awarded across several categories."
                />
            </Body>
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2
                            className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Mehar Chand
                            <span className="font-bold text-blue-500"> Ph.D</span>
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Department of Mathematics, Baba Farid College, Deon-Bathinda, India
                        Verified email at babafaridgroup.edu.in
                        </p>
                        <p classNameName=' text-xl md:2xl  lg:3xl mt-3  font-medium'>Founder & President (MTTF, India)</p>
                        <p classNameName=' mt-3'><span classNameName='   text-xl md:2xl  lg:3xl  font-medium'>Member ID:</span> MTTF5575130</p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow"><a href=""
                                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                Getting started
                            </a></div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href=""
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Contribute
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded  md:p-8">
                        <div className="rounded-lg bg-white text-black w-full p-28">
                            <img src="https://www.mttf.in/wp-content/uploads/2021/08/1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Award2025