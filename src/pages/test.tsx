import Head from "next/head";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main>
        <div className="box1"></div>
        <div className="box2"></div>
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
        .box1 {
          height: 200px;
          width: 100%;
          background-color: red;
        }
      `}</style>
    </div>
  );
}
