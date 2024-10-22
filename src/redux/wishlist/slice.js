import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("wishlist");
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (e) {
        console.warn("Failed to load wishlist from localStorage", e);
        return [];
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("wishlist", serializedState);
    } catch (e) {
        console.error("Failed to save wishlist to localStorage", e);
    }
};

const initialState = {
    wishlist: loadFromLocalStorage(),
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const { id, quantity, name, price } = action.payload;

            const existingItem = state.wishlist.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity = quantity;
            } else {
                state.wishlist.push({ id, quantity, name, price });
            }

            saveToLocalStorage(state.wishlist);
        },

        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload.id);

            saveToLocalStorage(state.wishlist);
        },

        updateWishlistQuantity: (state, action) => {
            const { id, quantity } = action.payload;

            const existingItem = state.wishlist.find((item) => item.id === id);

            if (existingItem && quantity > 0) {
                existingItem.quantity = quantity;

                saveToLocalStorage(state.wishlist);
            }
        },
        clearWishlist: (state) => {
            state.wishlist = [];
            localStorage.removeItem("wishlist");
        },
    },
});

export const { addToWishlist, removeFromWishlist, updateWishlistQuantity, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
