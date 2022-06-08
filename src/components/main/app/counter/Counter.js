import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Function Increment
  const CounterINC = () => {
    console.log("Increment Done");
    // setCounter(counter + 1);
    dispatch(increment());
  };

  // Function Decrement
  const CounterDRC = () => {
    console.log("Decrement Done");
    if (count == 0) {
      console.log("Value should not be negative");
      // dispatch(decrement());
    } else {
      // setCounter(counter - 1);
      dispatch(decrement());
    }
  };

  return (
    <div>
      <h1>Redux Practice</h1>
      <br />

      <h1 className="counter">Counter :- {count}</h1>
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

export default Counter;
