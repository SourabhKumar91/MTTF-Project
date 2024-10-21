import React from 'react';

function ContactUs() {
    return (
        <>
            <section className="bg-blue-50 bg-transparent " id="contact" >
                <div className="mx-auto max-w-7xl px-4 my-8  border-2 sm:px-6 lg:px-28  ">
                    <div className="">
                        <div className="mb-12  max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <h2 className="font-heading mb-4  mt-12 font-bold tracking-tight text-3xl sm:text-5xl font-serif">
                                Get in Touch
                            </h2>

                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2 ">
                            <div className="h-full pr-6  ">
                                <div className="mt-3  text-lg text-gray-600 dark:text-slate-400">
                                    <section className="font-bold">We're here to help you</section>
                                    <p className='mb-4 '>
                                    Our customer support team is available to help you 24/7
                                    </p>
                                </div>

                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 lg:text-2xl dark:text-white ">Address</h3>
                                            <p className="text-gray-600 dark:text-slate-400">
                                            SN #4 Divi St Fazilka-Abohar Road <br /> Near Bus Stand, PB,   <br />INDIA 152123</p>

                                        </div>
                                    </li>
                                    <li className="flex ">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2"></path>
                                                <path d="M15 3a6 6 0 0 1 6 6"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-6">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 lg:text-2xl dark:text-white"> Phone </h3>
                                            <p className="text-gray-600 dark:text-slate-400">
                                            +91-896-829-4003</p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <i className="fa-regular fa-envelope text-2xl"></i>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 lg:text-2xl dark:text-white">Email</h3>
                                            <p className="text-gray-600 dark:text-slate-400">
                                            contactus@mttf.in

                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12 " id="form">
                                <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input
                                                type="text"
                                                id="name"
                                                autoComplete="given-name"
                                                placeholder="Your name"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                name="name"
                                            />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <input
                                                type="email"
                                                id="email"
                                                autoComplete="email"
                                                placeholder="Your email address"
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                name="email"
                                            />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea
                                                id="textarea"
                                                name="textarea"
                                                cols="30"
                                                rows="5"
                                                placeholder="Write your message..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
