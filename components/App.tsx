import { useState, useEffect } from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import SpNav from "../components/SpNav";
import Main from "../components/Main";
import Hambug from "../components/button/Hambug";
import Footer from "../components/Footer";

export default function Home() {
  const WIDTH_THRESHOLD = 768;
  const [screnn_width, setWidth] = useState(null);
  const [hambugState, sethambugState] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => setWidth(window.innerWidth));
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  function hambugToggle() {
    sethambugState(!hambugState);
  }

  return (
    <div className="root bg-purple-500 mx-auto">
      <Head>
        <title>My Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {WIDTH_THRESHOLD < screnn_width ? <Nav /> : null}
      <Main />
      {hambugState ? <SpNav /> : null}
      {WIDTH_THRESHOLD > screnn_width ? (
        <Hambug hambugState={hambugState} hambugToggle={hambugToggle} />
      ) : null}
      {WIDTH_THRESHOLD < screnn_width ? <Footer /> : null}
      <style jsx>{`
        .root {
          display: grid;
          grid-template-areas:
            "nav"
            "main"
            "footer";
          grid-template-rows: repeat(3, auto);
          grid-template-columns: repeat(1, auto);
        }
      `}</style>
    </div>
  );
}
