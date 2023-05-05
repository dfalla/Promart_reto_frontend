import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { addProductInCart, removeFromCart } from '../store';
import { CONSTANTS } from '../';


export const CustomCard = (product) => {
  const { image, category, price, description, title } = product;
  const dispatch = useDispatch();

  const data = ( )=> {
    dispatch(addProductInCart(product))
    toast.success("Product added to cart", {
      position: "bottom-left",
    });
  }

  const removeProductFromCart = (product) => {
    dispatch(removeFromCart(product));
  }

  const disabled = window.location.href === CONSTANTS.CARRITO ? true : false;



  return (
    <Card sx={{ width: 230, height: 360 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${image}`}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign={'center'} color='primary'>
            {title.slice(0, 10)}
          </Typography>
          <Typography textAlign={'center'}>
            {category}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
            S/. {price}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign={'center'}>
            { description.slice(0, 40) }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          sx={{backgroundColor: disabled ? 'red': 'primary'}} 
          fullWidth 
          variant='contained' 
          onClick={!disabled ? data : () => removeProductFromCart(product)}
        >
          { !disabled ? 'Agregar al carrito' : 'Eliminar producto' }
        </Button>
      </CardActions>
    </Card>
  );
}


