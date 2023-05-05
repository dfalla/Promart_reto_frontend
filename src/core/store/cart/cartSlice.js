import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productsInCart: localStorage.getItem("productsInCart")
    ? JSON.parse(localStorage.getItem("productsInCart"))
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductInCart: (state, { payload }) => {
            const existingIndex = state.productsInCart.findIndex(
                (item) => item.id === payload.id
            );
            if (existingIndex >= 0) {
                state.productsInCart[existingIndex] = {
                  ...state.productsInCart[existingIndex],
                  cartQuantity: state.productsInCart[existingIndex].cartQuantity + 1,
                };
            } else {
                let tempProductItem = { ...payload, cartQuantity: 1 };
                state.productsInCart.push(tempProductItem);
                
            }
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
        },
        decreaseCart(state, {payload}) {
            const itemIndex = state.productsInCart.findIndex(
              (item) => item.id === payload.id
            );
      
            if (state.productsInCart[itemIndex].cartQuantity > 1) {
              state.productsInCart[itemIndex].cartQuantity -= 1;
      
            } else if (state.productsInCart[itemIndex].cartQuantity === 1) {
              const nextProductsInCart = state.productsInCart.filter(
                (item) => item.id !== payload.id
              );
      
              state.productsInCart = nextProductsInCart;
            }
      
            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
        },
        removeFromCart(state, {payload}) {
            state.productsInCart.map((productInCart) => {
              if (productInCart.id === payload.id) {
                const nextProductInCart = state.productsInCart.filter(
                  (item) => item.id !== productInCart.id
                );
      
                state.productsInCart = nextProductInCart;
      
              }
              localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart));
              return state;
            });
        },
        getTotals(state) {
            let { total, quantity } = state.productsInCart.reduce(
              (cartTotal, productInCart) => {
                const { price, cartQuantity } = productInCart;
                const itemTotal = price * cartQuantity;
      
                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;
      
                return cartTotal;
              },
              {
                total: 0,
                quantity: 0,
              }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
        clearCart(state) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        
    }
})

export const { 
    addProductInCart,
    decreaseCart,
    removeFromCart,
    getTotals,
    clearCart
} = cartSlice.actions;
