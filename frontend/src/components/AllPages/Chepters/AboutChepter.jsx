
import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Body from '../../Body/Body';
import Header from '../../../AllPagesHeaders/CommenHeader/Header';
import Footer from '../../Footer/Footer';
import List from '../../List/List';

function AboutChepter() {

  const mttfStudentChapterRequirements = [
    "The Institution must have at least 150 student regular members of MTTF",
    "Student Regular membership free for the session 2022-23",
    "The Institution must have two or more MTTF-lifetime members",
    "Membership is open to all departments of the academic Institution/University",
    "Institute will appoint at least one coordinator for the smooth functioning of the chapter",
    "Student chapter consists of a President, Vice-President, Secretary, Treasurer and committee members",
    "The chapter President must submit an annual report every year",
    "MTTF Student Chapters provide unique opportunities to learn and develop leadership skills, research development, networking, mentoring and bonding",
    "Conference/Seminar hall or Auditorium",
    "Guest /Keynote Speaker",
    "Accommodation & Hospitality",
    "Internal committee members must be formed from the institution"
  ];

  return (
    <>
      <Navbar />
      <Body>
        <Header
          imgsrc="https://www.mttf.in/wp-content/uploads/2021/06/coding-isometric-01.png"

          title="Student Chapters"
          description="Students pursuing their graduate and post graduate in Science, Technology, Engineering, & Mathematics can apply for MTTF student membership. MTTF encourages and supports students by appointing its members to provide necessary guidance to build and globalize their innovative ideas.

"
        />
      </Body>


      <section class="bg-gray-100 py-10 px-5 md:px-20 lg:px-40">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6">MTTF Student Chapter</h2>
          <p class="text-gray-700 text-md md:text-lg leading-relaxed mb-6">
            The MTTF Student Chapter is a scientific association of students with a minimum of 150 members from a particular institute or university. This chapter provides unique opportunities for learning and developing leadership skills, management, teamwork, research development, networking, mentoring, and bonding.
          </p>
          <p class="text-gray-700 text-md md:text-lg leading-relaxed mb-6">
            To establish a student chapter, the hosting institute, university, or college must submit a petition to our head office. This initiative aims to promote education and research in STEM fields by offering students a platform to share ideas and enthusiasm with fellow students and faculty from any relevant department on campus.
          </p>
          <p class="text-gray-700 text-md md:text-lg font-semibold">Science, Technology, Engineering, & Mathematics</p>
          <button class="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transform transition-transform duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>



      <section class="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16 px-5 md:px-20 lg:px-40">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Text Content --> */}
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-4 border-gray-800 border-b-4">Student Chapter Member Benefits</h2>
            <ul class="text-gray-700 text-md md:text-lg leading-relaxed mb-6 list-disc ml-5 space-y-3">
              <li>Explore career opportunities</li>
              <li>Make contacts that will last a lifetime</li>
              <li>Develop leadership skills</li>
              <li>Networking with professionals, speakers, and mentors</li>
              <li>Support within the student and local communities</li>
            </ul>
            <p class="text-gray-700 text-md md:text-lg mb-6">
              MTTF Student Chapter Members can avail the MTTF Student Membership Benefits.
            </p>
            <p class="text-gray-700 text-md md:text-lg font-semibold mb-8">
              Feel free to contact us regarding the student chapter at
              <a href="mailto:contactus@mttf.in" class="text-blue-600 underline hover:text-blue-800">contactus@mttf.in</a>
            </p>
            <button class="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2">
              Contact Us
            </button>
          </div>

          {/* <!-- Image --> */}
          <div class="flex justify-center md:justify-end">
            <img src="https://www.mttf.in/wp-content/uploads/2021/06/coding-isometric-02.png" alt="Student Chapter" class="w-full max-w-md rounded-lg " />
          </div>
        </div>
      </section>

      <section class="bg-gradient-to-r bg-white py-16 px-5 md:px-20 lg:px-40">
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* <!-- Image --> */}
          <div class="flex ">
            <img src="https://www.mttf.in/wp-content/uploads/2022/05/mathmatisdeveploer.png" alt="Student Chapter" class="w-full max-w-md rounded-lg " />
          </div>

          {/* <!-- Text Content --> */}
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-blue-800 mb-6 pb-4 border-gray-800 border-b-4">Responsibilities of the Institution for establishing MTTF Student Chapter</h2>
            <ul class="text-gray-700 text-md md:text-lg leading-relaxed mb-6 list-disc ml-5 space-y-3">
              <List items={mttfStudentChapterRequirements} textClass="text-gray-700 text-medium " />
            </ul>

          </div>


        </div>
      </section>


      <Footer />
    </>
  )
}

export default AboutChepter