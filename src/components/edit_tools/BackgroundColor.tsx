/* eslint-disable tailwindcss/no-custom-classname */
import React, { useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { TempEditContext } from 'src/pages/templates/temp_1';
import Drop from 'src/components/svg/Drop';
import styles from './Background.module.scss';
import { useRecoilState } from 'recoil';
import { currentTargetState, editToolsDisplayState } from 'src/states/atoms/tempAtoms';

const BackgroundColor = (props): JSX.Element => {
  const tempEditVar: TempEditVar = useContext(TempEditContext);
  const [editToolDisplay, setEditToolsDisplay] = useRecoilState(editToolsDisplayState);
  const [currentTarget, setCurrentTarge] = useRecoilState(currentTargetState);

  const hundleChangeBgColer = (e) => {
    e.stopPropagation();
    // tempEditVar.currentTarget.style.backgroundColor = e.target.value;
    currentTarget.style.backgroundColor = e.target.value;
  };
  const hundleHiddenBgColor = () => {
    props.setDisplay('none');
  };

  const { data, error } = useSWR('/api/colors', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const colorList = data.map((color: Color) => (
      <li key={color.id} className={`${styles.color_list} scroll_snap_child`}>
        <button
          value={`${color.colorCode}`}
          className="absolute w-full h-full"
          onClick={hundleChangeBgColer}
        ></button>
        <div className={styles.label}>{color.id}</div>
        <div>
          <Drop colorCode={color.colorCode} />
          <p style={{ color: color.colorCode }} className="text-center">
            {color.name}
            <br />
            {color.kanaName}
          </p>
        </div>
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className="justify-center items-center bg-transparent bg_modal"
        onClick={hundleHiddenBgColor}
      >
        <ul className={styles.tool_bgcolor}>{colorList}</ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default BackgroundColor;
