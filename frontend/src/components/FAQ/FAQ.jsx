import React from 'react';

const FAQ = ({faqs}) => {
   

    return (
        <section className="p-6  rounded-lg shadow-md">
            <div className="space-y-4 lg:w-[80%]   mx-auto mt-8">
            <h2 className="text-3xl font-bold mb-8 ">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold">{index+1}. {faq.question}</h3>
                        <p className="mt-2 text-gray-700">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
