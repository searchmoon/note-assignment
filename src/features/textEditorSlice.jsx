import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textInfo: [],
};

export const textEditorSlice = createSlice({
  name: "textEditor",
  initialState,
  reducers: {
    editorList: (state, action) => {
      state.textInfo = [...state.textInfo, action.payload];
    },
  },
});

export const { editorList } = textEditorSlice.actions;

export default textEditorSlice.reducer;
