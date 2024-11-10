import React from 'react';
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';

function AdvisoryCommittee() {
    return (
        <>
            <div className="flex flex-col bg-slate-300 p-6 md:p-10 lg:p-14">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Advisory Committee
                    </h1>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        A nonprofit advisory committee is responsible for performing tasks outside of the usual purview of the nonprofit board itself. The foundation (MTTF) has established an advisory committee to give the nonprofit organization specialized information, experience, and skills, so that the organization is able to achieve its mission. The following are the members of advisory committee.
                    </p>
                </div>
                <div className="flex flex-col  items-center rounded-lg shadow-lg px-6 py-10 mx-auto md:flex-row md:py-12 md:px-8 lg:px-12  w-full">
                    <div className="flex flex-col items-start justify-between text-left space-y-6 md:w-1/2 p-4 md:p-6 lg:p-8">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl md:text-5xl">
                            Mehar Chand <span className="font-bold text-blue-500">Ph.D</span>
                        </h2>
                        <p className="text-base text-gray-500 sm:text-lg md:text-xl max-w-md">
                            Department of Mathematics, Baba Farid College, Deon-Bathinda, India
                            Verified email at babafaridgroup.edu.in
                        </p>
                        <p className="text-xl font-medium">Founder & President (MTTF, India)</p>
                        <p className="text-xl font-medium">
                            <span>Member ID:</span> MTTF5575130
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <a
                                href=""
                                className="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 md:py-4 md:px-8"
                            >
                                Getting started
                            </a>
                            <a
                                href=""
                                className="flex items-center justify-center px-6 py-3 text-base font-medium text-blue-500 bg-white border border-gray-300 rounded-md hover:text-blue-600 md:py-4 md:px-8"
                            >
                                Contribute
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-full md:w-1/2 mt-6 md:mt-0">
                        <div className="w-full max-w-sm p-4 md:p-6 lg:p-8">
                            <img
                                src="https://www.mttf.in/wp-content/uploads/2021/08/1.jpg"
                                alt="Mehar Chand"
                                className="rounded-lg shadow-md w-full h-64 object-cover md:h-80 lg:h-96"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdvisoryCommittee;
