import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Body from '../../Body/Body';
import Header from '../../../AllPagesHeaders/CommenHeader/Header';
import Footer from '../../Footer/Footer';

function AdvisoryCommittee() {
    return (
        <>
            <Navbar />
            <Body>
                <Header
                    imgsrc="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.d0b31569.png&w=640&q=75"

                    title="Advisory Committee"
                    description="A nonprofit advisory committee is responsible for performing tasks outside of the usual purview of the nonprofit board itself. The foundation (MTTF) has established an advisory committee to give the nonprofit organization specialized information, experience, and skills, so that the organization is able to achieve its mission. The following are the members of advisory committee. "
                />
            </Body>
            <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div class="text-left">
                        <h2
                            class="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Mehar Chand
                            <span class="font-bold text-blue-500"> Ph.D</span>
                        </h2>
                        <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Department of Mathematics, Baba Farid College, Deon-Bathinda, India
                        Verified email at babafaridgroup.edu.in
                        </p>
                        <p className=' text-xl md:2xl  lg:3xl mt-3  font-medium'>Founder & President (MTTF, India)</p>
                        <p className=' mt-3'><span className='   text-xl md:2xl  lg:3xl  font-medium'>Member ID:</span> MTTF5575130</p>
                        <div class="mt-5 sm:flex md:mt-8">
                            <div class="rounded-md shadow"><a href=""
                                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                Getting started
                            </a></div>
                            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href=""
                                    class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Contribute
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div class="relative w-full p-3 rounded  md:p-8">
                        <div class="rounded-lg bg-white text-black w-full p-28">
                            <img src="https://www.mttf.in/wp-content/uploads/2021/08/1.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdvisoryCommittee