/* eslint-disable tailwindcss/no-custom-classname */
const Drop = (props): JSX.Element => {
  return (
    <svg className="mx-auto mb-1" width="12px" height="24px" viewBox="0 0 32 64">
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
