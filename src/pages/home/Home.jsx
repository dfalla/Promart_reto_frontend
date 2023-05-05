import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useProductsStore } from '../../core/hooks';
import { CONSTANTS, CustomCard } from '../../core'
import { Button } from '@mui/material';


export const Home = () => {

  const { getProducts, products, getProductsByFilter } = useProductsStore();


  useEffect(() => {
    getProducts()
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '20px' }} >
      <Grid 
        sx={{marginBottom: 5, paddingLeft: [2,2,10,10]}}
        container 
        direction={["column","column","row","row"]}
        columnSpacing={{ xs: 2, md: 5 }}
        wrap='nowrap'
        gap={2} 
      >
        <Button variant='outlined' onClick={getProducts}>Todos</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`${CONSTANTS.ELECTRONICS}`)}> electronics</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`${CONSTANTS.JEWELERY}`)}>jewelery</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`${CONSTANTS.MENSCLOTHING}`)}>men’s clothing</Button>
        <Button variant='outlined' onClick={()=>getProductsByFilter(`${CONSTANTS.WOMENSCLOTHING}`)}>women’s clothing</Button>
      </Grid>

      <Grid 
        container
        direction={["column", "row", "row", "row"]}
        justifyContent="center"
        alignItems="center"
        paddingLeft={[0,5,5,5]}
        columnSpacing={{ xs: 2, sm: 0, md: 10 }} 
        rowSpacing={{ xs: 2, md: 5 }}
        columns={{xs: 1, sm: 9,  md: 12, lg: 16}}
      >
     
        {
          products.map((product)=>(
            <Grid item xs={1} sm={4} md={4} marginBottom={2} key={product.id}>
              <CustomCard {...product}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
