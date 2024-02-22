import React, { useState } from "react";

function FullLengthField({ label, defaultValue, top }) {
  const [value, setValue] = useState(defaultValue);

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

  return (
    <div className="absolute w-[1223px] h-[72px] left-0" style={{ top: top }}>
      <div className="field-header w-[162px] h-[23px] top-0 left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] text-white text-[20px] absolute font-normal tracking-[0] leading-[40px] whitespace-nowrap">
        {label}
      </div>
      <div className="form-field absolute w-[1223px] h-[38px] top-[34px] left-0 bg-[url(https://c.animaapp.com/xWY8an1h/img/rectangle-24-7.svg)] bg-[100%_100%]">
        <input
          className="absolute w-[1199px] h-[38px] top-[0] left-[24px] [font-family:'Patrick_Hand_SC',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[25px] whitespace-nowrap"
          type="text"
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
          }}
        />
      </div>
    </div>
  );
}

export default FullLengthField;
