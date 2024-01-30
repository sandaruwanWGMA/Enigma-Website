import React from "react";

function LinkedInSVG({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${width}`}
      fill="none"
      xlinkHref="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_12_22"
            transform="matrix(0.00796296 0 0 0.01 0.101852 0)"
          />
        </pattern>
        <image
          id="image0_12_22"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default LinkedInSVG;
