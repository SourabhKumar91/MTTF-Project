import React from 'react';

function Card({image, name, description, membershipId, profileLink}) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4 text-center">
            <article className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={image}
                alt="image"
              />
              <div className="p-6">
                <h1 className="title-font text-2xl font-medium text-gray-900 mb-3">
                  {name}
                </h1>
                <p className="leading-relaxed mb-3">
                  {description}
                </p>

                <h1 className="text-lg mb-3">
                  <span className='font-medium'>Member ID:</span> {membershipId}
                </h1>
                <div className="flex items-center flex-wrap bg-indigo-400 mx-auto rounded-full w-52">
                  <a className="text-white mx-auto inline-flex items-center md:mb-2 lg:mb-0 py-2" href={profileLink}>
                    View Profile
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
