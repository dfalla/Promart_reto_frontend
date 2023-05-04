import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const CustomCard = ({ src, descripction, price, category}) => {
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
            { descripction.slice(0, 40) }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" fullWidth variant='contained'>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

CustomCard.propTypes = {
  src: PropTypes.string.isRequired, 
  descripction: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};
