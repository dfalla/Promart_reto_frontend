import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { loadingProducts, loadProducts, setProducts } from "../store";
import Http from "../libs";



export const useProductsStore = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, isProductsLoaded, isProductsLoading } =  useSelector(state => state.products);

    const getProducts = async () => {
        dispatch(loadingProducts());

        try {
            const { data } = await Http.get('https://fakestoreapi.com/products');

            dispatch(setProducts(data));
        } catch (error) {
            console.log(error)
        }

        dispatch(loadProducts());
    }
    
    const getProductsByFilter = async (filter) => {
        dispatch(loadingProducts());

        try {
            const { data } = await Http.get(`https://fakestoreapi.com/products/category/${filter}`);

            dispatch(setProducts(data));
        } catch (error) {
            console.log(error)
        }

        dispatch(loadProducts());
    }


    return {
        products, 
        isProductsLoaded, 
        isProductsLoading,
        
        getProducts,
        getProductsByFilter
    }

}