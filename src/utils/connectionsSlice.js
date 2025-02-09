import { createSlice } from "@reduxjs/toolkit";

const connectionsSlice = createSlice({
  name: "connections",
  initialState: null,
  reducers: {
    addConnections: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { addConnections } = connectionsSlice.actions;
export default connectionsSlice.reducer;
