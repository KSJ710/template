import { useState, useEffect } from "react";

export default function Hambug(props) {
  return (
    <button
      id="hambug"
      className={`hambug_trigger ${props.hambugState ? "active" : ""}`}
      onClick={props.hambugToggle()}
    >
      <span></span>
      <span></span>
      <span></span>

      <style jsx>{`
        /*=============================
        .hambug-trigger
        =============================*/
        .hambug_trigger {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 50px;
          height: 44px;
          cursor: pointer;
        }
        .hambug_trigger span {
          position: absolute;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: #fff;
          border-radius: 4px;
        }
        .hambug_trigger,
        .hambug_trigger span {
          display: inline-block;
          transition: all 0.5s;
          box-sizing: border-box;
        }
        .hambug_trigger span:nth-of-type(1) {
          top: 0;
        }
        .hambug_trigger span:nth-of-type(2) {
          top: 20px;
        }
        .hambug_trigger span:nth-of-type(3) {
          bottom: 0;
        }

        /*=============================
        #hambug
        =============================*/
        #hambug.active span:nth-of-type(1) {
          -webkit-transform: translateY(20px) rotate(-45deg);
          transform: translateY(20px) rotate(-45deg);
        }
        #hambug.active span:nth-of-type(2) {
          opacity: 0;
        }
        #hambug.active span:nth-of-type(3) {
          -webkit-transform: translateY(-20px) rotate(45deg);
          transform: translateY(-20px) rotate(45deg);
        }
      `}</style>
    </button>
  );
}
