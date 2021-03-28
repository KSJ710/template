import Link from "next/link";

export default function SpNav() {
  return (
    <nav className="bg-red-300">
      <ul className="gap-y-4">
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
          position: absolute;
          width: 100vw;
          height: 100vh;
          opacity: 0.8;
        }
        ul {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        li {
        }
      `}</style>
    </nav>
  );
}
