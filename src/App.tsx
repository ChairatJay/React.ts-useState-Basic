import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>Hello world</h1>
      <Counter setCount={setCount}>Count = {count}</Counter>
    </>
  );
}



export default App;