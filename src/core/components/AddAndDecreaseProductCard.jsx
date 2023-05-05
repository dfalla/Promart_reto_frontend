import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { CONSTANTS } from '../constants';
import { useDispatch } from 'react-redux';
import { addProductInCart, decreaseCart, removeFromCart } from '../store';
import { Button } from '@mui/material';

export const AddAndDecreaseProductCard = (product) => {
    const disabled = window.location.href === CONSTANTS.CARRITO ? true : false;
    const { image, category, price, description, title, cartQuantity } = product;
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleAddToCart = (product) => {
        dispatch(addProductInCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const removeProductFromCart = (product) => {
        dispatch(removeFromCart(product));
    }
  return (
    <Card sx={{ display: 'flex', width: ["100%","100%","100%","70%"], padding: 2 }}>
        <CardMedia
            component="img"
            sx={{ width: '20%', padding: 2, borderRadius: 10 }}
            image={`${image}`}
            alt={`${title}`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {title.slice(0, 10)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {category}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    S/.{price}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {description.slice(0, 40)}
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous" onClick={()=>handleDecreaseCart(product)}>
                    {theme.direction === 'rtl' ? <AddIcon /> : <HorizontalRuleIcon />}
                </IconButton>
                <Typography>
                    { `${cartQuantity}` }
                </Typography>
                <IconButton aria-label="next" onClick={()=>handleAddToCart(product)}>
                    {theme.direction === 'rtl' ? <HorizontalRuleIcon /> : <AddIcon />}
                </IconButton>
            </Box>
            <Button 
                size="small" 
                sx={{backgroundColor: disabled ? 'red': 'primary'}} 
                fullWidth 
                variant='contained' 
                onClick={!disabled ? () => handleAddToCart(product) : () => removeProductFromCart(product)}
                >
                { !disabled ? 'Agregar al carrito' : 'Eliminar producto' }
            </Button>
        </Box>
  </Card>
  )
}
