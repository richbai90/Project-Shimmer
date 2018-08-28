import React from 'react';

export const IconUmbrella = () => (
  <svg className='umbrella' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' aria-labelledby='title'>
    <title id='title'>Umbrella Icon</title>
      <path d='M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z'/>
  </svg>
);


export const CheckboxGreyIcon = () => (
  <svg
    className='icon'
    width='100%'
    height='100%'
    viewBox='0 0 50 50'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <title id='title'>Checkbox Grey Icon</title>
      <path fill='#939598' d='M462.3,493.3H30.6c-11.9,0-21.6-9.7-21.6-21.6V29.9C9,18,18.7,8.3,30.6,8.3h441.8c11.9,0,21.6,9.7,21.6,21.6 v431.7C494,479,479.7,493.3,462.3,493.3z'/>
      <polygon points='237.465,338.474 410.371,166.13 375.125,130.894 202.799,304.089 124.852,225.861 92.62,258.093  205.233,370.706 '/>
  </svg>
);

export const RadioButtonBlue = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 500 500'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <circle cx='204.7816' cy='204.85' r='201.85'
      style={{
        fill: 'none',
        stroke: '#1D8BF1',
        strokeWidth: 36,
        strokeMiterlimit: 1.0,
      }}
      />
    <circle cx='247.816' cy='248.5' r='130.656' fill='#1D8BF1' />
  </svg>
);

export const CheckboxCustIcon = ({
  color= '#231F20',
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 500 500'
}) => (
  <svg
    color={color}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path
      style= {{
        fill: { color }, stroke: { color }, strokeWidth: 9, strokeMiterlimit: 10,
      }}
      d="M475.119,489.153h-455c-6.6,0-12-5.4-12-12v-455c0-6.6,5.4-12,12-12h455c6.6,0,12,5.4,12,12v455 C487.119,483.753,481.719,489.153,475.119,489.153z"/>
    <polygon style={{ fill: '#FFFFFF' }} points="226.391,315.931 397.157,145.718 362.353,110.915 192.152,281.973 115.17,204.71 83.34,236.54 194.561,347.761 "/>
  </svg>
);

export const Trashcan = ({
  color='#FFA103',
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 500 500'
}) => (
  <svg
    color={color}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path fill={color} d="M201.371,58.316h85.018c3.311,0,6.486,1.315,8.827,3.656l14.772,14.772h53.078 c7.034,0,12.736,5.702,12.736,12.736v25.173H110.967V90.024c0-7.044,5.71-12.753,12.753-12.753h53.06l14.132-14.536 C193.659,59.91,197.431,58.316,201.371,58.316z"/>
    <path fill={color} d="M129.395,134.66l226.926-0.527v228.529c0,20.328-16.504,36.794-36.832,36.747l-152.884-0.355 c-20.564-0.048-37.21-16.732-37.21-37.296V134.66z"/>
  </svg>
);

export const TriangleRightPointing = ({
  style = {},
  // fill = '#FFA103',
  fill = 'black',
  width = '100%',
  className = '',
  viewBox = '0 0 10 10'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
  <polygon fill={fill} points="1.2,8.6 1.2,1.3 5,4.9 "/>
  </svg>
);

export const TelephoneIcon = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 32 32'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
    <path
      fill={fill}
      d='M 2.56635 12.9241C 0.708307 9.55549 0 6.83983 0 5.00558C 0 3.17134 0.450658 2.64526 0.907953 2.22025C 1.36525 1.79524 3.42732 0.523908 3.77867 0.286808C 4.13002 0.0497085 5.47099 -0.41107 6.31193 0.798636C 7.15287 2.00834 8.73646 4.43718 9.82825 6.05069C 11.5415 8.33611 10.1766 9.33937 9.73572 9.94069C 8.92447 11.0472 8.45734 11.3201 8.45734 12.6788C 8.45734 14.0375 12.2545 17.8976 13.1625 18.8487C 14.0635 19.7926 17.8471 23.1094 19.0195 23.2868C 20.2002 23.4654 21.7807 22.2154 22.1168 21.8985C 23.8263 20.586 24.7912 21.581 25.5787 22.0136C 26.3661 22.4461 29.9239 24.663 31.0264 25.4103C 32.0641 26.1576 31.9992 27.3125 31.9992 27.3125C 31.9992 27.3125 29.859 30.7092 29.5996 31.1168C 29.2753 31.5924 28.4971 32 26.746 32C 24.995 32 23.1241 31.6802 18.6777 29.2349C 15.0396 27.234 11.5714 24.1009 9.75551 22.2666C 7.87475 20.4324 4.68876 16.772 2.56635 12.9241Z'
    />
  </svg>
);


export const DropdownMenuDetails = ({
  color= '#000000',
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 500 500'
}) => {
  const styles = {
    st0: {
      fill: 'none',
      stroke: '#000000',
      strokeMiterlimit: 10,
    },
    st1: {
      fill: 'none',
      stroke: '#000000',
      strokeWidth: 4,
      strokeMiterlimit: 10,
    },
    st2: {
      fill: '#000000',
      stroke: '#000000',
      strokeMiterlimit: 10,
    },
  };
  return (
  <svg
    color={color}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
  <g>
    <path style={styles.st2} d="M423.385,125.207l-18.734-18.734c-1.549-1.549-0.452-4.197,1.738-4.197h37.467c2.19,0,3.287,2.648,1.738,4.197 l-18.734,18.734C425.902,126.167,424.345,126.167,423.385,125.207z"/>
    <rect x="59.115" y="192.353" style={styles.st0} width="390.678" height="45.272"/>
    <rect x="59.115" y="237.27" style={styles.st0} width="390.678" height="45.272"/>
    <rect x="59.115" y="283.074" style={styles.st0} width="390.678" height="45.272"/>
    <line style={styles.st1} x1="59.115" y1="146.223" x2="449.792" y2="146.223"/>
    <circle cx="82.785" cy="215.494" r="11.114"/>
    <circle cx="82.785" cy="260.895" r="11.114"/>
    <circle cx="82.785" cy="306.297" r="11.114"/>
  </g>
  </svg>
  );
};

export const DropdownMenuSimple = ({
  color= '#000000',
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 500 500'
}) => {
  const styles = {
    st1: {
      fill: 'none',
      stroke: '#000000',
      strokeWidth: 4,
      strokeMiterlimit: 10,
    },
    st2: {
      fill: '#000000',
      stroke: '#000000',
      strokeMiterlimit: 10,
    },
  };
  return (
  <svg
    color={color}
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns='http://www.w3.org/2000/svg'
    className={`svg-icon ${className || ''}`}
    xmlnsXlink='http://www.w3.org/1999/xlink'
  >
  <g>
    <path style={styles.st2} d="M423.385,125.207l-18.734-18.734c-1.549-1.549-0.452-4.197,1.738-4.197h37.467c2.19,0,3.287,2.648,1.738,4.197 l-18.734,18.734C425.902,126.167,424.345,126.167,423.385,125.207z"/>
    <line style={styles.st1} x1="59.115" y1="146.223" x2="449.792" y2="146.223"/>
  </g>
  </svg>
  );
};
