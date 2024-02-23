import React, { useState } from 'react';
import HalfLengthField from "./HalfLengthField";

function MemberDetailsCard() {
    return (
        <div className="relative w-full h-[170px] flex flex-row"  style={{justifyContent: 'space-between'}}>
            <div className="relative m-0 h-[170px]" style={{width: '47%'}}>
                <HalfLengthField label="NAME :" defaultValue="JHCZDJXF KBFJKD" top="0"/>
                <HalfLengthField label="WHATSAPP NUMBER :" defaultValue="JHCZDJXF KBFJKD" top="89px"/>
            </div>
            <div className="relative m-0 h-[170px]" style={{width: '50%'}}>
                <HalfLengthField label="UNIVERSITY INDEX / NIC :" defaultValue="JHCZDJXF KBFJKD" top="0"/>
                <HalfLengthField label="EMAIL ADDRESS :" defaultValue="UGDJHSGF@GMAIL.COM" top="89px" />
            </div>
        </div>
    );
}

export default MemberDetailsCard;
