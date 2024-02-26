import React, { useState } from "react";
import HalfLengthField from "./HalfLengthField";

function MemberDetailsCard({
  nameOnChange,
  idOnChange,
  whatsappOnChange,
  emailOnChange,
  nameErrorMessage,
  idErrorMessage,
  whatsappErrorMessage,
  emailErrorMessage,
}) {
  return (
    <div
      className="relative w-full h-[170px] flex flex-row"
      style={{ justifyContent: "space-between" }}
    >
      <div
        className="relative m-0 h-[170px] flex flex-col"
        style={{ width: "49%", justifyContent: "space-between" }}
      >
        <HalfLengthField
          label="NAME :"
          defaultValue="JHCZDJXF KBFJKD"
          top="0"
          onChange={nameOnChange}
          errorMessage={nameErrorMessage}
        />
        <HalfLengthField
          label="WHATSAPP NUMBER :"
          defaultValue="+94719823456"
          top="89px"
          onChange={whatsappOnChange}
          errorMessage={whatsappErrorMessage}
        />
      </div>
      <div
        className="relative m-0 h-[170px] flex flex-col"
        style={{ width: "49%", justifyContent: "space-between" }}
      >
        <HalfLengthField
          label="UNIVERSITY INDEX / NIC :"
          defaultValue="210533X"
          top="0"
          onChange={idOnChange}
          errorMessage={idErrorMessage}
        />
        <HalfLengthField
          label="EMAIL ADDRESS :"
          defaultValue="UGDJHSGF@GMAIL.COM"
          top="89px"
          onChange={emailOnChange}
          errorMessage={emailErrorMessage}
        />
      </div>
    </div>
  );
}

export default MemberDetailsCard;
