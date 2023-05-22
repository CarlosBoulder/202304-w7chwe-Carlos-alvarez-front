import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface TokenStateStructure {
  id: string;
  token: string;
}

const initialUserState: TokenStateStructure = {
  id: "",
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentUserState: TokenStateStructure,
      action: PayloadAction<TokenStateStructure>
    ) => ({
      ...action.payload,
    }),
  },
});

export const { loginUser: loginActionCreator } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
