import React, { useState } from "react";
import "../RegisterNowStyles/RegisterNow.css";
import "../RegisterNowStyles/TextInput.css";

function HalfLengthField({
  label,
  defaultValue,
  onChange = () => {},
  errorMessage,
}) {
  const [value, setValue] = useState("");
  // const [errorMessage, setErrorMessage] = useState('THIS TEAM NAME ALREADY EXISTS.');

  const handleFocus = () => {
    if (value === defaultValue) {
      setValue("");
    }
  };

  const handleBlur = () => {
    if (value.trim() === "") {
      setValue(defaultValue);
    }
  };

  const localOnChange = (e) => {
    onChange(e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="relative w-full h-[81px]">
      <div className="field-header absolute w-[162px] h-[23px] top-0 left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[20px] tracking-[0] leading-[40px] whitespace-nowrap">
        {label}
      </div>
      <div className="form-field absolute w-full h-[38px] top-[34px] left-0 bg-[url(https://c.animaapp.com/xWY8an1h/img/rectangle-24-5.svg)] bg-[100%_100%]">
        <input
          className="absolute h-[38px] top-[0] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[25px] whitespace-nowrap"
          type="text"
          placeholder={defaultValue}
          value={value}
          onChange={localOnChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            width: "calc(100% - 24px)",
          }}
        />
      </div>
      <div className="error-message absolute h-[12px] top-[69px] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[12px] whitespace-normal overflow-wrap-break-word">
        {errorMessage}
      </div>
    </div>
  );
}
export default HalfLengthField;
