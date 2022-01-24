import { createSlice } from "@reduxjs/toolkit";

const signUp = createSlice({
  name: "signup",
  initialState: {
    account: "",
    password: "",
    phone: "",
    address: "",
  },
  reducers: {
    updateVal(state, { payload: { val } }) {
      state = val;
    },
  },
});

export const { updateVal } = signUp.actions;
export default signUp.reducer;
