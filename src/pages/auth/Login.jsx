import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useAuthStore } from '../../core/hooks';


const validationSchema = Yup.object({
  username: Yup.string().required('Este campo es requerido'),
  password: Yup.string().required('Este campo es requerido')
})

const initialValues = {
  username: '',
  password: ''
}


export const Login = () =>{
  const{ startLogin } = useAuthStore();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { password, username } = values;
      startLogin({ username, password});
    },
  });

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            PROMART CAR
          </Typography>
            
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuario"
                name="username"
                autoFocus
                value={values.username}
                onChange={handleChange}
                error={touched.username && Boolean(errors.username)}

                helperText={touched.username && errors.username}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                helperText={touched.paswword && errors.paswword}

                error={touched.password && Boolean(errors.password)}

              />
      
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Iniciar Sesión
              </Button>
            </form>
              
          </Box>
      </Container>
  );
}