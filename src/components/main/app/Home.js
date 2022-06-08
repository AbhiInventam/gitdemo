import React, { useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);

  // Function Increment
  const CounterINC = () => {
    console.log("Increment Done");
    setCounter(counter + 1);
  };

  // Function Decrement
  const CounterDRC = () => {
    console.log("Decrement Done");
    if (counter == 0) {
      console.log("Value should not be negative");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <h1>Redux Practice</h1>
      <br />

      <h1 className="increment">Counter :- {counter}</h1>
      <button
        onClick={() => CounterINC()}
        style={{ margin: "15px", fontSize: "20px" }}
      >
        Increment
      </button>
      <button
        onClick={() => CounterDRC()}
        style={{ margin: "15px", fontSize: "20px" }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Home;
