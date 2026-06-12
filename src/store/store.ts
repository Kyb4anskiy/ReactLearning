import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { cartSlice } from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // тип - копия структуры стора
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // изменять стор
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // что то брать из стор

// export const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   }
// })

// export type RootState = ReturnType<typeof store.getState>; // тип - копия структуры стора
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>(); // изменять стор
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// // получать данные из стора

// type Product = {id: number; name: string; price: number; quantity: number;};

// type CartState = {
//     items: Product[];
// }

// const initialState: CartState = {
//     items: [];
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action: PayloadAction<Product>) => {
//             const product = action.payload;
//             const existingItem = state.items.find(item => item.id === product.id);

//             if(existingItem) existingItem.quantity += 1;
//             else state.items.push({...product, quantity: 1});
//         },
//         removeFromCart: (state, action: PayloadAction<number>) => {
//             state.items = state.items.filter(item => item.id !== action.payload);
//         },
//         clearCart: (state) => {
//             state.items = [];
//         }
//     }
// })

// export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
// export default cartSlice.reducer;

// const selectCartState = (state: RootState) => state.cart;
// export const selectCartItems = createSelector([selectCartState], (cart) => cart.items)

// export const selectTotalPrice = createSelector([selectCartItems], (items) =>
// items.reduce((total, item) => total + item.price * item.quantity, 0))
