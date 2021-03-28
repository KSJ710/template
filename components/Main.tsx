import { useState, useEffect } from "react";

export default function Main() {
  return (
    <main className="bg-blue-300">
      <p>テキストテキストテキスト</p>

      <style jsx>{`
        main {
          grid-area: main;
          height: 100vh;
        }
      `}</style>
    </main>
  );
}
