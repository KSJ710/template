import { useRecoilValue } from 'recoil';
import { tempHeadState } from 'src/states/atoms/tempAtoms';
import Head_1 from 'src/components/templates/layout_parts/header/Head_1';
import Head_2 from 'src/components/templates/layout_parts/header/Head_2';
import styles from './Head.module.scss';

type Props = {
  hdleTgEdtTls: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Head = (props: Props): JSX.Element => {
  const a = useRecoilValue(tempHeadState);
  if (1 == a) {
    return <Head_1 hdleTgEdtTls={props.hdleTgEdtTls} />;
  } else {
    return <Head_2 hdleTgEdtTls={props.hdleTgEdtTls} />;
  }
};

export default Head;
