import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [],
  currentIndex: 0,
  isLoading: false,
  error: false,
};
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setArr(state, action) {
      state.arr = action.payload;
    },
    changeCurrent(state, action) {
      const id = action.payload;
      state.currentIndex = state.arr.findIndex((item) => item.id === id);
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const dataSliceActions = dataSlice.actions;
export const dataSliceReducer = dataSlice.reducer;
export const fetchData = () => {
  return async (dispatch) => {
    dispatch(dataSliceActions.setIsLoading(true));

    const response = await fetch("https://course-api.com/react-tabs-project");

    const data = await response.json();

    dispatch(dataSliceActions.setIsLoading(false));
    if (!response.ok) {
      dispatch(dataSliceActions.setError(true));
    }
    dispatch(dataSliceActions.setArr(data));
  };
};
