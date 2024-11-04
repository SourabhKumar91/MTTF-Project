import React from 'react';
import "../../styles/styles.css";

function Footer() {
    const ourCompanyLink = ["About", "Mission and Vision", "Leadership and Advisory", "Life and MTTF", "Governing Body", "MoU/Collaboration"];
    const servicesLink = ["International & National Conference", "Workshops", "Skill Development Program", "Online Internship Training"];
    const importantLink = ["Certificate", "Terms & Conditions"];
    const contact = ["contactus@mttf.in", "+91-896-829-4003"];

    return (
        <>
            <footer className="text-gray-300 body-font bg-gradient-to-r from-[#283853] to-gray-900 border-t-4 overflow-x-hidden">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        {/* Our Company Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-xl text-white tracking-widest mb-4">Our Company</h2>
                            <nav className="list-none mb-10">
                                {ourCompanyLink.map((link, index) => (
                                    <li key={index} className='mt-3'>
                                        <a className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>

                        {/* Services Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-xl text-white tracking-widest mb-4">Services</h2>
                            <nav className="list-none mb-10">
                                {servicesLink.map((link, index) => (
                                    <li key={index} className='mt-3'>
                                        <a className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>

                        {/* Important Links */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-xl text-white tracking-widest mb-4">Important Links</h2>
                            <nav className="list-none mb-10">
                                {importantLink.map((link, index) => (
                                    <li key={index} className='mt-3'>
                                        <a className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Us */}
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-semibold text-xl text-white tracking-widest mb-4">Contact Us</h2>
                            <nav className="list-none mb-10">
                                {contact.map((link, index) => (
                                    <li key={index} className='mt-3'>
                                        <a className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
                        <p className="text-gray-400 text-sm text-center sm:text-left">© 2024 MTTF —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start space-x-4">
                            <a className="text-gray-400 hover:text-white transition duration-300" aria-label="Facebook">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 hover:text-white transition duration-300" aria-label="Twitter">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 hover:text-white transition duration-300" aria-label="Instagram">
                                <svg fill="none" stroke="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 hover:text-white transition duration-300" aria-label="LinkedIn">
                                <svg fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
