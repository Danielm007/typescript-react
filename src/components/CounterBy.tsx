import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {
  const [{ counter, clicks }, setState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (num: number): void => {
    setState((prevState) => ({
      ...prevState,
      counter: prevState.counter + num,
      clicks: prevState.clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
