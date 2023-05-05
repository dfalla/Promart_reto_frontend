import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { AddAndDecreaseProductCard, ResumeCard, getTotals } from '../../core';
import { useEffect } from 'react';


export const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  console.log('productos en el carrito', cart.productsInCart)

  return (
    <Box sx={{ width: '100%' }} marginTop={3}>
      <Stack direction={["column", "column", "column", "row"]}>
        <Box width={["100%", "100%", "100%", "70%"]} marginRight={2}> 
          <Stack direction="column" spacing={2}>
            {
              cart.productsInCart.length === 0 ? (<h1>No hay productos en el carrito</h1>) : 
                cart.productsInCart.map((product) => (
                  <Stack direction="row" spacing={50} key={product.id}  sx={{ padding: 2}}>
                    <AddAndDecreaseProductCard {...product}/>
                  </Stack>
                ))
              
            } 
          </Stack>
        </Box>
        <Box 
          sx={{padding: 2, height: '400px', marginTop: [2, 0], width: ["inherit", "inherit", "inherit", "30%"] }}
        > 
          {
            cart.productsInCart.length === 0 
              ? null
              : ( <ResumeCard total={ cart.cartTotalAmount }/> )
          }
          
        </Box>
      </Stack>
      {/*  */}
    </Box>
  )
}
