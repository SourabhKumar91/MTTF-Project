import React from 'react'
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';

function InstitutionalMembership() {
    return (
        <>
            <Body>
                <Header
                    imgsrc="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.d0b31569.png&w=640&q=75"

                    title={<p classNameName='text-[50px]'>Institutional Membership</p>}

                    description={<p classNameName='text-3xl'>MathTech Thinking Foundation (MTTF) Institutional Membership</p>}
                />
            </Body>

            <section className="max-w-6xl mx-auto px-4 py-10 bg-gray-50 rounded-lg shadow-lg">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Institutional Membership with MTTF</h2>
                <p className="text-lg text-gray-700 mb-8 text-center">
                    Joining MTTF provides organizations with the tools and opportunities needed to drive innovation, foster professional development, and contribute significantly to the global STEM community. Be a part of a prestigious network dedicated to advancing science, technology, engineering, and mathematics.
                </p>

                {/* <!-- Benefits Section --> */}
                <div className="space-y-10">
                    <h3 className="text-3xl font-semibold text-gray-800 text-center mb-4">Benefits of Institutional Membership</h3>
                    <div className="mt-4 border-l-4 border-blue-500 pl-4 space-y-8">

                        {/* <!-- Access to Resources --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Access to Resources:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Journals and Publications:</strong> Gain unlimited access to a vast array of scholarly journals, publications, and databases, providing valuable research materials to support academic and scientific endeavors.</li>
                                <li><strong>Educational Materials:</strong> Benefit from comprehensive access to a variety of educational resources, including webinars, online courses, and training modules, designed to enhance learning and skill development.</li>
                            </ul>
                        </div>

                        {/* <!-- Professional Development --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Professional Development:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Workshops and Conferences:</strong> Enjoy discounted or complimentary registration for MTTF-organized workshops, conferences, and seminars, ensuring that your institution stays updated on the latest advancements and trends in STEM.</li>
                                <li><strong>Certification Programs:</strong> Access certification and credentialing programs that enhance the qualifications and expertise of your staff members.</li>
                            </ul>
                        </div>

                        {/* <!-- Networking Opportunities --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Networking Opportunities:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Events and Meetups:</strong> Receive invitations to exclusive networking events, regional meetups, and forums, providing opportunities to connect with peers, industry leaders, and experts in STEM fields.</li>
                                <li><strong>Special Interest Groups:</strong> Participate in special interest groups or committees that align with your institution’s focus areas, fostering targeted discussions and collaborations.</li>
                            </ul>
                        </div>

                        {/* <!-- Collaboration and Partnerships --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Collaboration and Partnerships:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Research Collaborations:</strong> Engage in collaborative research projects with other member institutions, gaining access to funding opportunities and grants to support innovative research.</li>
                                <li><strong>Industry Partnerships:</strong> Establish partnerships with industry leaders for internships, joint ventures, and knowledge exchange, bridging the gap between academia and industry.</li>
                            </ul>
                        </div>

                        {/* <!-- Recognition and Awards --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Recognition and Awards:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Institutional Awards:</strong> Become eligible for institutional awards and recognition, celebrating and honoring your institution’s contributions to the STEM community and beyond.</li>
                                <li><strong>Member Achievements:</strong> Highlight the individual and collective achievements of your institution’s members in MTTF publications and at events, showcasing your institution’s excellence.</li>
                            </ul>
                        </div>

                        {/* <!-- Community Engagement --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Community Engagement:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Outreach Programs:</strong> Participate in outreach and community engagement programs aimed at promoting STEM education and raising awareness about the importance of STEM in society.</li>
                                <li><strong>Mentorship Opportunities:</strong> Engage in mentorship programs, offering both mentoring and mentee opportunities to support the professional growth of your staff and students.</li>
                            </ul>
                        </div>

                        {/* <!-- Exclusive Member Benefits --> */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-blue-600">Exclusive Member Benefits:</h4>
                            <ul className="list-disc list-inside ml-6 text-gray-700 space-y-2">
                                <li><strong>Customized Training:</strong> Access tailored training programs and workshops specifically designed to meet the unique needs and goals of your institution.</li>
                                <li><strong>Institutional Representation:</strong> Gain representation in MTTF’s governance and decision-making processes, giving your institution a voice in shaping the policies and initiatives of the foundation.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-blue-50 to-white p-10 px-4 md:px-10 lg:px-20 rounded-lg shadow-md mx-auto mt-12">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Institutional Membership Fee</h2>
                <p className="text-gray-800 text-center mb-10  lg:mx-40 leading-relaxed">
                    The MathTech Thinking Foundation (MTTF) offers a tiered membership fee structure to accommodate institutions of varying sizes and needs. The membership fees are as follows:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Small Institutions</h3>
                        <p className="text-gray-600 text-sm mb-1">(up to 100 members)</p>
                        <p className="text-lg font-bold text-blue-900">Annual Fee: INR 50,000</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Medium Institutions</h3>
                        <p className="text-gray-600 text-sm mb-1">(101 to 500 members)</p>
                        <p className="text-lg font-bold text-blue-900">Annual Fee: INR 100,000</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-2xl">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Large Institutions</h3>
                        <p className="text-gray-600 text-sm mb-1">(over 500 members)</p>
                        <p className="text-lg font-bold text-blue-900">Annual Fee: INR 200,000</p>
                    </div>
                </div>

                <p className="text-gray-800 text-center mt-12 leading-relaxed">
                    These fees provide institutions with comprehensive access to MTTF’s resources, professional development programs, and networking opportunities, ensuring that all members can benefit from the extensive offerings of the foundation.
                </p>
            </section>

        </>
    )
}

export default InstitutionalMembership