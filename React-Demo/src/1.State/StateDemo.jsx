import React from "react";
const StateDemo = () => {
  const [count, setCount] = useState(0); // This is a state variable

  console.log("App component rendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <input
        type="text"
        onChange={(e) => {
          name = e.target.value;
          console.log("Name changed to:", name);
        }}
      />
      <h1>Hello {name}</h1>
      <p>Count: {count}</p>
      <Button handleClick={increment} name={"Increase"} />
      <Button handleClick={decrement} name={"Decrease"} />
    </React.Fragment>
  );
};

export default StateDemo;
