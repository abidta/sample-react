import { useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const obj = [
    {
      name: "abid",
      age: 21,
    },{
      name:'abid',
      age:21
     },
     {
      name:'abid',
      age:21
     }
  ];
  let object={
    title:'HEllo',
    count
  }
  return (
    <div>
      <button onClick={addCount}>Add</button>
      {obj.map((obje,index)=><Counter  {...object} {...obje} key={index} />)}
      
    </div>
  );
}

export default App;
