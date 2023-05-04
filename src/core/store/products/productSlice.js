import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    products: [],
    isProductsLoaded: false,
    isProductsLoading: false
 }

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.push(payload);
        },
        loadingProducts: (state) => {
            state.isProductsLoading = true;
        },
        loadProducts: (state) => {
            state.isProductsLoading = false;
            state.isProductsLoaded = true;
        },
        deleteProduct: (state, { payload }) => {
            state.products = state.products.filter((product) => product._id !== payload);
        },
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setProductsByFilters: (state, { payload }) => {
            state.productsByFilter = payload;
        },
        getProductsByFilters: (state, {payload})=>{
            state.products = []
            state.products.push(payload)
        }
    }
})

export const { 
    addProduct, 
    deleteProduct, 
    loadProducts, 
    loadingProducts, 
    setProducts, 
    getProductsFilters,
} = productsSlice.actions;
