export default function List() {
  return (
    <div className="root">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <style jsx>{`
        .root {
          display: flex;
          flex-flow: row wrap;
        }
        .root > div {
          width: 47%;
          margin: 0px 6% 6% 0px;
          padding-top: 29.375%;
          background-color: red;
        }
        @media (max-width: 768px) {
          .root > div:nth-of-type(2n) {
            margin-right: 0px;
          }
        }
        @media (min-width: 769px) and (max-width: 1280px) {
          .root > div {
            width: 30%;
            margin: 0px 5% 5% 0px;
            padding-top: 18.75%;
          }
          .root > div:nth-of-type(3n) {
            margin-right: 0px;
          }
        }
        @media (min-width: 1281px) and (max-width: 1920px) {
          .root > div {
            width: 22%;
            margin: 0px 4% 4% 0px;
            padding-top: 13.75%;
          }
          .root > div:nth-of-type(4n) {
            margin-right: 0px;
          }
        }
        @media (min-width: 1921px) {
          .root > div {
            width: 18.4%;
            margin: 0px 2% 2% 0px;
            padding-top: 11.5%;
          }
          .root > div:nth-of-type(5n) {
            margin-right: 0px;
          }
        }
      `}</style>
    </div>
  );
}
