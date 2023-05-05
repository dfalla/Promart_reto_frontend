import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import { CustomCard } from '../../core';


export const Car = () => {
  const {productsInCart} = useSelector(state => state.cart);

  const arr = productsInCart.filter(product => product.id === 1)

  console.log('arr', arr)
  
  return (
    <Box sx={{ width: '80%' }} marginTop={3}>
      <Stack direction="column" spacing={2}>
        {
          productsInCart.map(({category, description, price, src, id}) => (
            <Stack direction="row" spacing={50} key={id}>
              <CustomCard category={category} description={description} price={price} src={src} id={id}/>
              <Box>
                { price }
              </Box>
            </Stack>
          ))
        }
       
      </Stack>
    </Box>
  )
}
