import React from "react";

function Counter2({ count, set }) {
  return (
    <div>
      <button onClick={set}>Counter2</button>
      <h1>Counter2: {count}</h1>
    </div>
  );
}

export default Counter2;
