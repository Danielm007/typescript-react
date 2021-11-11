import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const initialState: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const Reducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action.type) {
    case "increaseBy":
      return {
        ...state,
        previous: state.counter,
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
      };

    case "reset":
      return {
        ...state,
        counter: 0,
        changes: 0,
        previous: 0,
      };

    default:
      return state;
  }
};

//Reducer es una funcion pura
//Funcion pura => Es una funcion que no interactua con nada del mundo exterior resuelve todo solamente usando los argumentos de la funcion
export const CounterReducer = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    Reducer,
    initialState
  );

  const handleClick = (num: number) => {
    dispatch({ type: "increaseBy", payload: { value: num } });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <h1>Previous: {previous}</h1>
      <h1>Changes: {changes}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
