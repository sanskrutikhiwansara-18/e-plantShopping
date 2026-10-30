import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const plant = action.payload;

      const existingItem = state.items.find(
        (item) => item.id === plant.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    },

    removeItem(state, action) {
      const id =
        typeof action.payload === 'object'
          ? action.payload.id
          : action.payload;

      state.items = state.items.filter(
        (item) => item.id !== id
      );
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (product) => product.id === id
      );

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (product) => product.id !== id
        );
      } else {
        item.quantity = Math.floor(Number(quantity));
      }
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;