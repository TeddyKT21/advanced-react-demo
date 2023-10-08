import { createSlice } from "@reduxjs/toolkit";
type UserState = {
  name: string;
  email: string;
};
type UserSliceAction = {
  payload: string;
};
export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName(state: UserState, action: UserSliceAction) {
      state.name = action.payload;
    },
    setEmail(state: UserState, action: UserSliceAction) {
      state.email = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { setEmail, setName } = userSlice.actions;
