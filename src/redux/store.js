import { configureStore } from "@reduxjs/toolkit";

import wishlistReducer from "./wishlist/slice";

const store = configureStore({
    reducer: {
        wishlist: wishlistReducer,
    },
});

export default store;
