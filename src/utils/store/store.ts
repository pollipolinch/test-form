import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProjectSlice from "./projectSlice";

export const store = configureStore({
  reducer: {
    ProjectSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
