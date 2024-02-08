import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function ListItem({ open, toggle, title, desc }) {
  return (
    <div className="pt-[10px] bg-gradient-to-b from-faqbgcolor  rounded-[50px] ">
      <div
        className="py-[25px] px-[50px] flex justify-between items-center cursor-pointer duration-500 "
        onClick={toggle}
      >
        <p className="text-[22px] font-semibold duration-500 font-patrick text-white">
          {" "}
          {title}
        </p>
        <div className="text-white">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="text-[22px] pb-[20px] px-[50px] duration-500 text-white font-patrick">
          {desc}
        </div>
      </Collapse>
    </div>
  );
}
