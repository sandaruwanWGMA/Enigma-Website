import React, { useState } from "react";

export default function ListItem(props) {
  const [item, setItem] = useState(props.item);
  const handleToggleActive = () => {
    let newActive = item.active === 1 ? 0 : 1;
    setItem({ ...item, active: newActive });
  };
  return (
    <div
      className={`w-[800px] h- bg-gradient-to-b from-gray-500 to-orange-300 rounded-[50px] p-6 group ${
        item.active === 1 ? "is-active" : ""
      } duration-500  mb-3`}
    >
      <div className="flex items-center">
        <div className="w-full text-white text-xl   font-['Patrick Hand SC'] group-[.is-active]:font-bold duration-50 ">
          {item.question}
        </div>
        <div
          className="text-xl  rotate-90 group-[.is-active]:rotate-[270deg] cursor-pointer"
          onClick={handleToggleActive}
        >
          >
        </div>
      </div>

      <div className="overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500">
        {item.answer}
      </div>
    </div>
  );
}
