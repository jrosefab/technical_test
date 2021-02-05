import { useState, useEffect } from "react";

/**
 * 1. Counter
 *
 * My counter component is not working.
 * Every second, I want to increment by one the count variable.
 */

/* corrigé de l'exercice 1*/
export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  /* using useEffect hook, with counter as dependancies */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [counter]);

  return (
    <div>
      <h1>My Counter 1</h1>
      <pre>{counter}</pre>
    </div>
  );
}
