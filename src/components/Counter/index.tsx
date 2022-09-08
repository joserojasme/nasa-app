import { ICounter } from "./interface";

const Counter = ({ value, handleRes, handleSum, handleReset }: ICounter) => {
  return (
    <div>
      <h4>{value}</h4>
      <button onClick={handleRes}>-1</button>
      <button onClick={handleReset}>Limpiar</button>
      <button onClick={handleSum}>+1</button>
    </div>
  );
};

export default Counter;
