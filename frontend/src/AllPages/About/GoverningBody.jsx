import React from 'react';
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';
import GoverningBodyCard from '../../components/GoverningBodyCard/GoverningBodyCard';
import meher from "../../assets/GovermentBodyImage/meher.jpg"
import pooja from "../../assets/GovermentBodyImage/pooja.jpg";
import jasswinder from "../../assets/GovermentBodyImage/jasswinder.jpeg";
import shalu from "../../assets/GovermentBodyImage/shalu.jpg";
import upinder from "../../assets/GovermentBodyImage/upinder.jpg";
import yogita from "../../assets/GovermentBodyImage/yogita.jpg";
import Madhuchand from "../../assets/GovermentBodyImage/Madhuchand.jpg";
import gurmeet from "../../assets/GovermentBodyImage/gurmeet.jpg";
import bharti from "../../assets/GovermentBodyImage/bharti.png";
import biswaranjan from "../../assets/GovermentBodyImage/biswaranjan.jpg";
import jatin from "../../assets/GovermentBodyImage/jatin.jpeg";
import daljeet from "../../assets/GovermentBodyImage/daljeet.jpg";
import AdvisoryCommittee from './AdvisoryCommittee';

function GoverningBody() {
    const governingBody = [
        { name: "Mehar Chand, Ph.D", position: "Founder & President (MTTF, India)", memberId: "MTTF5575130", img: meher },
        { name: "Gurmej Singh Sandhu, Ph.D", position: "General Secretary (MTTF, India)", memberId: "MTTF2017073", img: gurmeet },
        { name: "Jaswinder Pal, Ph.D", position: "Director of Accounts (MTTF, India)", memberId: "MTTF6104175", img: jasswinder },
        { name: "Biswaranjan Senapati, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF19596466", img: biswaranjan },
        { name: "Pooja, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF20102922", img: pooja },
        { name: "Bharti Kapoor, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF6547519", img: bharti },
        { name: "Madhuchanda Rakshit, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF7597798", img: Madhuchand },
        { name: "Yogita Shama, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF000000", img: yogita },
        { name: "Upinder Kaur, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF9928796", img: upinder },
        { name: "Shalu Gupta, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF367784", img: shalu },
        { name: "Daljeet Kaur, Ph.D", position: "Executive Member (MTTF, India)", memberId: "MTTF19568242", img: daljeet },
        { name: "Jatin Bansal, JRF", position: "Executive Member (MTTF, India)", memberId: "MTTF19541982", img: jatin }
    ];

    return (
        <>
            <Body>
                <Header
                    imgsrc="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.d0b31569.png&w=640&q=75"

                    title="Our Visionary Leaders"
                    description="Meet the dedicated leaders of the MathTech Thinking Foundation (MTTF), whose passion, expertise, and commitment drive our mission forward. Our team of esteemed scholars, educators, and industry professionals brings together a wealth of knowledge and experience to inspire innovative solutions and educational advancements. Through their guidance, MTTF continues to empower individuals, foster academic growth, and promote technological excellence. Discover the visionaries who shape our foundation and contribute to a brighter, more inclusive future in mathematics and technology"
                />
            </Body>

            {/* governingBody.................. */}
            <div className="flex flex-col bg-slate-300 md:p-8 pt-24">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        The Governing Body
                    </h1>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                        The MathTech Thinking Foundation (referred to in short as MTTF or the
                        Foundation) is governed by the board of directors of the foundation and
                        the Executive Members. The board of directors includes three office-bearers of the foundation. These honourary office bearers are:
                    </p>
                </div>
                <div className="flex flex-wrap justify-center px-4">
                    {governingBody.map((member) => (
                        <div key={member.memberId} className=" w-full md:w-[50%] lg:w-[30%] mt-12 ">
                            <GoverningBodyCard member={member} />
                        </div>
                    ))}
                </div>
            </div>
                
            {/* advisorcomittee.................. */}
            <AdvisoryCommittee/>
        </>
    );
}

export default GoverningBody;
