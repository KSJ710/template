import Link from 'next/link';

type ListValue = {
  value: string;
  href: string;
  shallow: boolean;
};

type Props = {
  value: ListValue[];
};

const List = (props: Props): JSX.Element => {
  const list = props.value?.map((props) => (
    <Link href={props.href} key={props.value} shallow={props.shallow}>
      <a>
        <li>{props.value}</li>
      </a>
    </Link>
  ));

  return <>{list}</>;
};

export default List;
