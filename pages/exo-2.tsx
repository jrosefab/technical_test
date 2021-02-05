/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

/* corrigé de l'exercice 2*/
import { FC, useState } from "react";

/* I deleted the first usestate and pass it as a props */
const IncremenButton: FC<{ count: Function }> = ({ count }) => {
  return (
    <button
      onClick={() => {
        count();
      }}
    >
      Increment
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton count={() => setCount(count + 1)} />
    </div>
  );
};

export default Counter;
