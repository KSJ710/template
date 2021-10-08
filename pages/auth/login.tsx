import Head from "next/head";
import Nav from "../../components/Nav";

export default function Login() {
  return (
    <div>
      <Head>
        <title>mysite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <form action="#" method="post">
          <ul>
            <li>
              <input type="text" id="name" name="name" placeholder="名前" />
            </li>
            <li>
              <input type="text" id="password" name="password" placeholder="パスワード" />
            </li>
            <li>
              <button type="submit">ログイン</button>
            </li>
          </ul>
        </form>
      </main>
      <footer></footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
}
