/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
import { currentTargetState } from 'src/states/atoms/tamplate_atoms';
import useSWR from 'swr';
import axios from 'axios';
import styles from './ChangeFontFamily.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeFontFamily = (props: Props): JSX.Element => {
  const currentTarget = useRecoilValue(currentTargetState);

  const handleHiddenFontFamily = (e) => {
    e.stopPropagation();
    props.setDisplay('none');
  };

  const handleChangeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.fontFamily = e.target.value;
  };

  const { data, error } = useSWR('/api/font_families', fetcher);
  if (error) {
    return <div style={{ display: props.display }}>error</div>;
  }

  if (!data) {
    return <div style={{ display: props.display }}>loading...</div>;
  } else {
    const fontFamilyList = data.map((fontFamily: FontFamily) => (
      <li style={{ fontFamily: fontFamily.style }} key={fontFamily.id} className={styles.tool_list}>
        <button value={fontFamily.style} onClick={handleChangeBgColer}></button>
        <div className={styles.label}>{fontFamily.id}</div>
        {fontFamily.name}
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className={styles.base}
        onClick={handleHiddenFontFamily}
      >
        <ul className={styles.tool_bgcolor}>{fontFamilyList}</ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default ChangeFontFamily;
