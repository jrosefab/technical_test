/**
 * 3. Counter
 *
 * My counter component has a side-effect.
 * I don't want the "Increment count B" button to increment the countA variable.
 */

/* corrigé de l'exercice 3*/
import { useState } from "react";

/* the parent div has a function attributed, we must stopPropagation */
const Counter = () => {
  const [countA, setCountA] = useState<number>(10);
  const [countB, setCountB] = useState<number>(0);

  const handleIncrementB = (e: any) => {
    e.stopPropagation();
    setCountB(countB + 1);
  };

  return (
    <div
      onClick={() => {
        setCountA(countA + 1);
      }}
    >
      <h1>My Counter 3</h1>
      <pre>countA: {countA}</pre>
      <pre>countB: {countB}</pre>
      <div>
        <button onClick={handleIncrementB}>Increment count B</button>
      </div>
    </div>
  );
};

export default Counter;
