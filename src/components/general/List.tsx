import Link from 'next/link';

type ListValue = {
  value: string;
  href: string;
};

type Props = {
  content: ListValue[];
};

const List = (props: Props): JSX.Element => {
  const list = props.content?.map((x) => (
    <Link href={x.href} key={x.value}>
      <a>
        <li>{x.value}</li>
      </a>
    </Link>
  ));

  return <>{list}</>;
};

export default List;
