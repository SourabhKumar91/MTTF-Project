import React from 'react'

function HoverBox({links}) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow-md p-0 w-72 transition-transform transform hover:scale-105 hover:shadow-lg">
      <ul className="list-none p-0 m-0 ">
        {links.map((link) => (
          <li key={link} className="px-4 py-2 text-sm  hover:bg-[#03518F] hover:text-white  border-b border-gray-200 text-gray-800 last:border-b-0">
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HoverBox