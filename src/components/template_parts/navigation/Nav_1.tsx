type Props = {
  hTgEitTls: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
const Nav = (props: Props): JSX.Element => {
  return (
    <nav className="w-full h-full ">
      <ul className="flex items-center place-content-center h-full" onClick={props.hTgEitTls}>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
        <li>トップ</li>
      </ul>
    </nav>
  );
};

export default Nav;
