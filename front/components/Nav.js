import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/"><a>ホーム</a></Link></li>
        <li><Link href="login"><a>ログイン</a></Link></li>
        <li><Link href="auth"><a>サインアップ</a></Link></li>
        <li><Link href="#"><a>その他</a></Link></li>
      </ul>
      <style jsx>{`
      ul {
        with: 100%;
        padding: 0% 10%;
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
  )
}