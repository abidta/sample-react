import React, { useState, useEffect } from "react";
import Counter2 from "./Counter2";

function Counter() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);
  useEffect(() => {
    console.log("counter1 \t" + state);
    console.log("counter2 \t"  + state2);
    return () => {
      console.log("clean " + state);
    };
  }, [state]);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>Count</button>
      <h1>Counter: {state}</h1>
      <Counter2
        count={state2}
        set={() => {
          setState2(state2 + 1);
        }}
      />
    </div>
  );
}

export default Counter;
