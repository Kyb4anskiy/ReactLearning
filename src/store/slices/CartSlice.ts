import { createSlice } from "@reduxjs/toolkit";

export type CartState = {
  items: { id: number; name: string; price: number; quantily: number }[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
});
