import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFormData } from "../formData/formSlice";
import { updateFormData } from "./formSlice";

const FormData = () => {
  const data = useSelector(selectFormData);
  // const data = useSelector((state) => state.formData);
  const [finalData, setFinalData] = useState(data);
  const dispatch = useDispatch();
  // console.log(data);

  function submitHandler(event) {
    event.preventDefault();
    console.log("data submitted event", event);
    console.log("data submitted event.target", event.target);
    console.log("Submit Data on Btn click:- ", finalData);
    // dispatch(updateFormData(finalData));
  }

  const onChangeHandler = (event) => {
    event.preventDefault();
    // console.log("Data Updatation After", event.target.name);
    const changeData = {
      ...data,
      [event.target.name]: event.target.value,
    };
    console.log("Data Updatation", changeData);
    // submitHandler(changeData);
    setFinalData(changeData);
    dispatch(updateFormData(changeData));
  };

  return (
    <div>
      <hr />
      <br />
      <h2>Name:- {data.name}</h2>
      <h2>Age:- {data.age}</h2>
      <h2>Address:- {data.address}</h2>
      <br />
      <hr />
      <br />
      <form onSubmit={submitHandler}>
        <label>Name:-</label>
        <input
          type="text"
          name="name"
          // value={data ? data.name : finalData.name}
          value={data.name}
          onChange={onChangeHandler}
        />
        <br />
        <label>Age:-</label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={onChangeHandler}
        />{" "}
        <br />
        <label>Address:-</label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={onChangeHandler}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormData;
