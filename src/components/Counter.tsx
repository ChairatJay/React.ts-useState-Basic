type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
}

function Counter({setCount, children}: CounterProps) {
 
  return (
    <>
      <div>{children}</div>
      <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={()=> setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
}

export default Counter;