import styles from './Head.module.scss';

type Props = {
  hdleTgEdtTls: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Head = (props: Props): JSX.Element => {
  return (
    <nav className="w-full h-full">
      <ul
        className={`flex bg-blue-400 gap-6 items-center place-content-center h-full`}
        onClick={props.hdleTgEdtTls}
      >
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
    </nav>
  );
};

export default Head;
