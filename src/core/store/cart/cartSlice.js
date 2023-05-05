import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsInCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductInCart: (state, { payload }) => {
            state.productsInCart.push(payload);
            localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
        },
        countProductsInCartFilterByCategory: (state, {payload}) => {
            state.productsInCart = state.productsInCart.filter((product) => product.category === payload).length;
        },
        deleteProduct: (state, { payload }) => {
            state.productsInCart = state.productsInCart.filter((product) => product._id !== payload);
            // localStorage.setItem('productsInCart', JSON.stringify(state.productsCart))
        },
    }
})

export const { 
    addProductInCart, 
    deleteProduct, 
} = cartSlice.actions;
