import { configureStore } from "@reduxjs/toolkit";
import { default as SignUpReducer } from "./slice";

export const store = configureStore({ reducer: { signUp: SignUpReducer } });
