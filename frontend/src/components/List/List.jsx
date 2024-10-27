import React from 'react';

// Define the List component
const List = ({ items }) => {
  return (
    <ul className="list-disc pl-6 space-y-2 ">
      {items.map((item, index) => (
        <li key={index} className="text-white">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
