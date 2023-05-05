import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addProductInCart } from '../store';
import { CONSTANTS } from '../';

export const CustomCard = ({ src, description, price, category, id}) => {
  const dispatch = useDispatch();

  const data = ( )=> {
    dispatch(addProductInCart({ src, description, price, category, id}))
  }

  const otraFuncion = (id) => {
    console.log('Eliminar producto', id)
  }

  const disabled = window.location.href === CONSTANTS.CARRITO ? true : false;



  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`${src}`}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
           Categoria:  {category}
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
          // color={ !disabled ? 'error' : 'primary' } 
          fullWidth 
          variant='contained' 
          onClick={!disabled ? data : () => otraFuncion(id)}
        >
          { !disabled ? 'Agregar al carrito' : 'Eliminar producto' }
        </Button>
      </CardActions>
    </Card>
  );
}

CustomCard.propTypes = {
  src: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired
};
