import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link href="/"><a><li>ホーム</li></a></Link>
        <Link href="/login"><a><li>ログイン</li></a></Link>
        <Link href="#"><a><li>その他</li></a></Link>
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