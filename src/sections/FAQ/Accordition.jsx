import React, { useState } from "react";
import ListItem from "./components/ListItem";
import BgCover from "./assests/bgcover.png";
// import BgNewCover from "./assests/bgnew.svg";
import "./Accordition.css";

export default function Accordition() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const [list, setList] = useState([
    {
      title: "What is the level of expertise required for this hackathon?",
      desc: "Oh, absolutely no experience needed for this Python hackathon! If you can spell 'Python,' you're basically a coding prodigy already. In fact, if you've ever seen a snake or know what 'print' means, you're overqualified. Just bring your enthusiasm and maybe a keyboard (optional), and you'll be hacking away like a pro in no time. Good luck, coding genius",
    },
    {
      title: "Is internet access allowed during the competition?",
      desc: "Yes, you can use the internet to research and find answers to your questions. However, you cannot use the internet to ask questions to anyone outside of your team. You also cannot use the internet to find code to copy and paste into your project.",
    },
    {
      title: "Is there a penalty for incorrect submissions?",
      desc: "No, there is no penalty for incorrect submissions. You can submit as many times as you want, and we will only grade your last submission.",
    },
    {
      title:
        "Will there be an opportunity for questions or clarifications during the competition?",
      desc: "Yes, we will have a Discord server where you can ask questions and get clarifications. We will also have a live Q&A session during the competition.",
    },
    {
      title:
        "Will there be an opportunity for questions or clarifications during the competition?",
      desc: "Yes, we will have a Discord server where you can ask questions and get clarifications. We will also have a live Q&A session during the competition.",
    },
    {
      title:
        "Will there be an opportunity for questions or clarifications during the competition?",
      desc: "Yes, we will have a Discord server where you can ask questions and get clarifications. We will also have a live Q&A session during the competition.",
    },
    {
      title:
        "Will there be an opportunity for questions or clarifications during the competition?",
      desc: "Yes, we will have a Discord server where you can ask questions and get clarifications. We will also have a live Q&A session during the competition.",
    },
  ]);

  return (
    <div className="slides bg-cover bg-center h-screen overflow-hidden">
      <img className="w-full h-full z-0 absolute" src={BgCover} alt="bgcover" />

      <div className="z-2 relative">
        <div style={{ height: "50px" }}></div>
        <div className="faq-container">FAQ</div>
        {/* h-screen grid place-items-center  overflow*/}
        <div className="list-container">
          <div className="px-[40px] max-w-[800px] mb-9">
            {list.map((data, index) => (
              <ListItem
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
