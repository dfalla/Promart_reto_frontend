import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



export const ResumeCard = ({ total }) => {
  return (
    <Card sx={{ minWidth: ['100%', '100%', '100%', 275]}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Resumen de la compra
        </Typography>
        <Typography variant="h5" component="div">
          Total : S/.{ total }
        </Typography>
      </CardContent>
      <Box textAlign={'center'} padding={1}>
        <Button size="small" variant='outlined' fullWidth>Comprar</Button>
      </Box>
    </Card>
  )
}

ResumeCard.propTypes = {
    total: PropTypes.number.isRequired
}
