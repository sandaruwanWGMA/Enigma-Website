import React, { useState } from "react";
import ListItem from "../../components/faq/ListItem";

export default function Accordition() {
  const [list, setList] = useState([
    {
      question: "What is the level of expertise required for this hackathon?",
      answer:
        "Oh, absolutely no experience needed for this Python hackathon! If you can spell 'Python,' you're basically a coding prodigy already. In fact, if you've ever seen a snake or know what 'print' means, you're overqualified. Just bring your enthusiasm and maybe a keyboard (optional), and you'll be hacking away like a pro in no time. Good luck, coding genius",
    },
    {
      question: "Is internet access allowed during the competition?",
      answer:
        "Yes, you can use the internet to research and find answers to your questions. However, you cannot use the internet to ask questions to anyone outside of your team. You also cannot use the internet to find code to copy and paste into your project.",
    },
    {
      question: "Is there a penalty for incorrect submissions?",
      answer:
        "No, there is no penalty for incorrect submissions. You can submit as many times as you want, and we will only grade your last submission.",
    },
    {
      question:
        "Will there be an opportunity for questions or clarifications during the competition?",
      answer:
        "Yes, we will have a Discord server where you can ask questions and get clarifications. We will also have a live Q&A session during the competition.",
    },
  ]);

  return (
    <div>
      <div className="text-4xl font-bold text-center mt-10">FAQ</div>
      <div className="h-screen justify-center items-center flex">
        <div className="list">
          {list.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
