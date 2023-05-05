import { configureStore } from '@reduxjs/toolkit';
import { authSlice, productsSlice, cartSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

