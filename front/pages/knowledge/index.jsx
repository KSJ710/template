import Head from 'next/head'
import Nav from '../../components/Nav'

export default function Knowlege() {
  return (
    <div className="container">
      <Head>
        <title>mysite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div></div>
        <div></div>
        <div></div>
      </main>
      <footer>
      </footer>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        main > div {
          margin: 5px;
          width: 100px;
          height: 100px;
          background-color: red;
          border: 1px solid #000000;
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
    </div>
  )
}