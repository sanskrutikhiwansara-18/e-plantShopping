import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/CartSlice.jsx';

export const store = configureStore({
  reducer: { cart: cartReducer }
});
