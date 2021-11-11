import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5);
  // const elementToAnimate = useRef<HTMLHeadingElement>(null);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prevState) => Math.min(prevState + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;
    tl.current
      .to(elementToAnimate.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimate.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    // console.log(
    //   "%cSe llegó al valor máximo",
    //   "background-color: red; color: white; padding: 10px; font-weight: bold; border: 1px solid white; border-radius: 10px"
    // );

    tl.current.play(0);
  }, [counter]);

  return { handleClick, elementToAnimate, counter };
};
