import React, { useState } from "react";

function FullLengthField({
  label,
  defaultValue,
  top,
  onChange = () => {},
  errorMessage,
}) {
  const [value, setValue] = useState(defaultValue);
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
    <div className="absolute w-full h-[81px] left-0" style={{ top: top }}>
      <div className="field-header w-[162px] h-[23px] top-0 left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] absolute font-normal tracking-[0] leading-[40px] whitespace-nowrap">
        {label}
      </div>
      <div className="form-field absolute w-full h-[38px] top-[34px] left-0 bg-[url(https://c.animaapp.com/xWY8an1h/img/rectangle-24-7.svg)] bg-[100%_100%]">
        <input
          className="absolute h-[38px] top-[0] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[25px] whitespace-nowrap"
          type="text"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={localOnChange}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            width: "calc(100% - 24px)",
          }}
        />
      </div>
      <div
        className="error-message absolute h-[12px] top-[69px] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[12px] whitespace-nowrap"
        style={{ color: "red" }}
      >
        {errorMessage}
      </div>
    </div>
  );
}

export default FullLengthField;
