/* eslint-disable tailwindcss/no-custom-classname */
import { useRecoilValue } from 'recoil';
import { currentTargetState } from 'src/states/atoms/tempAtoms';
import useSWR from 'swr';
import axios from 'axios';
import anime from 'animejs';
import Drop from 'src/components/svg/Drop';
import styles from './Background.module.scss';

type Props = {
  display: classDisplay;
  setDisplay: React.Dispatch<React.SetStateAction<classDisplay>>;
};

const BackgroundColor = (props: Props): JSX.Element => {
  const currentTarget = useRecoilValue(currentTargetState);

  const hundleChangeBgColer = (e) => {
    e.stopPropagation();
    currentTarget.style.backgroundColor = e.target.value;
  };

  const hundleHiddenBgColor = () => {
    props.setDisplay('none');
  };

  const hundleChangeColorListBgColer = (e) => {
    let crtTrgChld: HTMLElement[] = Array.from(e.currentTarget.children);
    crtTrgChld.map((crtTrgChld) => {
      if (e.currentTarget.scrollTop >= 12155) {
        anime({
          targets: crtTrgChld,
          backgroundColor: '#ffffff',
          easing: 'easeInOutQuad',
          duration: 200,
        });
        anime({
          targets: crtTrgChld.getElementsByClassName('trackColorNum'),
          color: '#000000',
          easing: 'easeInOutQuad',
          duration: 200,
        });
      } else {
        anime({
          targets: crtTrgChld,
          backgroundColor: '#000000',
          easing: 'easeInOutQuad',
          duration: 200,
        });
        anime({
          targets: crtTrgChld.getElementsByClassName('trackColorNum'),
          color: '#ffffff',
          easing: 'easeInOutQuad',
          duration: 200,
        });
      }
    });
  };

  const { data, error } = useSWR('/api/colors', fetcher);
  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  } else {
    const colorList = data.map((color: Color) => (
      <li key={color.id} className={`${styles.tool_list} scroll_snap_child`}>
        <button
          value={`${color.colorCode}`}
          className="absolute w-full h-full"
          onClick={hundleChangeBgColer}
        ></button>
        <div className={`${styles.label} trackColorNum`}>{color.id}</div>
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
        <ul className={styles.tool_bgcolor} onScroll={hundleChangeColorListBgColer}>
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

export default BackgroundColor;
