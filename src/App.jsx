import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => setState(!state)}>Toggle</button>
      {state && <Counter />}
    </div>
  );
}

export default App;
