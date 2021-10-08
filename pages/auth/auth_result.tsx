import { useRouter } from "next/router";
import Head from "next/head";
import Nav from "../../components/Nav";
const https = require("https");

export default function Auth() {
  const router = useRouter();
  const { confirmation_code } = router.query;
  console.log(router.asPath);
  const confirmResult = 0;
  // https.request(`https://mysite-710.auth.ap-northeast-1.amazoncognito.com/confirmUser?client_id=${client_id}&user_name=${user_name}&confirmation_code=${confirmation_code}`, (res) => {
  //     if (res.statusCode == 200) {
  //       confirmResult = <p>認証成功</p>
  //     } else {
  //       confirmResult = <p>認証失敗</p>
  //     }
  // }).on('error', (e) => {
  //   console.error(`エラーが出ました： ${e.message}`);
  // })

  return (
    <div className="container">
      <Head>
        <title>mysite</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main></main>
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
