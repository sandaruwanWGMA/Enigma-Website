import RegisterNowBG from "../../assets/RegiserNow/register_now_bg.png"
import AddMembersIcon from "../../assets/RegiserNow/add_member_icon.png"
import SeparatorImg from "../../assets/RegiserNow/separator.svg"
import "../RegisterNow/RegisterNowStyles/RegisterNow.css";
import React, {useState} from "react";
import FullLengthField from "./RegisterNowComponents/FullLengthField";
import MemberDetailsCard from "./RegisterNowComponents/MemberDetailsCard";
import {db} from "../../firebase-config";
import {collection, doc, getDocs, query, setDoc, where,} from "firebase/firestore";


export const RegisterNow = () => {
    const [teamNameInput, setTeamName] = useState('XTREAM CODERS');
    const [teamEmailInput, setTeamEmail] = useState('XTREAM CODERS');
    const [leaderNameInput, setLeaderName] = useState('XTREAM CODERS');
    const [leaderIdInput, setLeaderId] = useState('XTREAM CODERS');
    const [leaderWhatsappInput, setLeaderWhatsapp] = useState('JHCZDJXF KBFJKD');
    const [leaderEmailInput, setLeaderEmail] = useState('UGDJHSGF@GMAIL.COM');
    const [numberOfMembersInput, setNumberOfMembers] = useState('XTREAM CODERS');

    const [teamNameError, setTeamNameError] = useState('');
    const [teamEmailError, setTeamEmailError] = useState('');
    const [leaderNameError, setLeaderNameError] = useState('');
    const [leaderIdError, setLeaderIdError] = useState('');
    const [leaderWhatsappError, setLeaderWhatsappError] = useState('');
    const [leaderEmailError, setLeaderEmailError] = useState('');
    const [numberOfMembersError, setNumberOfMembersError] = useState('');

    const [members, setMembers] = useState([]);
    const [memberDetails, setMemberDetails] = useState([]);

    const [addMembersClickCount, setAddMembersClickCount] = useState(0);
    const [pageHeight, setPageHeight] = useState(985);

    const [fieldStates, setFieldStates] = useState([0,0,0,0,0,0,0]);

    const teamList = collection(db, "teams");

    function handleSubmitClick() {
        // do validations
        callDatabase()
    }

    async function callDatabase() {
        const teamName = teamNameInput;
        const teamNameLower = teamName.toLowerCase();
        const teamEmail = teamEmailInput;
        const leaderName = leaderNameInput;
        const leaderID = leaderIdInput;
        const leaderWhatsapp = leaderWhatsappInput;
        const leaderEmail = leaderEmailInput;
        const memberCount = numberOfMembersInput;
        const teamMembers = memberDetails;

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
                            memberCount,
                            teamMembers,
                        });
                        alert("Registered Successfully");
                    } catch {
                        alert("Something Went Wrong");
                    }
                } else {
                    fieldStates[0] = 0;
                    setTeamNameError('TEAM NAME ALREADY TAKEN.');
                }
            } else {
                fieldStates[1] = 0;
                setTeamEmailError('TEAM EMAIL ALREADY TAKEN.');
            }
        } catch (err) {
            alert("Something Went Wrong");
        }
    }

    const handleAddMemberClick = () => {
        if (addMembersClickCount < 2) {
            setAddMembersClickCount(prevCount => prevCount + 1);
            setFieldStates([...fieldStates,0,0,0,0])
            setPageHeight(prevHeight => prevHeight + 260);
            setMembers([...members,
                {
                    memberName:'', memberNameError:'',
                    memberId:'', memberIdError:'',
                    memberWhatsapp:'', memberWhatsappError:'',
                    memberEmail:'', memberEmailError:''
                }
            ]);
            setMemberDetails([...memberDetails,
                {
                    memberName:'',
                    memberId:'',
                    memberWhatsapp:'',
                    memberEmail:''
                }
            ]);
        } else {
            setAddMembersClickCount(prevCount => prevCount + 1);
        }
    };


    const handleTeamNameChange = (newTeamName) => {
        setTeamName(newTeamName);
        setTeamNameError('');
        const errorNum = validateTeamName(newTeamName);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'TEAM NAME IS REQUIRED.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[0] = errorNum < 0 ? 1 : 0;
        setTeamNameError(error);
    };
    const handleTeamEmailChange = (newTeamEmail) => {
        setTeamEmail(newTeamEmail);
        const errorNum = validateEmail(newTeamEmail);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'TEAM EMAIL IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID EMAIL ADDRESS.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[1] = errorNum < 0 ? 1 : 0;
        setTeamEmailError(error);
    };
    const handleLeaderNameChange = (newLeaderName) => {
        setLeaderName(newLeaderName);
        const errorNum = validateMemberName(newLeaderName);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'LEADER NAME IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID NAME.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[2] = errorNum < 0 ? 1 : 0;
        setLeaderNameError(error);
    };
    const handleLeaderIdChange = (newLeaderId) => {
        setLeaderId(newLeaderId);
        const errorNum = validateId(newLeaderId);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'LEADER ID IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID ID.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[3] = errorNum < 0 ? 1 : 0;
        setLeaderIdError(error);
    };
    const handleLeaderWhatsappChange = (newLeaderWhatsapp) => {
        setLeaderWhatsapp(newLeaderWhatsapp);
        const errorNum = validateWhatsapp(newLeaderWhatsapp);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'LEADER WHATSAPP NUMBER IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID WHATSAPP NUMBER.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[4] = errorNum < 0 ? 1 : 0;
        setLeaderWhatsappError(error);
    };
    const handleLeaderEmailChange = (newLeaderEmail) => {
        setLeaderEmail(newLeaderEmail);
        const errorNum = validateEmail(newLeaderEmail);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'LEADER EMAIL IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID EMAIL.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[5] = errorNum < 0 ? 1 : 0;
        setLeaderEmailError(error);
    };
    const handleNumberOfMembersChange = (newMemberCount) => {
        setNumberOfMembers(newMemberCount);
        const errorNum = validateMemberCount(newMemberCount);
        const error =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'MEMBER COUNT IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A NUMERICAL VALUE.'
            : errorNum === 2 ? 'AT LEAST 1 MEMBER SHOULD BE IN THE TEAM.'
            : errorNum === 3 ? 'NO MORE THAN 3 MEMBERS SHOULD BE IN THE TEAM.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[6] = errorNum < 0 ? 1 : 0;
        setNumberOfMembersError(error);
    };
    const handleMemberNameChange = (index, newMemberName) => {
        const newMembers = [...members];
        newMembers[index].memberName = newMemberName;
        const errorNum = validateMemberName(newMemberName);
        newMembers[index].memberNameError =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'MEMBER NAME IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID NAME.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[7 + 4*index] = errorNum < 0 ? 1 : 0;
        setMembers(newMembers);
        memberDetails[index].memberName = newMemberName;
    };
    const handleMemberIdChange = (index, newMemberId) => {
        const newMembers = [...members];
        newMembers[index].memberId = newMemberId;
        const errorNum = validateId(newMemberId);
        newMembers[index].memberIdError =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'MEMBER ID IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID ID.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[8 + 4*index] = errorNum < 0 ? 1 : 0;
        setMembers(newMembers);
        memberDetails[index].memberId = newMemberId;
    };
    const handleMemberWhatsappChange = (index, newMemberWhatsapp) => {
        const newMembers = [...members];
        newMembers[index].memberWhatsapp = newMemberWhatsapp;
        const errorNum = validateWhatsapp(newMemberWhatsapp);
        newMembers[index].memberWhatsappError =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'MEMBER WHATSAPP NUMBER IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID WHATSAPP NUMBER.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[9 + 4*index] = errorNum < 0 ? 1 : 0;
        setMembers(newMembers);
        memberDetails[index].memberWhatsapp = newMemberWhatsapp;
    };
    const handleMemberEmailChange = (index, newMemberEmail) => {
        const newMembers = [...members];
        newMembers[index].memberEmail = newMemberEmail;
        const errorNum = validateEmail(newMemberEmail);
        newMembers[index].memberEmailError =
            errorNum === -1 ? ''
            : errorNum === 0 ? 'MEMBER EMAIL IS REQUIRED.'
            : errorNum === 1 ? 'PLEASE ENTER A VALID EMAIL.'
            : 'UNKNOWN ERROR IN VALIDATION';
        fieldStates[10 + 4*index] = errorNum < 0 ? 1 : 0;
        setMembers(newMembers);
        memberDetails[index].memberEmail = newMemberEmail;
    };

    
    const validateTeamName = (value) => {
        if (value.trim() === '') {
            return 0;
        }
        // Add more validation rules as needed
        return -1;
    };
    const validateMemberName = (value) => {
        const memberNameRegex = /^[A-z][A-z ]*$/;
        if (value.trim() === '') {
            return 0;
        } else if (!memberNameRegex.test(value)) {
            return 1;
        }
        // Add more validation rules as needed
        return -1;
    };
    const validateId = (value) => {
        const idRegex = /^[0-9]{6}[A-z]$|^[0-9]{2}[A-z]{2}[0-9]{4}$|^[0-9]{10}[V,v]$|^[0-9]{12}$/;
        if (value.trim() === '') {
            return 0;
        } else if (!idRegex.test(value)) {
            return 1;
        }
        // Add more validation rules as needed
        return -1;
    };
    const validateWhatsapp = (value) => {
        const whatsappRegex = /^(07|\+947)[0-9]{8}$/;
        if (value.trim() === '') {
            return 0;
        } else if (!whatsappRegex.test(value)) {
            return 1;
        }
        // Add more validation rules as needed
        return -1;
    };
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value.trim() === '') {
            return 0;
        } else if (!emailRegex.test(value)) {
            return 1;
        }
        // Add more validation rules as needed
        return -1;
    };
    const validateMemberCount = (value) => {
        const countRegex = /^[0-9]+$/;
        if (value.trim() === '') {
            return 0;
        } else if (!countRegex.test(value)) {
            return 1;
        } else if(value<1) {
            return 2;
        } else if(value>3) {
            return 3;
        }
        // Add more validation rules as needed
        return -1;
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
                            {members.map((member, index) => (
                                <div key={index} className="relative h-[260px]">
                                    <div
                                        className="form-header relative w-[300px] h-[48px] left-[5px] [font-family:'Quantico',Helvetica] font-normal text-[#f2b824] text-[23px] text-left tracking-[0] leading-[35px] whitespace-nowrap">
                                        MEMBER {index + 1} DETAILS :
                                    </div>
                                    <MemberDetailsCard nameOnChange={(newMemberName) => handleMemberNameChange(index, newMemberName)} idOnChange={(newMemberId) => handleMemberIdChange(index, newMemberId)} whatsappOnChange={(newMemberWhatsapp) => handleMemberWhatsappChange(index, newMemberWhatsapp)} emailOnChange={(newMemberEmail) => handleMemberEmailChange(index, newMemberEmail)} nameErrorMessage={member.memberNameError} idErrorMessage={member.memberIdError} whatsappErrorMessage={member.memberWhatsappError} emailErrorMessage={member.memberEmailError}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute w-full h-[69px] bottom-[40px] flex flex-col justify-center align-middle">
                    <div className="relative w-full h-[69px] justify-center align-middle">
                        <div className="relative submit-frame">
                            <button disabled={fieldStates.some(fieldState=>fieldState===0)} className="submit-btn" onClick={handleSubmitClick}>
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
