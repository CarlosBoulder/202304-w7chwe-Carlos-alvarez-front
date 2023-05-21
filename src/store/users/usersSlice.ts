import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UsersStructure from "./types";

export interface UserState {
  users: UsersStructure[];
}

export const initialState: UserState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadUsers: (
      currentState,
      action: PayloadAction<UsersStructure[]>
    ): UserState => ({
      ...currentState,
      users: [...action.payload],
    }),
  },
});

export const { loadUsers: loadUsersActionCreator } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
