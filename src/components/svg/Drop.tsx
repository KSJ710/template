/* eslint-disable tailwindcss/no-custom-classname */
const Drop = (props): JSX.Element => {
  return (
    <svg width="16px" height="32px" viewBox="0 0 32 64">
      <g>
        <path
          style={{ fill: props.colorCode }}
          d="M32,48A16,16,0,0,1,0,48C0,39.16,16,0,16,0S32,39.16,32,48Z"
        />
      </g>
    </svg>
  );
};

export default Drop;
