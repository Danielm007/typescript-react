import { useCounter } from "../hooks/useCounter";

export const CounterEffectWithHook = () => {
  const { handleClick, elementToAnimate, counter } = useCounter({
    maxCount: 15,
  });

  return (
    <>
      <h1>CounterEffectWithHook:</h1>
      <h2 ref={elementToAnimate}>{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
