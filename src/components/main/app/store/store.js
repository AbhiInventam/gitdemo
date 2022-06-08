import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter/counterSlice";
import fromDataReducer from "../formData/formSlice";
import albumDataReducer from "../album/albumSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    formData: fromDataReducer,
    albumData: albumDataReducer,
  },
});
