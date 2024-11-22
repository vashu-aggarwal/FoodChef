// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increment quantity
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
            }
        },
        removeItems: (state, action) => {
            const itemIndex = state.items.findIndex(item => item.card.info.id === action.payload);
            if (itemIndex >= 0) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity -= 1; // Decrease quantity if more than 1
                } else {
                    state.items.splice(itemIndex, 1); // Remove item if quantity is 1
                }
            }
        },
        clearItems: (state) => {
            state.items = [];
        }
    }
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
