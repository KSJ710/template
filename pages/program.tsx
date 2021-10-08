import Main from "../components/layout/Main";

export default function Program() {
  return (
    <Main>
      <article>
        <section>
          <h1>My Work History</h1>
        </section>
        <section>
          <h1>営業時代</h1>
          <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        </section>
      </article>
      <style jsx>{`
        main {
        }
        article {
          margin: 30px auto 0px;
          width: 75%;
        }
        section h1 {
          padding-left: 5px;
        }
      `}</style>
    </Main>
  );
}
