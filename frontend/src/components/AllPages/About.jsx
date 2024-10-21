import React from 'react'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../../AllPagesHeaders/CommenHeader/Header'


function About() {
  return (
    <>

      <Navbar />
      <Body>
        <Header
          imgsrc="https://www.egniol.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheader.d0b31569.png&w=640&q=75"

          title="WE ARE MTTF"
          description="The MathTech Thinking Foundation (MTTF) is registered under Section 8 of the Companies Act 2013, Ministry of Corporate Affairs, Government of India."

        />
      </Body>
      <section class="bg-gray-100 ">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="max-w-lg">
              <h2 class="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
              <p class="mt-4 text-gray-600 text-center text-lg">The MathTech Thinking Foundation (MTTF) is registered under Section 8 of the Companies Act 2013, Ministry of Corporate Affairs, Government of India. <br /> <br />
                MTTF represents the International Scientific Association of esteemed experts in Science, Technology, Engineering, and Mathematics (STEM). Its membership includes distinguished individuals such as Research and Development Center Heads, Faculty Deans, Department Heads, Professors, Research Scientists, Engineers, Scholars, and University Postgraduate and Undergraduate Engineering and Technology Students, among others.</p>
            </div>
            <div class="mt-12 md:mt-0 ">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md" />
            </div>
          </div>
          <div class="mt-8 w-full">
            <p>
            MTTF holds a prominent and influential position in driving progress in STEM fields through a range of initiatives and efforts. <br /> <br />
            MTTF takes the initiative to organize Conferences, Workshops, Symposiums, Faculty Development Programs, and training sessions. Additionally, it offers sponsorship or technical support for these events. The association actively encourages regional and international communication and collaboration among its members, fostering professional interaction and lifelong learning. Furthermore, it acknowledges and honors exceptional contributions made by individuals and organizations in the STEM field. <br /> <br />

            One of MTTF’s core objectives is to create a welcoming and supportive environment for everyone involved. Benefits of being associated with MTTF include the opportunity to meet and collaborate with fellow STEM professionals, both new acquaintances and familiar faces. <br /><br />
            MTTF is fully dedicated to building a community based on respect, collegiality, and sensitivity.
            </p>
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

export default About