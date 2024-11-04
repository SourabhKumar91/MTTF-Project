import React from 'react'
import { Link } from 'react-router-dom'

function PopupBox({linkBox,closeIcon}) {
    return (
        <div className="absolute w-full h-screen top-24 shadow-lg border-t-2 border-white">
            <div className="bg-gradient-to-r px-24 from-[#0c0c0e] to-[#342e69] w-full h-full relative ">
                {/* Close Icon */}
                <button
                    className="absolute top-4 right-6 text-white text-[50px] font-bold hover:text-gray-300 transition duration-200"
                    onClick={() => closeIcon({ box1: false, box2: false, box3: false, box4: false })}
                >
                    &times;
                </button>

                <div className="p-6 flex justify-center">
                    <div className="w-full max-w-6xl flex gap-8 justify-around">
                        {linkBox.map((category, index) => (
                            <div key={index} className="flex-1 text-white">
                                <h3 className="text-2xl font-semibold mb-4">{category.heading}</h3>
                                <ul className="space-y-2">
                                    {category.links.map((link, linkIndex) => (
                                        <li key={linkIndex} className="transition-transform duration-200">
                                            <Link
                                                to={link.path}
                                                className="block text-white hover:bg-gray-800 p-2 rounded-md transition-colors duration-200"
                                                onClick={() => setShow({ box1: false, box2: false, box3: false, box4: false })}
                                            >
                                                {link.linkName}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default PopupBox