import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png";
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png";
import SeparatorImg from "../../assets/RegiserNow/separator.svg";
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React, { useState } from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import MemberDetailsCard from "./RegisterNowComponents/MemberDetailsCard";
import { db } from "../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export const RegisterNow = () => {
  const [teamNameInput, setTeamName] = useState("XTREAM CODERS");
  const [teamEmailInput, setTeamEmail] = useState("XTREAM CODERS");
  const [leaderNameInput, setLeaderName] = useState("XTREAM CODERS");
  const [leaderIdInput, setLeaderId] = useState("XTREAM CODERS");
  const [leaderWhatsappInput, setLeaderWhatsapp] = useState("XTREAM CODERS");
  const [leaderEmailInput, setLeaderEmail] = useState("UGDJHSGF@GMAIL.COM");
  const [numberOfMembersInput, setNumberOfMembers] = useState("XTREAM CODERS");

  const [teamNameError, setTeamNameError] = useState("");
  const [teamEmailError, setTeamEmailError] = useState("");
  const [leaderNameError, setLeaderNameError] = useState("");
  const [leaderIdError, setLeaderIdError] = useState("");
  const [leaderWhatsappError, setLeaderWhatsappError] = useState("");
  const [leaderEmailError, setLeaderEmailError] = useState("");
  const [numberOfMembersError, setNumberOfMembersError] = useState("");

  const [members, setMembers] = useState([]);

  const [addMembersClickCount, setAddMembersClickCount] = useState(0);
  const [pageHeight, setPageHeight] = useState(985);

  const teamList = collection(db, "teams");

  function handleSubmitClick() {
    // do validations
    let isValid = true;

    // Validate team name
    const teamNameError = validateTeamName(teamNameInput);
    if (teamNameError) {
      setTeamNameError(teamNameError);
      isValid = false;
    }

    // Validate team email
    const teamEmailError = validateEmail(teamEmailInput);
    if (teamEmailError) {
      setTeamEmailError(teamEmailError);
      isValid = false;
    }

    // Validate leader name
    const leaderNameError = validateMemberName(leaderNameInput);
    if (leaderNameError) {
      setLeaderNameError(leaderNameError);
      isValid = false;
    }

    // Validate leader ID
    const leaderIdError = validateId(leaderIdInput);
    if (leaderIdError) {
      setLeaderIdError(leaderIdError);
      isValid = false;
    }

    // Validate leader Whatsapp
    const leaderWhatsappError = validateWhatsapp(leaderWhatsappInput);
    if (leaderWhatsappError) {
      setLeaderWhatsappError(leaderWhatsappError);
      isValid = false;
    }

    // Validate leader email
    const leaderEmailError = validateEmail(leaderEmailInput);
    if (leaderEmailError) {
      setLeaderEmailError(leaderEmailError);
      isValid = false;
    }

    // Validate number of members
    const numberOfMembersError = validateMemberCount(numberOfMembersInput);
    if (numberOfMembersError) {
      setNumberOfMembersError(numberOfMembersError);
      isValid = false;
    }

    // Validate each member
    members.forEach((member, index) => {
      const memberNameError = validateMemberName(member.memberName);
      const memberIdError = validateId(member.memberId);
      const memberWhatsappError = validateWhatsapp(member.memberWhatsapp);
      const memberEmailError = validateEmail(member.memberEmail);

      if (
        memberNameError ||
        memberIdError ||
        memberWhatsappError ||
        memberEmailError
      ) {
        const newMembers = [...members];
        newMembers[index].memberNameError = memberNameError;
        newMembers[index].memberIdError = memberIdError;
        newMembers[index].memberWhatsappError = memberWhatsappError;
        newMembers[index].memberEmailError = memberEmailError;
        setMembers(newMembers);
        isValid = false;
      }
    });

    if (isValid) {
      callDatabase();
    }
  }

  async function callDatabase() {
    const teamName = teamNameInput;
    const teamNameLower = teamName.toLowerCase();
    const teamEmail = teamEmailInput;
    const leaderName = leaderNameInput;
    const leaderID = leaderIdInput;
    const leaderWhatsapp = leaderWhatsappInput;
    const leaderEmail = leaderEmailInput;
    const teamMembers = {};

    // Assuming 'members' is an array of member data collected from your form
    members.forEach((member, index) => {
      teamMembers[`Member${index + 1}`] = {
        Name: member.memberName,
        Number: member.memberNumber,
        Email: member.memberEmail,
        ID: member.memberId,
      };
    });

    try {
      const data = await getDocs(teamList);
      const filteredData = data.docs.map((item) => ({
        id: item.id,
      }));
      const emailTaken = filteredData.find((item) => item.id === teamEmail);

      const q = query(
        collection(db, "teams"),
        where("teamNameLower", "==", teamName.toLowerCase())
      );

      const querySnapshot = await getDocs(q);

      if (!emailTaken) {
        if (querySnapshot.docs.length === 0) {
          try {
            await setDoc(doc(db, "teams", teamEmail), {
              teamName,
              teamEmail,
              leaderName,
              teamNameLower,
              leaderID,
              leaderWhatsapp,
              leaderEmail,
              teamMembers,
            });
            console.log("Registered Successfully");
          } catch {
            console.log("something went wrong");
          }
        } else {
          console.log("team name already taken");
        }
      } else {
        console.log("email taken");
      }
    } catch (err) {
      console.log("something went wrong");
    }
  }

  // Mock function to simulate checking the database
  //   const checkTeamName = (teamName) => {
  //     const existingTeamNames = ["XTREAM CODERS", "TEAM ALPHA", "TEAM BETA"]; // Add more team names as needed
  //     return existingTeamNames.includes(teamName.toUpperCase());
  //   };

  const handleAddMemberClick = () => {
    if (addMembersClickCount < 2) {
      setAddMembersClickCount((prevCount) => prevCount + 1);
      setPageHeight((prevHeight) => prevHeight + 260);
      setMembers([
        ...members,
        {
          memberName: "JHCZDJXF KBFJKD",
          memberNameError: "",
          memberId: "JHCZDJXF KBFJKD",
          memberIdError: "",
          memberWhatsapp: "JHCZDJXF KBFJKD",
          memberWhatsappError: "",
          memberEmail: "UGDJHSGF@GMAIL.COM",
          memberEmailError: "",
        },
      ]);
    } else {
      setAddMembersClickCount((prevCount) => prevCount + 1);
    }
  };

  const handleTeamNameChange = (newTeamName) => {
    setTeamName(newTeamName);

    // Validate the new team name
    const error = validateTeamName(newTeamName);
    setTeamNameError(error);
  };

  const handleTeamEmailChange = (newTeamEmail) => {
    setTeamEmail(newTeamEmail);
    const error = validateEmail(newTeamEmail);
    setTeamEmailError(error);
  };
  const handleLeaderNameChange = (newLeaderName) => {
    setLeaderName(newLeaderName);
    const error = validateMemberName(newLeaderName);
    setLeaderNameError(error);
  };
  const handleLeaderIdChange = (newLeaderId) => {
    setLeaderId(newLeaderId);
    const error = validateId(newLeaderId);
    setLeaderIdError(error);
  };
  const handleLeaderWhatsappChange = (newLeaderWhatsapp) => {
    setLeaderWhatsapp(newLeaderWhatsapp);
    const error = validateWhatsapp(newLeaderWhatsapp);
    setLeaderWhatsappError(error);
  };
  const handleLeaderEmailChange = (newLeaderEmail) => {
    setLeaderEmail(newLeaderEmail);
    const error = validateEmail(newLeaderEmail);
    setLeaderEmailError(error);
  };
  const handleNumberOfMembersChange = (newMemberCount) => {
    setNumberOfMembers(newMemberCount);
    const error = validateMemberCount(newMemberCount);
    setNumberOfMembersError(error);
  };
  const handleMemberNameChange = (index, newMemberName) => {
    const newMembers = [...members];
    newMembers[index].memberName = newMemberName;
    newMembers[index].memberNameError = validateMemberName(newMemberName);
    setMembers(newMembers);
  };
  const handleMemberIdChange = (index, newMemberId) => {
    const newMembers = [...members];
    newMembers[index].memberId = newMemberId;
    newMembers[index].memberIdError = validateId(newMemberId);
    setMembers(newMembers);
  };
  const handleMemberWhatsappChange = (index, newMemberWhatsapp) => {
    const newMembers = [...members];
    newMembers[index].memberWhatsapp = newMemberWhatsapp;
    newMembers[index].memberWhatsappError = validateWhatsapp(newMemberWhatsapp);
    setMembers(newMembers);
  };
  const handleMemberEmailChange = (index, newMemberEmail) => {
    const newMembers = [...members];
    newMembers[index].memberEmail = newMemberEmail;
    newMembers[index].memberEmailError = validateEmail(newMemberEmail);
    setMembers(newMembers);
  };

  const validateTeamName = (value) => {
    if (value.trim() === "") {
      return "TEAM NAME IS REQUIRED.";
    }
    // Add more validation rules as needed
    return null;
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value.trim() === "") {
      return "EMAIL IS REQUIRED.";
    } else if (!emailRegex.test(value)) {
      return "PLEASE ENTER A VALID EMAIL ADDRESS.";
    }
    // Add more validation rules as needed
    return "";
  };

  const validateId = (value) => {
    const idRegex =
      /^[0-9]{6}[A-z]$|^[0-9]{2}[A-z]{2}[0-9]{4}$|^[0-9]{10}[V,v]$|^[0-9]{12}$/;
    if (value.trim() === "") {
      return "ID IS REQUIRED.";
    } else if (!idRegex.test(value)) {
      return "PLEASE ENTER A VALID ID.";
    }
    // Add more validation rules as needed
    return "";
  };

  const validateWhatsapp = (value) => {
    const whatsappRegex = /^(07|\+947)[0-9]{8}$/;
    if (value.trim() === "") {
      return "WHATSAPP NUMBER IS REQUIRED.";
    } else if (!whatsappRegex.test(value)) {
      return "PLEASE ENTER A VALID WHATSAPP NUMBER.";
    }
    // Add more validation rules as needed
    return "";
  };

  const validateMemberName = (value) => {
    const memberNameRegex = /^[A-z][A-z ]*$/;
    if (value.trim() === "") {
      return "NAME IS REQUIRED.";
    } else if (!memberNameRegex.test(value)) {
      return "PLEASE ENTER A VALID NAME.";
    }
    // Add more validation rules as needed
    return "";
  };

  const validateMemberCount = (value) => {
    const countRegex = /^[0-9]+$/;
    if (value.trim() === "") {
      return "MEMBER COUNT IS REQUIRED.";
    } else if (!countRegex.test(value)) {
      return "PLEASE ENTER A NUMERICAL VALUE.";
    } else if (value < 1) {
      return "AT LEAST 1 MEMBER SHOULD BE IN THE TEAM.";
    } else if (value > 3) {
      return "NO MORE THAN 3 MEMBERS SHOULD BE IN THE TEAM.";
    }
    // Add more validation rules as needed
    return "";
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="absolute w-full" style={{ height: pageHeight + "px" }}>
        <img
          className="absolute w-full h-full top-0 left-0"
          alt="register-now-bg"
          src={RegisterNowBG}
        />
      </div>
      <div className="w-full relative" style={{ height: pageHeight + "px" }}>
        <div className="relative w-full h-[90px] mt-[30px]">
          <h1 className="register-now-heading ">REGISTER NOW</h1>
        </div>
        <div
          className="relative h-[260px] left-[56px]"
          style={{ width: "calc(100% - 120px)" }}
        >
          <div className="relative h-[260px]">
            <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM DETAILS :
            </div>
            <div className="relative w-full h-[170px]">
              <FullLengthField
                label="TEAM NAME :"
                defaultValue="XTREAM CODERS"
                top="0"
                onChange={handleTeamNameChange}
                errorMessage={teamNameError}
              />
              <FullLengthField
                label="TEAM EMAIL ADDRESS :"
                defaultValue="UGDJHSGF@GMAIL.COM"
                top="89px"
                onChange={handleTeamEmailChange}
                errorMessage={teamEmailError}
              />
            </div>
          </div>
        </div>
        <div
          className="relative h-[260px] left-[56px]"
          style={{ width: "calc(100% - 120px)" }}
        >
          <div className="relative h-[260px]">
            <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM LEADER DETAILS :
            </div>
            <MemberDetailsCard
              nameOnChange={handleLeaderNameChange}
              idOnChange={handleLeaderIdChange}
              whatsappOnChange={handleLeaderWhatsappChange}
              emailOnChange={handleLeaderEmailChange}
              nameErrorMessage={leaderNameError}
              idErrorMessage={leaderIdError}
              whatsappErrorMessage={leaderWhatsappError}
              emailErrorMessage={leaderEmailError}
            />
          </div>
        </div>
        <div
          className="relative h-[260px] left-[56px]"
          style={{ width: "calc(100% - 120px)" }}
        >
          <div className="relative h-[260px]">
            <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM MEMBERS :
            </div>
            <div className="relative w-full h-[110px]">
              <FullLengthField
                label="NUMBER OF TEAM MEMBERS :"
                defaultValue="XTREAM CODERS"
                top="0"
                onChange={handleNumberOfMembersChange}
                errorMessage={numberOfMembersError}
              />
            </div>
            {addMembersClickCount > 2 && (
              <div className="error-message absolute h-[12px] top-[169px] left-[204px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-[16px] whitespace-nowrap">
                MAXIMUM OF 2 ADDITIONAL MEMBERS ARE ALLOWED!
              </div>
            )}
            <button
              onClick={handleAddMemberClick}
              className="add-member-btn relative w-[200px] h-[80px] left-[-20px]"
            >
              <img
                className="absolute w-[28px] h-[33px] top-[7px] left-[25px]"
                alt="Plus"
                src={AddMembersIcon}
              />
              <div className="absolute w-[162px] h-[23px] top-0 left-[44px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] font-normal tracking-[0] leading-[48px] whitespace-nowrap">
                ADD MEMBERS
              </div>
              <img
                className="absolute w-[201px] h-px top-[48px] left-0 object-cover"
                alt="Line"
                src={SeparatorImg}
              />
            </button>
            <div className="relative w-full">
              {members.map((member, index) => (
                <div key={index} className="relative h-[260px]">
                  <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                    MEMBER {index + 1} DETAILS :
                  </div>
                  <MemberDetailsCard
                    nameOnChange={(newMemberName) =>
                      handleMemberNameChange(index, newMemberName)
                    }
                    idOnChange={(newMemberId) =>
                      handleMemberIdChange(index, newMemberId)
                    }
                    whatsappOnChange={(newMemberWhatsapp) =>
                      handleMemberWhatsappChange(index, newMemberWhatsapp)
                    }
                    emailOnChange={(newMemberEmail) =>
                      handleMemberEmailChange(index, newMemberEmail)
                    }
                    nameErrorMessage={member.memberNameError}
                    idErrorMessage={member.memberIdError}
                    whatsappErrorMessage={member.memberWhatsappError}
                    emailErrorMessage={member.memberEmailError}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[69px] bottom-[40px] flex flex-col justify-center align-middle">
          <div className="relative w-full h-[69px] justify-center align-middle">
            <div className="relative submit-frame">
              <button className="submit-btn" onClick={handleSubmitClick}>
                <div className="submit-padding" />
                <a className="submit-txt">SUBMIT</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
