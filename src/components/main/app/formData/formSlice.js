import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  name: "Abhishek",
  age: 21,
  address: "surat",
};

export const formSlice = createSlice({
  name: "formData",
  initialState: initialState,
  reducers: {
    updateFormData: (state, changeData) => {
      //   console.log("Slice state:- ", state);
      //   console.log("Slice state name:- ", state.name);
      console.log("Slice File changeData:- ", changeData);
      //   console.log("Slice File changeData:- ", changeData.payload.name);
      state.name = changeData.payload.name;
      state.age = changeData.payload.age;
      state.address = changeData.payload.address;
      //   state.[name,age,address] = changeData.payload.[name,age,address]
    },
  },
});
export const { updateFormData } = formSlice.actions;

export const selectFormData = (state) => state.formData;

export default formSlice.reducer;
