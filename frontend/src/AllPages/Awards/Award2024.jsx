
import React from 'react'
import Body from '../../components/Body/Body';
import Header from '../../AllPagesHeaders/CommenHeader/Header';
import award2024 from "../../assets/2024awards/EARG2024.jpg"
import awardTop from "../../assets/2024awards/awardTop.png"
function Award2024() {





  return (
    <>
      <Body>
        <Header
          imgsrc={ awardTop}

          title="IEARG Award 2024"
          description="The International EARG Awards 2024, organized by MTTF in association with Poornima Engineering College, Jaipur, took place on March 19, 2024, in Fazilka, India. Awards were presented across nine categories, including Lifetime Achievement in Academia and Research, Excellence in Academic Leadership, Research and Development, International Achievements, Innovation through Collaboration, Outstanding Faculty, Young Researcher, Young Entrepreneur, and Innovative Startup of the Year. "
        />
      </Body>

      <section class="px-6 py-10 bg-gray-100">
        <div className=' p-12'>
          <img src={award2024} alt="Award2024" className='shadow-md mb-5' />
        </div>
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-8">Gallery</h2>

        {/* <!-- Images Grid --> */}
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ">
          {/* <!-- Seven image placeholders --> */}
          <img src="image1.jpg" alt="Image 1" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image2.jpg" alt="Image 2" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image3.jpg" alt="Image 3" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image4.jpg" alt="Image 4" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image5.jpg" alt="Image 5" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image6.jpg" alt="Image 6" class="w-full h-40 object-cover rounded-md shadow-md" />
          <img src="image7.jpg" alt="Image 7" class="w-full h-40 object-cover rounded-md shadow-md" />
        </div>

        {/* <!-- Videos Grid --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <!-- Video 1 --> */}
          <div class="flex justify-center items-center mt-6">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/watch?v=hky36VUXAUc&t=237s"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            
          </div>


          {/* <!-- Video 2 --> */}
          <div class="flex justify-center items-center mt-6">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/hky36VUXAUc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            
          </div>
        </div>
      </section>



    </>
  )
}

export default Award2024