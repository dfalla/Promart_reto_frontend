import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useProductsStore } from '../../core/hooks';
import { CustomCard } from '../../core'
import { Button } from '@mui/material';


export const Home = () => {

  const { getProducts, products, getProductsByFilter } = useProductsStore();

  useEffect(() => {
    getProducts()
  }, []);

    

  console.log('productos', products)
  return (
    <Box sx={{ flexGrow: 1 }} marginTop={'20px'} >
      <Grid 
        sx={{marginBottom: 5, paddingLeft: 5}}
        container 
        direction={'row'}
        columnSpacing={{ xs: 2, md: 5 }}
        wrap='nowrap'
        gap={2} 
      >
        <Button variant='outlined' onClick={getProducts}>Todos</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter('electronics')}> electronics</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter('jewelery')}>jewelery</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`men's clothing`)}>men’s clothing</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`women's clothing`)}>women’s clothing</Button>
      </Grid>

      <Grid 
        alignContent={'center'} 
        container columnSpacing={{ xs: 2, md: 23 }} 
        rowSpacing={{ xs: 2, md: 5 }} 
        columns={{xs: 1, sm: 8,  md: 12}}
      >
        {
          products.map(({description, price, image, id, category})=>(
            <Grid item xs={2} sm={4} md={4} marginBottom={2} key={id}>
              <CustomCard src={image} descripction={description} price={price} category={category}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
