export default function Main(props) {
  return (
    <main>
      {props.children}

      <style jsx>{`
        main {
          grid-area: main;
          height: 100vh;

          background-color: #321900;
        }
      `}</style>
    </main>
  );
}
