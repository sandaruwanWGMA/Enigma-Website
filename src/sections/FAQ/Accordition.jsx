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
      title: "What is the Registration Procedure for the Hackathon?",
      desc:
        "Participants must register as teams. Registration should be done through the ENIGMA website. Participants are expected to create  a team name" +
        " or " +
        "a dedicated team email address (accessible by all members of the team)",
    },
    {
      title: "How many members should be there in a team?",
      desc: "Each participating team must comprise a minimum of 1 member and a maximum of 3 members. ",
    },
    {
      title: "Is it mandatory to create an email address for a team? ",
      desc: "Yes, it is mandatory for participants to create a dedicated email address, intended solely for team communication and registration. All official correspondence will be directed to this designated email address.",
    },
    {
      title: "What is the procedure for inquiries? ",
      desc: "Contestants are encouraged to address any registration-related inquiries and any questions regarding the proceedings of the event directly to the organizing committee of ENIGMA, via their respective designated emails. Contact information will be provided upon request.",
    },
    {
      title: "Who is eligible to participate in the hackathon? ",
      desc: "Only undergraduates of the University of Moratuwa.",
    },
    {
      title: "What programming languages can be used for the hackathon?",
      desc: "Any language which is provided in the Hackerrank platform.",
    },
    {
      title: "What is the procedure to qualify for the second round?",
      desc: "Only the top 10 teams from the first round will qualify for the second round.",
    },
  ]);

  return (
    <section
      className="slides bg-cover bg-center h-screen overflow-hidden"
      id="faq"
    >
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
    </section>
  );
}
