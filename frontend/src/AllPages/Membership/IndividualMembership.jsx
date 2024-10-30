import React from 'react'
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';
import List from '../../components/List/List';
import membership from '../../assets/membership.png'
import FAQ from "../../components/FAQ/FAQ"


function IndividualMembership() {
    const benefits = [
        "Networking: MTTF provides a platform to connect with a diverse community of Science, Technology, Engineering, and Mathematics (STEM) professionals from around the world. This fosters valuable connections and collaborations with like-minded individuals.",
        "Professional Development: Members have access to conferences, workshops, and faculty development programs organized by MTTF, which offer opportunities to expand knowledge, learn about cutting-edge research, and stay updated on the latest advancements in various STEM fields.",
        "Knowledge Sharing: MTTF encourages the exchange of ideas and information among members, promoting a culture of learning and innovation. You can gain insights from experts in your field and share your own expertise with others.",
        "Recognition and Awards: Outstanding contributions to STEM are acknowledged and celebrated within MTTF, providing recognition and honor for exceptional achievements.",
        "Engaging Activities: Members can participate in various activities and events organized by MTTF Societies, tailored to different STEM disciplines, further enhancing engagement and involvement.",
        "Research Support: MTTF may offer technical support or sponsor events related to research and development, aiding members in their pursuit of innovative projects.",
        "Collaboration Opportunities: Being part of MTTF opens doors to potential collaborations with industry leaders, researchers, and academics, leading to fruitful partnerships and joint ventures.",
        "Community of Support: MTTF strives to create a welcoming and supportive environment for all its members, fostering a sense of belonging and camaraderie within the STEM community.",
        "Access to Resources: MTTF may provide access to exclusive resources, publications, and databases, enabling members to access valuable research materials and information.",
        "Career Advancement: Membership in MTTF can bolster your professional profile and open up new career opportunities through exposure to a global network of STEM professionals and organizations."
    ];

    const faqs = [
        {
            question: "How to register for Lifetime Membership?",
            answer:  (
                <p>
                    First click on become a member icon, fill in the required and authentic details in the registration form and submit it. After submition, you will receive an email to activate your account. After successful activation of your account, you will get your Member ID on your email address. <br /> <br />Further, registered members can join at most three MTTF-Societies of your interest. To join these societies, you need to log in your account, then go to MTTF-Societies and submit the details.
                </p>

            )
        },
        {
            question: "When will the lifetime membership certificate for new registered members be provided?",
            answer: "The lifetime membership certificate for new registered members will be issued in the first week of each month."
        },
        {
            question: "What should I do if an old member did not receive their certificate?",
            answer: (
                <span>
                    If any old member has not received their certificate, please provide your Member ID via WhatsApp or email us at 
                    <span className="text-blue-500 text-lg"> lifetimemember@mttf.in</span>.
                </span>
            )
        }
    ];
    
    return (
        <>
        
            <Body>
                <Header
                    imgsrc={membership}

                    title="Become a Member"
                    description="The lifetime membership fee for Indians is 2000 INR and for international members is 200 USD. An invoice link will be sent after registration."

                    button="BECOME A MEMBER"
                />
            </Body>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-5 font-medium text-gray-900">Why should you join us?
                            <br class="hidden lg:inline-block" />
                        </h1>
                        <p class="mb-8 lg:text-xl   font-sans  font-medium leading-10  ">MTTF invites all professionals in Science, Technology, Engineering, and Mathematics to join our community. MTTF Societies encompass fields like engineering, mathematics, science, and computer science, organizing key events such as conferences, workshops, training, internships, and faculty development programs. These gatherings create valuable opportunities for networking, knowledge-sharing, and collaborative problem-solving. MTTF Society committee members also play an active role in planning and organizing activities, contributing to a vibrant professional community.</p>
                        <div class="flex justify-center">
                            <button class="ml-8 inline-flex text-xl  text-blue-600 font-medium py-2 px-6 focus:outline-none bg-gray-200 rounded ">Learn More...</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded  shadow-[#00000062] shadow-xl" alt="hero" src="https://www.mttf.in/wp-content/uploads/2023/04/316000397_5653660711354580_5399085255215049303_n.jpg" />
                    </div>
                </div>
            </section>
            
            <section className="p-6 bg-slate-600  flex justify-center items-center">
               <div className=' lg:w-[80%] text-white my-12'>
               <h2 className="text-4xl font-bold mb-6  ">Benefits of Joining MTTF</h2>
                <p className="mb-6">
                As a member of MTTF, you gain access to a wide array of benefits designed to enhance your professional growth and networking opportunities. Some of the key member benefits at MTTF include:
                </p>
                <List items={benefits} />
               </div>
            </section>

            <section class="bg-gray-100 py-12 px-6 md:px-12">
                <div class="max-w-4xl mx-auto text-center ">

                    <h2 class="text-3xl font-bold text-gray-800 mb-4 ">Lifetime Membership Fee</h2>


                    <p class="text-gray-600 mb-8">
                        New Members, who registered on 1/1/2022 onwards have to pay their membership fee within the current month after registration. After fee confirmation, a membership certificate will be sent through a registered email address. The lifetime membership fee for Indians is 2000 INR and for international members is 200 USD. Interested candidates from most underdeveloped countries i.e. ERITREA, GUINEA, MADAGASCAR, NIGERIA, ETHIOPIA, MALAWI, SIERRA LEONE, LIBERIA, CONGO, BURUNDI need to pay only 100 USD. An invoice link will be sent after registration.
                    </p>


                    <div class="flex justify-center gap-8">
                        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                            ₹2000 for India
                        </button>
                        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
                            $ 200 for International
                        </button>
                    </div>
                </div>
            </section>
            <FAQ faqs={faqs}
            />
            

        </>
    )
}

export default IndividualMembership