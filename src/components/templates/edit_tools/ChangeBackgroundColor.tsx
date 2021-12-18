/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
import { currentTargetState } from 'src/states/atoms/tamplate_atoms';
import useSWR from 'swr';
import axios from 'axios';
import anime from 'animejs';
import Drop from 'src/components/templates/svg/Drop';
import styles from './ChangeBackgroundColor.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const ChangeBackgroundColor = (props: Props): JSX.Element => {
  const currentTarget = useRecoilValue(currentTargetState);

  const handleChangeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.backgroundColor = e.target.value;
  };

  const handleHiddenBgColor = (e) => {
    e.stopPropagation();
    props.setDisplay('none');
  };

  // 背景カラーのパネルの背景カラー変更アニメーション
  const handleChangeColorListBgColer = (e) => {
    let curtTgtCh: HTMLElement[] = Array.from(e.currentTarget.children);
    curtTgtCh.map((curtTgtCh) => {
      if (e.currentTarget.scrollTop >= 12155) {
        anime({
          targets: curtTgtCh,
          backgroundColor: '#ffffff',
          easing: 'easeInOutQuad',
          duration: 200,
        });
        anime({
          targets: curtTgtCh.getElementsByClassName('_track_color_num'),
          color: '#000000',
          easing: 'easeInOutQuad',
          duration: 200,
        });
      } else {
        anime({
          targets: curtTgtCh,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad',
          duration: 200,
        });
        anime({
          targets: curtTgtCh.getElementsByClassName('_track_color_num'),
          color: '#ffffff',
          easing: 'easeInOutQuad',
          duration: 200,
        });
      }
    });
  };

  const { data, error } = useSWR('/api/colors', fetcher);
  if (error) {
    return <div style={{ display: props.display }}>error</div>;
  }

  if (!data) {
    return <div style={{ display: props.display }}>loading...</div>;
  } else {
    const colorList = data.map((color: Color) => (
      <li key={color.id} className={styles.tool_list}>
        <button value={color.colorCode} onClick={handleChangeBgColer}></button>
        <div className={`${styles.label} _track_color_num`}>{color.id}</div>
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
      <div style={{ display: props.display }} className={styles.base} onClick={handleHiddenBgColor}>
        <ul className={styles.tool_bgcolor} onScroll={handleChangeColorListBgColer}>
          {colorList}
        </ul>
      </div>
    );
  }
};

const fetcher: Fetcher = (url) =>
  axios.get(url).then((res) => {
    return res.data;
  });

export default ChangeBackgroundColor;
