export default function Main(props) {
  return (
    <main>
      {props.children}

      <style jsx>{`
        main {
          grid-area: main;
          background-color: #800000;
        }
      `}</style>
    </main>
  );
}
