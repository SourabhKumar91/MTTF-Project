import React from 'react'
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';
import { useState } from 'react';
import awards from '../../assets/awards.png'

function Award2025() {

    const buttons = [
        "IEARG Award 2025",
        "Why IEARG Awards?",
        "Objectives And Benefits",
        "Categories And Eligibility",
        "Panel Of Judges",
        "Important Dates",
        "How To Apply?",
        "Call For Nomination",
        "Registration Fee"
    ];

    const [show, setShow] = useState({
        IEARGAward2025: true,
        WhyIEARGAwards: false,
        ObjectivesAndBenefits: false,
        CategoriesAndEligibility: false,
        PanelOfJudges: false,
        ImportantDates: false,
        HowToApply: false,
        CallForNomination: false,
        RegistrationFee: false,
    });

    const handleBtn = (btnName) => {
        setShow({
            IEARGAward2025: btnName === "IEARG Award 2025",
            WhyIEARGAwards: btnName === "Why IEARG Awards?",
            ObjectivesAndBenefits: btnName === "Objectives And Benefits",
            CategoriesAndEligibility: btnName === "Categories And Eligibility",
            PanelOfJudges: btnName === "Panel Of Judges",
            ImportantDates: btnName === "Important Dates",
            HowToApply: btnName === "How To Apply?",
            CallForNomination: btnName === "Call For Nomination",
            RegistrationFee: btnName === "Registration Fee",
        });

    };


    return (
        <>
            <Body>
                <Header
                    imgsrc={awards}

                    title="IEARG Award 2025"
                    description="The Awards 2025 will be held on National Science Day, observed every year on 28 February to commemorate the discovery of the Raman effect by the esteemed Indian physicist Sir C. V. Raman on 28 February 1928. This event, in partnership with Sharda University, India, honors remarkable achievements in a variety of fields, with a total prize fund of 500,000 INR awarded across several categories."
                />
            </Body>

        

        </>
    )
}

export default Award2025