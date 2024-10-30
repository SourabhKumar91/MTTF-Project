import React from 'react';
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';

function DataAnalyticsConsultancy() {
    const services = [
        { title: "Data Strategy Development", description: "Develop a clear data strategy aligned with business goals to drive informed decision-making." },
        { title: "Data Collection and Integration", description: "Streamline data from multiple sources to ensure data quality and accessibility." },
        { title: "Predictive Analytics", description: "Leverage predictive modeling to anticipate trends and enable proactive decisions." },
        { title: "Business Intelligence & Visualization", description: "Implement real-time data visualization for operational insights." },
        { title: "Data Governance", description: "Establish best practices for data quality, privacy, and compliance." },
        { title: "Advanced Analytics & Machine Learning", description: "Apply machine learning to gain deeper insights and enhance decision-making." },
        { title: "Risk Management Analytics", description: "Identify and mitigate potential risks with data-driven insights and predictive modeling." },
        { title: "Customer Insights & Segmentation", description: "Understand customer behaviors and preferences to enhance engagement and retention." },
        { title: "Supply Chain Optimization", description: "Optimize supply chain operations using analytics to reduce costs and improve efficiency." },
        { title: "Operational Efficiency", description: "Enhance efficiency across processes by identifying and addressing bottlenecks." }
    ];

    return (
        <>
         <Body>
                <Header
                    imgsrc="https://soothsayeranalytics.com/public/home/assets/img/data-science-image.png"
                    title="Data Analytics Consultancy Services"
                    description="Empowering businesses to unlock their full potential with data-driven strategies, analysis, and insights."
                />
            </Body>
            <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
                    <div className="text-left">
                        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-6xl">
                            Transform <span className="font-bold text-blue-500">Your Data</span> into Actionable Insights
                        </h2>
                        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Our data analytics consultancy offers a suite of services to help organizations harness data for strategic growth and improved efficiency.
                        </p>
                        <div className="mt-5 sm:flex md:mt-8">
                            <div className="rounded-md shadow">
                                <a href="/services"
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Get Started
                                </a>
                            </div>
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                                <a href="/contact"
                                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-blue-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-blue-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
                    <div className="relative w-full p-3 rounded md:p-8">
                        <div className="rounded-lg bg-white text-black w-full p-6">
                            <img src="https://cdn-icons-png.flaticon.com/512/4824/4824797.png" alt="Data Analytics Consultancy" className="rounded-md" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gray-100 py-12">
                <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
                    <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Consultancy Services</h3>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {services.map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12">
                <div className="max-w-screen-lg mx-auto px-6">
                    <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Us?</h3>
                    <p className="text-lg text-gray-600 text-center">
                        Our expertise, industry knowledge, and commitment to results help businesses uncover new opportunities and drive performance. We support organizations through every stage of their data journey, from strategy development to advanced analytics.
                    </p>
                    <div className="mt-8 text-center">
                        <a href="/about" className="text-blue-500 hover:text-blue-700 underline">
                            Learn More About Our Approach
                        </a>
                    </div>
                </div>
            </section>

        </>
    );
}

function ServiceCard({ title, description }) {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-xs p-6 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="mt-4 text-gray-600">{description}</p>
        </div>
    );
}

export default DataAnalyticsConsultancy;
