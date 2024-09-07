// import React from 'react';

// function Card({image, name, description, membershipId, profileLink}) {
//   return (
//     <section class="text-gray-600 body-font  ">
//       <div class="container px-5 py-24 mx-auto ">
//         <div class="flex flex-wrap -m-4">
//           <div className="p-4 md:w-1/4 text-center">
//             <article className="h-full border-2 hover:shadow-lg transition-shadow duration-300 hover:shadow-[#917e70] border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//               <img
//                 className="lg:h-48 md:h-36 w-full object-cover object-center p-2"
//                 src={image}
//                 alt="blog"
//               />
//               <div className="p-6">
//                 <i className=" text-lg me-2  text-[#DC5F00] fa-solid fa-sun"></i>
//                 <span className="title-font text-2xl font-medium text-gray-900 mb-3">
//                   {name}
//                 </span>
//                 <p className="leading-relaxed mb-3">
//                   {description}
//                 </p>

//                 <h1 className="text-lg mb-3">
//                   <span className='font-medium'>Member ID:</span> {membershipId}
//                 </h1>
//                 <div className="flex items-center flex-wrap bg-indigo-400 mx-auto rounded-full">
//                   <a className="text-white mx-auto inline-flex items-center md:mb-2 lg:mb-0" href={profileLink}>
//                     View Profile
//                   </a>
//                 </div>
//               </div>
//             </article>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Card;


import React from 'react';

const UserCard = ({ name, role, feedback, rating, imageUrl }) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? '★' : '☆';
  }).join('');

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <div className="flex justify-center mt-4">
        <img className="rounded-full border-2 border-gray-300 h-24 w-24" src={imageUrl} alt={name} />
      </div>
      <div className="p-5">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
        <p className="text-gray-500 text-sm mb-4">{role}</p>
        <p className="text-gray-600 text-base mb-4">{feedback}</p>
        <div className="text-yellow-400 text-xl">{stars}</div>
      </div>
    </div>
  );
};

export default UserCard;

