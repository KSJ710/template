import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>mysite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form action="#">
          <h1>ログイン</h1>
          <ul>
            <li>
              <input type="text" id="name" name="name" placeholder="名前" />
            </li>
            <li>
              <input type="text" id="password" name="password" placeholder="パスワード" />
            </li>
          </ul>

        </form>
      </main>
      <footer>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

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
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  )
}
