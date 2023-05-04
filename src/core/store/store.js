import { configureStore } from '@reduxjs/toolkit';
import { authSlice, productsSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        products: productsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

