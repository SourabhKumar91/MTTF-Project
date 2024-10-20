import React from 'react'
import ServicesCard from './ServiceCard'
import growthImg from "../../assets/ServiceImages/growth.gif"
import levelup from "../../assets/ServiceImages/levelup.gif"
import internship from "../../assets/ServiceImages/internship.gif"
import webinar from "../../assets/ServiceImages/Protection1.gif"
import growthImgstatic from "../../assets/ServiceImages/growthstatic.png"
import levelupstatic from "../../assets/ServiceImages/levelupstatic.png"
import internshipstatic from "../../assets/ServiceImages/internshipstatic.png"
import webinarstatic from "../../assets/ServiceImages/protectionstatic.png"
import cirtificate from "../../assets/ServiceImages/certificate-icon.gif"
import ok from "../../assets/ServiceImages/ok.gif"

function ServiceSection() {

    const servicesDetail = [
        {
            number: "01",
            title: "Empowering Growth with Training",
            discription: "Training It provides training, which refers to the teaching and learning activities carried on for the primary purpose of helping members of an organization acquire and apply the knowledge, skills, abilities, and attitudes needed by a particular job and organization for STEM professionals.",
            giflogo: growthImg,
            staticLogo: growthImgstatic
        },
        {
            number: "02",
            title: "Professional Certificate Program",
            discription: "Certification demonstrates your commitment to superior professionalism, upholding industry standards, and continued learning. A certificate can help ease that transition, making you feel more prepared, confident, and qualified to pursue new career opportunities.",
            giflogo: cirtificate,
            staticLogo: cirtificate
        },
        {
            number: "03",
            title: "Skill Development Workshops",
            discription: "It organizes workshops for STEM professionals on a particular subject, to learn new projects, techniques and methods. Ensuring a proper flow of knowledge, Workshops assist in passionate interaction and active participation boosting the skills and expertise of STEM professionals.",
            giflogo: levelup,
            staticLogo: levelupstatic
        },
        {
            number: "04",
            title: "Exciting Internship Opportunities",
            discription: "MTTF opens internships for Indian students in the area of Digital Marketing, CRM, Web-development, Graphic Designing, Content writing, Data-Analysis, Research Associates, Project Associates, etc. Applications are invited through the Internship AICTE-India portal",
            giflogo: internship,
            staticLogo: internshipstatic
        },

        {
            number: "05",
            title: "Joint event",
            discription: "Collaborations are befitted in sharing expertise, saving time and money, reducing the workload, increasing productivity, and problem-solving. To organize a collaborative program/event, you are always welcome at MathTechGuru.",
            giflogo: ok,
            staticLogo: ok
        },
        {
            number: "06",
            title: "Online interactive learning sessions",
            discription: "It provides a platform for STEM professionals to organize webinars. Embracing the ecosystem way, these gatherings will provide a space and time for STEM leaders to share common challenges, ideas, and resources.",
            giflogo: webinar,
            staticLogo: webinarstatic
        },


    ]

    return (
        <>



            <div className='bg-gradient-to-r mb-10 from-blue-50 via-white to-indigo-100 p-4 pb-24 w-full min-h-[400px] flex flex-wrap justify-center bg-[#f8f9fe] '>
                <h1 className=' font-serif  text-2xl text-center lg:text-4xl mb-8 mt-11 font-semibold'>Our Professional Services for Every Requirement</h1>

                {servicesDetail.map((service, index) => (
                    <ServicesCard
                        key={index}
                        Number={service.number}
                        title={service.title}
                        discription={service.discription}
                        logoGif={service.giflogo}
                        logoStatic={service.staticLogo} />
                ))}
            </div>

        </>
    )
}

export default ServiceSection