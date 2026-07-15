import { useState } from "react";
import "./App.css";
import Button from "./Button";

let name = "John Doe"; // This is a variable

function App() {
  const [count, setCount] = useState(0); // This is a state variable

  console.log("App component rendered");

  const increment = () => {
    setCount(count + 1)
  }
  
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          name = e.target.value;
          console.log("Name changed to:", name);
        }}
      />
      <h1>Hello {name}</h1>
      <p>Count: {count}</p>
      <Button handleClick={increment} name={'Increase'}/>
      <Button handleClick={decrement} name={'Decrease'}/>
    </>
  );
}
export default App;
