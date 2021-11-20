/* eslint-disable tailwindcss/no-custom-classname */
import { useSetRecoilState } from 'recoil';
import { tplHeadNumberState } from 'src/states/atoms/tplAtoms';
import useSWR from 'swr';
import axios from 'axios';
import styles from './ChangeHeadPart.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeHeadPart = (props: Props): JSX.Element => {
  const setHeadPartId = useSetRecoilState(tplHeadNumberState);

  const hundleChangeHeadPart = (e) => {
    e.stopPropagation();
    setHeadPartId(e.target.value);
  };

  const hundleHiddenBgColor = () => {
    props.setDisplay('none');
  };

  const { data, error } = useSWR('/api/head_parts', fetcher);
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>loading...</div>;
  } else {
    const headPartList = data.map((headPart: HeadParts) => (
      <li key={headPart.id} className={`${styles.tool_list} scroll_snap_child`}>
        <button
          value={`${headPart.id}`}
          className="absolute w-full h-full"
          onClick={hundleChangeHeadPart}
        ></button>
        <div className={styles.label}>{headPart.id}</div>
      </li>
    ));
    return (
      <div
        style={{ display: props.display }}
        className="justify-center items-center bg-transparent bg_modal"
        onClick={hundleHiddenBgColor}
      >
        <ul className={styles.tool_bg}>{headPartList}</ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default ChangeHeadPart;
