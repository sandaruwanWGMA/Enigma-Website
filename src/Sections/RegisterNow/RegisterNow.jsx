import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png"
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png"
import SeparatorImg from "../../assets/RegiserNow/separator.svg"
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React, {useState} from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import MemberDetailsCard from "./RegisterNowComponents/MemberDetailsCard";


export const RegisterNow = () => {
    const [teamName, setTeamName] = useState('XTREAM CODERS');
    const [teamNameError, setTeamNameError] = useState('');
    const [clickCount, setClickCount] = useState(0);
    const [pageHeight, setPageHeight] = useState(985);
    const [components, setComponents] = useState([]);

    // Mock function to simulate checking the database
    const checkTeamName = (teamName) => {
        const existingTeamNames = ['XTREAM CODERS', 'TEAM ALPHA', 'TEAM BETA']; // Add more team names as needed
        return existingTeamNames.includes(teamName.toUpperCase());
    };

    const handleTeamNameChange = (newTeamName) => {
        setTeamName(newTeamName);

        if (checkTeamName(newTeamName)) {
            setTeamNameError('THIS TEAM NAME ALREADY EXISTS.');
        } else {
            setTeamNameError('');
        }
    };

    const handleClick = () => {
        if (clickCount < 2) {
            setClickCount(prevCount => prevCount + 1);
            setPageHeight(prevHeight => prevHeight + 260);
            setComponents(prevComponents => [...prevComponents,
                <div className="relative h-[260px]">
                    <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                        MEMBER {clickCount+1} DETAILS :
                    </div>
                    <MemberDetailsCard/>
                </div>
            ]);
        } else {
            setClickCount(prevCount => prevCount + 1);
        }
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="absolute w-full" style={{height: pageHeight+'px'}}>
                <img
                    className="absolute w-full h-full top-0 left-0"
                    alt="register-now-bg"
                    src={RegisterNowBG}
                />
            </div>
            <div className="w-full relative" style={{height: pageHeight+'px'}}>
                <div className="relative w-full h-[90px] mt-[30px]">
                    <h1 className="register-now-heading ">
                        REGISTER NOW
                    </h1>
                </div>
                <div className="relative h-[260px] left-[36px]" style={{width: 'calc(100% - 100px)'}}>
                    <div className="relative h-[260px]">
                        <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM DETAILS :
                        </div>
                        <div className="relative w-full h-[170px]">
                            <FullLengthField label="TEAM NAME :" defaultValue='XTREAM CODERS' top="0" onChange={value => handleTeamNameChange(value)}/>
                            {/*<div className="error-message absolute h-[15px] top-[70px] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[12px] whitespace-nowrap">
                                {teamNameError}
                            </div>*/}
                            <FullLengthField label="TEAM EMAIL ADDRESS :" defaultValue="UGDJHSGF@GMAIL.COM" top="89px" />
                        </div>
                    </div>
                </div>
                <div className="relative h-[260px] left-[36px]" style={{width: 'calc(100% - 100px)'}}>
                    <div className="relative h-[260px]">
                        <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM LEADER DETAILS :
                        </div>
                        <MemberDetailsCard/>
                    </div>
                </div>
                <div className="relative h-[260px] left-[36px]" style={{width: 'calc(100% - 100px)'}}>
                    <div className="relative h-[260px]">
                        <div className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM MEMBERS :
                        </div>
                        <div className="relative w-full h-[110px]">
                            <FullLengthField label="NUMBER OF TEAM MEMBERS :" defaultValue="XTREAM CODERS" top="0" />
                        </div>
                        {clickCount>2 &&
                            <div className="error-message absolute h-[12px] top-[169px] left-[204px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-[16px] whitespace-nowrap">
                                MAXIMUM OF 2 MEMBERS ARE ALLOWED!
                            </div>
                        }
                        <button onClick={handleClick} className="add-member-btn relative w-[200px] h-[80px] left-[-20px]">
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
                            {components}
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-[69px] bottom-[40px] flex flex-col justify-center align-middle">
                    <div className="relative w-full h-[69px] justify-center align-middle">
                        <div className="relative submit-frame">
                            <button className="submit-btn">
                                <div className="submit-padding" />
                                <a  className="submit-txt">SUBMIT</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RegisterNow;
