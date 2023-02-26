import { configureStore } from "@reduxjs/toolkit";
import { dataSliceReducer } from "./data";
const store = configureStore({
  reducer: { data: dataSliceReducer },
});
export default store;
