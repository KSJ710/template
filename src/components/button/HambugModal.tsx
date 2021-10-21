import { useState, useEffect } from 'react';
import Link from 'next/link';

function HambugModal() {
  const [hambugState, setHambugState] = useState(false);

  function Modal() {
    if (hambugState) {
      return (
        <nav>
          <ul className="gap-y-4">
            <li>
              <Link href="/">
                <a>ホーム</a>
              </Link>
            </li>
            <li>
              <Link href="/program">
                <a>プログラム</a>
              </Link>
            </li>
            <li>
              <Link href="/design">
                <a>デザイン</a>
              </Link>
            </li>
          </ul>

          <style jsx>{`
            nav {
              grid-area: nav;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 101;
              background-color: #000;
              opacity: 0.5;
            }
            ul {
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            li {
              color: #fff;
            }
          `}</style>
        </nav>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <button
        id="hambug"
        className={`hambug_trigger ${hambugState ? 'active' : ''}`}
        onClick={() => setHambugState(!hambugState)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <Modal />

      <style jsx>{`
        /*=============================
        .hambug-trigger
        =============================*/
        .hambug_trigger {
          cursor: pointer;
          height: 36px;
          position: absolute;
          right: 5px;
          top: 5px;
          width: 41px;
          z-index: 102;
        }
        .hambug_trigger span {
          background-color: #000;
          border-radius: 4px;
          height: 6px;
          left: 0;
          position: absolute;
          width: 100%;
        }
        .hambug_trigger,
        .hambug_trigger span {
          box-sizing: border-box;
          display: inline-block;
          transition: all 0.5s;
        }
        .hambug_trigger span:nth-of-type(1) {
          top: 0;
        }
        .hambug_trigger span:nth-of-type(2) {
          top: 15px;
        }
        .hambug_trigger span:nth-of-type(3) {
          bottom: 0;
        }

        /*=============================
        #hambug
        =============================*/
        #hambug.active span:nth-of-type(1) {
          -webkit-transform: translateY(20px) rotate(-45deg);
          transform: translateY(16px) rotate(-45deg);
        }
        #hambug.active span:nth-of-type(2) {
          opacity: 0;
        }
        #hambug.active span:nth-of-type(3) {
          -webkit-transform: translateY(-20px) rotate(45deg);
          transform: translateY(-14px) rotate(45deg);
        }
      `}</style>
    </>
  );
}

export default HambugModal;
