import { createSlice } from "@reduxjs/toolkit";

export const nameSlice = createSlice({
  name: "name",
  initialState: {
    name: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setDefaultName: state => {
      state.name = ''
    }
  }
});

export const {setName, setDefaultName} = nameSlice.actions

export default nameSlice.reducer