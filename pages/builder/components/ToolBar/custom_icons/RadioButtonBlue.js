import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 500 500"
}) => (
  <svg
    paddingTop='50px'
    style={{ marginTop: '50', paddingTop: '50' }}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle class="st0" cx="204.7816" cy="204.85" r="201.85"
      style={{
        fill: 'none',
        stroke: '#1D8BF1',
        strokeWidth: 36,
        strokeMiterlimit: 1.0,
        marginTop: '36px',
        paddingTop: '36px',
      }}
      />
    <circle class="st1" cx="247.816" cy="248.5" r="130.656" fill='#1D8BF1'
      style={{ marginTop: '36px',
      paddingTop: '36px', }}
    />
  </svg>
);

export default SVG;
