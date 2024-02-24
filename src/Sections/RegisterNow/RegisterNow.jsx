import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png"
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png"
import SeparatorImg from "../../assets/RegiserNow/separator.svg"
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React, {useState} from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import MemberDetailsCard from "./RegisterNowComponents/MemberDetailsCard";
import { db } from "../../firebase-config";
import { collection, doc, setDoc, getDocs, query, where, } from "firebase/firestore";


export const RegisterNow = () => {
    const [teamNameInput, setTeamName] = useState('XTREAM CODERS');
    const [teamEmailInput, setTeamEmail] = useState('XTREAM CODERS');
    const [leaderNameInput, setLeaderName] = useState('XTREAM CODERS');
    const [leaderIdInput, setLeaderId] = useState('XTREAM CODERS');
    const [leaderWhatsappInput, setLeaderWhatsapp] = useState('XTREAM CODERS');
    const [leaderEmailInput, setLeaderEmail] = useState('UGDJHSGF@GMAIL.COM');
    const [numberOfMembersInput, setNumberOfMembers] = useState('XTREAM CODERS');

    const [teamNameError, setTeamNameError] = useState('');
    const [teamEmailError, setTeamEmailError] = useState('');
    const [leaderNameError, setLeaderNameError] = useState('');
    const [leaderIdError, setLeaderIdError] = useState('');
    const [leaderWhatsappError, setLeaderWhatsappError] = useState('');
    const [leaderEmailError, setLeaderEmailError] = useState('');
    const [numberOfMembersError, setNumberOfMembersError] = useState('');

    const [member1NameInput, setMember1Name] = useState('XTREAM CODERS');
    const [member1IdInput, setMember1Id] = useState('XTREAM CODERS');
    const [member1WhatsappInput, setMember1Whatsapp] = useState('XTREAM CODERS');
    const [member1EmailInput, setMember1Email] = useState('UGDJHSGF@GMAIL.COM');
    const [member2NameInput, setMember2Name] = useState('XTREAM CODERS');
    const [member2IdInput, setMember2Id] = useState('XTREAM CODERS');
    const [member2WhatsappInput, setMember2Whatsapp] = useState('XTREAM CODERS');
    const [member2EmailInput, setMember2Email] = useState('UGDJHSGF@GMAIL.COM');

    const [member1NameError, setMember1NameError] = useState('');
    const [member1IdError, setMember1IdError] = useState('');
    const [member1WhatsappError, setMember1WhatsappError] = useState('');
    const [member1EmailError, setMember1EmailError] = useState('');
    const [member2NameError, setMember2NameError] = useState('');
    const [member2IdError, setMember2IdError] = useState('');
    const [member2WhatsappError, setMember2WhatsappError] = useState('');
    const [member2EmailError, setMember2EmailError] = useState('');

    const memberInputs = [
        {
            memberNameInput:member1NameInput, setMemberName:setMember1Name,
            memberIdInput:member1IdInput, setMemberId:setMember1Id,
            memberWhatsappInput:member1WhatsappInput, setMemberWhatsapp:setMember1Whatsapp,
            memberEmailInput:member1EmailInput, setMemberEmail:setMember1Email,
        },
        {
            memberNameInput:member2NameInput, setMemberName:setMember2Name,
            memberIdInput:member2IdInput, setMemberId:setMember2Id,
            memberWhatsappInput:member2WhatsappInput, setMemberWhatsapp:setMember2Whatsapp,
            memberEmailInput:member2EmailInput, setMemberEmail:setMember2Email,
        }
    ];
    const memberErrors = [
        {
            memberNameError:member1NameError, setMemberNameError:setMember1NameError,
            memberIdError:member1IdError, setMemberIdError:setMember1IdError,
            memberWhatsappError:member1WhatsappError, setMemberWhatsappError:setMember1WhatsappError,
            memberEmailError:member1EmailError, setMemberEmailError:setMember1EmailError,
        },
        {
            memberNameError:member2NameError, setMemberNameError:setMember2NameError,
            memberIdError:member2IdError, setMemberIdError:setMember2IdError,
            memberWhatsappError:member2WhatsappError, setMemberWhatsappError:setMember2WhatsappError,
            memberEmailError:member2EmailError, setMemberEmailError:setMember2EmailError,
        }
    ];

    const [addMembersClickCount, setAddMembersClickCount] = useState(0);
    const [pageHeight, setPageHeight] = useState(985);
    const [components, setComponents] = useState([]);

    const teamList = collection(db, "teams");

    function handleSubmitClick() {
        // do validations
        callDatabase();
    }

    async function callDatabase() {
        const teamName = teamNameInput;
        const teamNameLower = teamName.toLowerCase();
        const teamEmail = teamEmailInput;
        const leaderName = leaderNameInput;
        const leaderID = leaderIdInput;
        const leaderWhatsapp = leaderWhatsappInput;
        const leaderEmail = leaderEmailInput;
        const teamMembers = {
            Member1: { Name: "mem1", Number: "012" },
            Member2: { Name: "mem1", Number: "012" },
        };

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
    const checkTeamName = (teamName) => {
        const existingTeamNames = ['XTREAM CODERS', 'TEAM ALPHA', 'TEAM BETA']; // Add more team names as needed
        return existingTeamNames.includes(teamName.toUpperCase());
    };

    const handleAddMemberClick = () => {
        if (addMembersClickCount < 2) {
            const setMemberName = memberInputs[addMembersClickCount].setMemberName;
            const setMemberId = memberInputs[addMembersClickCount].setMemberId;
            const setMemberWhatsapp = memberInputs[addMembersClickCount].setMemberWhatsapp;
            const setMemberEmail = memberInputs[addMembersClickCount].setMemberEmail;

            const memberNameError = memberErrors[addMembersClickCount].memberNameError;
            const memberIdError = memberErrors[addMembersClickCount].memberIdError;
            const memberWhatsappError = memberErrors[addMembersClickCount].memberWhatsappError;
            const memberEmailError = memberErrors[addMembersClickCount].memberEmailError;

            const setMemberNameError = memberErrors[addMembersClickCount].setMemberNameError;
            const setMemberIdError = memberErrors[addMembersClickCount].setMemberIdError;
            const setMemberWhatsappError = memberErrors[addMembersClickCount].setMemberWhatsappError;
            const setMemberEmailError = memberErrors[addMembersClickCount].setMemberEmailError;

            const handleMemberNameChange = (newMemberName) => {
                setMemberName(newMemberName);
                const error = validateMemberName(newMemberName);
                setMemberNameError(error);
            };
            const handleMemberIdChange = (newMemberId) => {
                setMemberId(newMemberId);
                const error = validateId(newMemberId);
                setMemberIdError(error);
            };
            const handleMemberWhatsappChange = (newMemberWhatsapp) => {
                setMemberWhatsapp(newMemberWhatsapp);
                const error = validateWhatsapp(newMemberWhatsapp);
                setMemberWhatsappError(error);
            };
            const handleMemberEmailChange = (newMemberEmail) => {
                setMemberEmail(newMemberEmail);
                const error = validateEmail(newMemberEmail);
                setMemberEmailError(error);
            };

            setAddMembersClickCount(prevCount => prevCount + 1);
            setPageHeight(prevHeight => prevHeight + 260);
            setComponents(prevComponents => [...prevComponents,
                <div className="relative h-[260px]">
                    <div
                        className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                        MEMBER {addMembersClickCount + 1} DETAILS :
                    </div>
                    <MemberDetailsCard nameOnChange={handleMemberNameChange} idOnChange={handleMemberIdChange} whatsappOnChange={handleMemberWhatsappChange} emailOnChange={handleMemberEmailChange} nameErrorMessage={memberNameError} idErrorMessage={memberIdError} whatsappErrorMessage={memberWhatsappError} emailErrorMessage={memberEmailError}/>
                </div>
            ]);
        } else {
            setAddMembersClickCount(prevCount => prevCount + 1);
        }
    };


    const handleTeamNameChange = (newTeamName) => {
        setTeamName(newTeamName);

        if (checkTeamName(newTeamName)) {
            setTeamNameError('THIS TEAM NAME ALREADY EXISTS.');
        } else {
            setTeamNameError('');
            const error = validateTeamName(newTeamName)
            setTeamNameError(error);
        }
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





    const validateTeamName = (value) => {
        if (value.trim() === '') {
            return 'TEAM NAME IS REQUIRED.';
        }
        // Add more validation rules as needed
        return null;
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') {
            return 'EMAIL IS REQUIRED.';
        } else if (!emailRegex.test(value)) {
            return 'PLEASE ENTER A VALID EMAIL ADDRESS.';
        }
        // Add more validation rules as needed
        return '';
    };

    const validateId = (value) => {
        const idRegex = /^[0-9]{6}[A-z]$|^[0-9]{2}[A-z]{2}[0-9]{4}$|^[0-9]{10}[V,v]$|^[0-9]{12}$/;
        if (value.trim() === '') {
            return 'ID IS REQUIRED.';
        } else if (!idRegex.test(value)) {
            return 'PLEASE ENTER A VALID ID.';
        }
        // Add more validation rules as needed
        return '';
    };

    const validateWhatsapp = (value) => {
        const whatsappRegex = /^(07|\+947)[0-9]{8}$/;
        if (value.trim() === '') {
            return 'WHATSAPP NUMBER IS REQUIRED.';
        } else if (!whatsappRegex.test(value)) {
            return 'PLEASE ENTER A VALID WHATSAPP NUMBER.';
        }
        // Add more validation rules as needed
        return '';
    };

    const validateMemberName = (value) => {
        const memberNameRegex = /^[A-z][A-z ]*$/;
        if (value.trim() === '') {
            return 'NAME IS REQUIRED.';
        } else if (!memberNameRegex.test(value)) {
            return 'PLEASE ENTER A VALID NAME.';
        }
        // Add more validation rules as needed
        return '';
    };

    const validateMemberCount = (value) => {
        const countRegex = /^[0-9]+$/;
        if (value.trim() === '') {
            return 'MEMBER COUNT IS REQUIRED.';
        } else if (!countRegex.test(value)) {
            return 'PLEASE ENTER A NUMERICAL VALUE.';
        } else if(value<1) {
            return 'AT LEAST 1 MEMBER SHOULD BE IN THE TEAM.';
        } else if(value>3) {
            return 'NO MORE THAN 3 MEMBERS SHOULD BE IN THE TEAM.';
        }
        // Add more validation rules as needed
        return '';
    };

    return (
        <div className="bg-white flex flex-row justify-center w-full">
            <div className="absolute w-full" style={{height: pageHeight + 'px'}}>
                <img
                    className="absolute w-full h-full top-0 left-0"
                    alt="register-now-bg"
                    src={RegisterNowBG}
                />
            </div>
            <div className="w-full relative" style={{height: pageHeight + 'px'}}>
                <div className="relative w-full h-[90px] mt-[30px]">
                    <h1 className="register-now-heading ">
                        REGISTER NOW
                    </h1>
                </div>
                <div className="relative h-[260px] left-[56px]" style={{width: 'calc(100% - 120px)'}}>
                    <div className="relative h-[260px]">
                        <div
                            className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM DETAILS :
                        </div>
                        <div className="relative w-full h-[170px]">
                            <FullLengthField label="TEAM NAME :" defaultValue='XTREAM CODERS' top="0" onChange={handleTeamNameChange} errorMessage={teamNameError}/>
                            <FullLengthField label="TEAM EMAIL ADDRESS :" defaultValue="UGDJHSGF@GMAIL.COM" top="89px" onChange={handleTeamEmailChange} errorMessage={teamEmailError}/>
                        </div>
                    </div>
                </div>
                <div className="relative h-[260px] left-[56px]" style={{width: 'calc(100% - 120px)'}}>
                    <div className="relative h-[260px]">
                        <div
                            className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM LEADER DETAILS :
                        </div>
                        <MemberDetailsCard nameOnChange={handleLeaderNameChange} idOnChange={handleLeaderIdChange} whatsappOnChange={handleLeaderWhatsappChange} emailOnChange={handleLeaderEmailChange} nameErrorMessage={leaderNameError} idErrorMessage={leaderIdError} whatsappErrorMessage={leaderWhatsappError} emailErrorMessage={leaderEmailError}/>
                    </div>
                </div>
                <div className="relative h-[260px] left-[56px]" style={{width: 'calc(100% - 120px)'}}>
                    <div className="relative h-[260px]">
                        <div
                            className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                            TEAM MEMBERS :
                        </div>
                        <div className="relative w-full h-[110px]">
                            <FullLengthField label="NUMBER OF TEAM MEMBERS :" defaultValue="XTREAM CODERS" top="0" onChange={handleNumberOfMembersChange} errorMessage={numberOfMembersError}/>
                        </div>
                        {addMembersClickCount > 2 &&
                            <div
                                className="error-message absolute h-[12px] top-[169px] left-[204px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-[16px] whitespace-nowrap">
                                MAXIMUM OF 2 ADDITIONAL MEMBERS ARE ALLOWED!
                            </div>
                        }
                        <button onClick={handleAddMemberClick}
                                className="add-member-btn relative w-[200px] h-[80px] left-[-20px]">
                            <img
                                className="absolute w-[28px] h-[33px] top-[7px] left-[25px]"
                                alt="Plus"
                                src={AddMembersIcon}
                            />
                            <div
                                className="absolute w-[162px] h-[23px] top-0 left-[44px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] font-normal tracking-[0] leading-[48px] whitespace-nowrap">
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
                            <button className="submit-btn" onClick={handleSubmitClick}>
                                <div className="submit-padding"/>
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
