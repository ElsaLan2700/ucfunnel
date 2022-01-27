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
    updateVal(state, action) {
      state.account = action.payload.account;
      state.password = action.payload.password;
      state.phone = action.payload.phone;
      state.address = action.payload.address;
    },
  },
});

export const { updateVal } = signUp.actions;
export default signUp.reducer;
