import { useEffect } from "react";
import anime from "animejs";

export default function Test() {
  useEffect(() => {
    anime({
      targets: "svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 3000,
    });
  });

  return (
    <>
      <style jsx>{``}</style>
    </>
  );
}
