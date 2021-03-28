import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-red-300">
      <ul>
        <li>
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/login">
            <a>ログイン</a>
          </Link>
        </li>
        <li>
          <Link href="/auth/auth">
            <a>サインアップ</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>その他</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        nav {
          grid-area: nav;
        }
        ul {
          display: flex;
        }
        li {
          margin-right: 20px;
        }
        li:last-child {
          margin-right: 0px;
        }
      `}</style>
    </nav>
  );
}
