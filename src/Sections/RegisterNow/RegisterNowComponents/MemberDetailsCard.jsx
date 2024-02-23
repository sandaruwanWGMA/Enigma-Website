import React, { useState } from 'react';
import HalfLengthField from "./HalfLengthField";

function MemberDetailsCard({top}) {
    return (
        <div className="relative w-[1223px] h-[170px]" style={{top: top}}>
            <HalfLengthField label="NAME :" defaultValue="JHCZDJXF KBFJKD" top="0" left="0" />
            <HalfLengthField label="WHATSAPP NUMBER :" defaultValue="JHCZDJXF KBFJKD" top="89px" left="0" />
            <HalfLengthField label="UNIVERSITY INDEX / NIC :" defaultValue="JHCZDJXF KBFJKD" top="0" left="620px" />
            <HalfLengthField label="EMAIL ADDRESS :" defaultValue="UGDJHSGF@GMAIL.COM" top="89px" left="620px" />
        </div>
    );
}

export default MemberDetailsCard;
