import { useSelector } from "react-redux";


export const useProductsInCart = () => {
    const { productInCart } = useSelector(state => state.cart);
    
    const saveInLocalStorage = () => {
        localStorage.setItem('productsInCart', JSON.stringify(productInCart));
    }

    


  return {
    saveInLocalStorage
  }
}
