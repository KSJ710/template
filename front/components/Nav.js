export default function Nav() {
  return (
    <div>
      <ul>
        <li>ホーム</li>
        <li>ログイン</li>
      </ul>
      <style jsx>{`
      ul {
        display: flex;
        background-color: red;
      }
      li {
        justify-content: space-between;
      }
    `}</style>
    </div>
  )
}