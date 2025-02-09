import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, actions) => {
      return actions.payload;
    },
    removeRequest: (state, actions) => {
      const newArray = state.filter((each) => each._id !== actions.payload);
      return newArray;
    },
  },
});

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
