import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png";
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png";
import SeparatorImg from "../../assets/RegiserNow/separator.svg";
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import HalfLengthField from "./RegisterNowComponents/HalfLengthField";
import { db } from "../../firebase-config";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const RegisterNow = () => {
  const teamList = collection(db, "teams");

  function handleClick() {
    // do validations
    callDatabase();
  }

  async function callDatabase() {
    const teamName = "X-Raidss";
    const teamNameLower = teamName.toLowerCase();
    const teamEmail = "test4@gmail";
    const leaderName = "Peter";
    const leaderID = 12345;
    const leaderWhatsapp = "712345";
    const leaderEmail = "leader@gmail";

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

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="absolute w-[100%] h-[125vh]">
        <img
          className="absolute w-full h-full top-0 left-0"
          alt="register-now-bg"
          src={RegisterNowBG}
        />
      </div>
      <div className="w-[1293px] h-full relative">
        <div className="absolute w-[1159px] h-[299px] top-[40px] left-[52px]">
          <div className="absolute w-[985px] h-[133px] top-0 left-[103px]">
            <h1 className="register-now-heading">REGISTER NOW</h1>
          </div>
        </div>
        <div className="absolute w-[1223px] h-[213px] top-[126px] left-[36px]">
          <div className="h-[213px]">
            <div className="form-header absolute w-[300px] h-[48px] top-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM DETAILS :
            </div>
            <div className="relative w-[1223px] h-[230px] top-[59px]">
              <FullLengthField
                label="TEAM NAME :"
                defaultValue="XTREAM CODERS"
                top="0"
              />
              <FullLengthField
                label="TEAM EMAIL ADDRESS :"
                defaultValue="UGDJHSGF@GMAIL.COM"
                top="79px"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1223px] h-[289px] top-[362px] left-[36px]">
          <div className="h-[289px]">
            <div className="form-header absolute w-[300px] h-[48px] top-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM LEADER DETAILS :
            </div>
            <div className="relative w-[1223px] h-[230px] top-[59px]">
              <HalfLengthField
                label="NAME :"
                defaultValue="JHCZDJXF KBFJKD"
                top="0"
                left="0"
              />
              <HalfLengthField
                label="WHATSAPP NUMBER :"
                defaultValue="JHCZDJXF KBFJKD"
                top="79px"
                left="0"
              />
              <HalfLengthField
                label="UNIVERSITY INDEX / NIC :"
                defaultValue="JHCZDJXF KBFJKD"
                top="0"
                left="620px"
              />
              <HalfLengthField
                label="EMAIL ADDRESS :"
                defaultValue="UGDJHSGF@GMAIL.COM"
                top="79px"
                left="620px"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[1223px] h-[213px] top-[597px] left-[36px]">
          <div className="h-[213px]">
            <div className="form-header absolute w-[300px] h-[48px] top-[8px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
              TEAM MEMBERS :
            </div>
            <div className="relative w-[1223px] h-[72px] top-[59px]">
              <FullLengthField
                label="NUMBER OF TEAM MEMBERS :"
                defaultValue="XTREAM CODERS"
                top="0"
              />
            </div>
            <div className="add-member-btn relative w-[200px] h-[50px] top-[75px] left-[-20px]">
              <img
                className="absolute w-[28px] h-[33px] top-[7px] left-[25px]"
                alt="Plus"
                src={AddMembersIcon}
              />
              <div className="absolute w-[162px] h-[23px] top-0 left-[68px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] font-normal tracking-[0] leading-[48px] whitespace-nowrap">
                ADD MEMBERS
              </div>
              <img
                className="absolute w-[201px] h-px top-[48px] left-0 object-cover"
                alt="Line"
                src={SeparatorImg}
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[242px] h-[60px] top-[795px] left-[540px]">
          <div className="relative w-[248px] h-[69px] -top-px left-[-4px]">
            <div className="submit-frame">
              <button className="submit-btn" onClick={handleClick}>
                <div className="submit-padding" />
                <div className="submit-txt">SUBMIT</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;
