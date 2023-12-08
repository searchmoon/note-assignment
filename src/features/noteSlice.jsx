import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noteList: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
});

export default noteSlice.reducer;
