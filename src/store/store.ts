import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ThemeSlice from "./slices/ThemeSlice";
import AuthSlice from "./slices/AuthSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    user: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>; // тип - копия структуры стора
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // изменять стор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // что то брать из стор
