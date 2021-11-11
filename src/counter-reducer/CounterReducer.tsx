import { useReducer } from "react";
import { doIncreaseBy, doReset } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

//Reducer es una funcion pura
//Funcion pura => Es una funcion que no interactua con nada del mundo exterior resuelve todo solamente usando los argumentos de la funcion
export const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  const handleClick = (num: number) => {
    dispatch(doIncreaseBy(num));
  };

  const handleReset = () => {
    dispatch(doReset());
  };

  return (
    <>
      <h1>Counter Reducer Segmentado: {counter}</h1>
      <h1>Previous: {previous}</h1>
      <h1>Changes: {changes}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
